/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Cheeseburger",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/15/f8/34/a0/photo0jpg.jpg",
        rating: 10
    },
    {
        id: 2,
        name: "Ramen",
        image: "https://media.istockphoto.com/photos/ramen-asian-noodle-in-broth-with-beef-tongue-meat-mushroom-and-egg-picture-id1135293039?k=6&m=1135293039&s=612x612&w=0&h=ugDJu7hNTWh2-dmXMmapeJiiIz3cGkLSP4NXcf9-5nQ=",
        rating: 8.5
    },
    {
        id: 3,
        name: "Sushi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1jzsmk6Enw4asBFyybY45StUeMb98xyXLw&usqp=CAU",
        rating: 10
    },
];

function Food({name, picture, rating}) { // props.name deconstructed
    // console.log(name)
    return <div>
        <h2>I like {name}</h2>
        <h3>Rating {rating}/10</h3>
        <img src={picture} alt={name}/>
    </div> 
};

// sort of validation using prop-types module
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

// the App component is the only one we're rendering (in "index.js")
function App() {
    return (
        <div>
        {/* <Food fav="kimchi" /> */}
        {foodILike.map( dish => ( 
            <Food 
                key={dish.id} 
                name={dish.name} 
                picture={dish.image} 
                rating={dish.rating} 
            /> ))}
        </div>
    );
};

/** we can create components differently, breaking down and calling them in App component */
// function renderFood(dish) {
//     return <Food name={dish.name} picture={dish.image} />
// }

// export to use, default is "index.js"
export default App;
