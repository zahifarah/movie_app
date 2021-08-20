import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 3000);
    };
    render() {
        const {isLoading} = this.state;
        return <div>{ isLoading ? "Loading..." : "NOT loading" }</div>
    };
};

// export to use, default is "index.js"
export default App;
