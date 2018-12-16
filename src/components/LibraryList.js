import React, { Component } from 'react';
// Connect component to the redux store
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        return;
    }
}

// Take application state (insdie Redux store) and map it as props to this component
const mapStateToProps = state => {
    // Access to state object inside this function
    console.log(state);

    // Communicate list of libraries to LibraryList component
    // Return object that will show up as props to LibraryList component
    return { }
};

// Give LibraryList access to libraries key piece of state
// Call function connect which returns another function
// Call that other function using LibraryList
export default connect(mapStateToProps)(LibraryList);