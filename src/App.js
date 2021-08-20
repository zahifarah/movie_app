/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { thisStringValue } from 'es-abstract';

class App extends React.Component {
    state = {
        count: 0
    };
    
    add = () => {
        this.setState(current => ({count: current.count + 1}));
    };
    remove = () => {
        this.setState(current => ({count: current.count -1 }));
    };

    render() {
        return (
        <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}> Add </button>
            <button onClick={this.remove}> Remove </button>
        </div>
        )
    }
}

// export to use, default is "index.js"
export default App;
