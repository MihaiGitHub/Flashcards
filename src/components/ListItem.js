import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// Import connect to call the action creators
import { connect } from 'react-redux';
import { CardSection } from './common';
// Import all available action creators
import * as actions from '../actions'; 

class ListItem extends Component {
    // Helper method
    renderDescription(){
        const { library, expanded } = this.props;

        // If this library is selected than show description
        if(expanded){
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        // Destructuring
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        // Call action creator and pass library id on ListItem click
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

// Add function to consume piece of app level state; Take selected library id and import it into this component
const mapStateToProps = (state, ownProps) => { // ownProps is exactly equal to this.props inside component
    // expanded = true or false
    const expanded = state.selectedLibraryId === ownProps.library.id;

    // Component can just look at expanded flag to show/hide description
    return { expanded };
}

// Take action creators and pass to this component as props
export default connect(mapStateToProps, actions)(ListItem);