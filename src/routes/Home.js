import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
   // initial state basically
   state = {
      isLoading: true,
      movies: [],
   };

   // API call to get movies as JSON
   getMovies = async () => {
      const {
         data: {
            data: { movies },
         },
      } = await axios.get(
         "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
      // change the state AFTER getMovies() finishes fetching the data
      this.setState({ movies: movies, isLoading: false }); // movies (from state): movies (from axios), can be written as just "movies"
      // now, state contains a field called "movies" containing all the information from our API call.
   };

   componentDidMount() {
      this.getMovies();
   }

   render() {
      const { isLoading, movies } = this.state;
      return (
         <section className="container">
            {isLoading ? (
               <div className="loader">
                  <span className="loader__text">Loading...</span>
               </div>
            ) : (
               <div className="movies">
                  {movies.map((movie) => {
                     return (
                        <Movie
                           key={movie.id}
                           id={movie.id}
                           title={movie.title}
                           year={movie.year}
                           summary={movie.summary}
                           poster={movie.medium_cover_image}
                           genres={movie.genres}
                        />
                     );
                  })}
               </div>
            )}
         </section>
      );
   }
}

// export to use, default is "index.js"
export default Home;

// yts: https://yts.mx/api/v2/list_movies.json
// proxy: https://yts-proxy.nomadcoders1.now.sh/list_movies.json
// https://yts-proxy.now.sh/list_movies.json?sort_by=rating (from https://github.com/HTlee1990/movie_app/blob/master/src/API/Api.js)
