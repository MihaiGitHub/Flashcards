import React, { Component } from 'react';
import { FlatList } from 'react-native';

// Connect component to the redux store
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    // Helper method for rendering items
    renderItem(library){
        return <ListItem library={library} />;
    }

    render() {
        // this.props contains libraries: state.libraries
        console.log(this.props);
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(library) => library.id} // Function that tells FlatList how to generate its own key for each item
            />
        );
    }
}

// After connect helper gets access to state, connects the state to the props in this component
// Take application state (insdie Redux store) and map it as props to this component
const mapStateToProps = state => {
    // Access to state object inside this function
    console.log(state);

    // Communicate list of libraries to LibraryList component
    // Return object that will show up as props to LibraryList component
    return { libraries: state.libraries }
};

// Give LibraryList access to libraries key piece of state
// Call function connect which returns another function
// Call that other function using LibraryList
export default connect(mapStateToProps)(LibraryList);