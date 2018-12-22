import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
// Import connect to call the action creators
import { connect } from 'react-redux';
import { CardSection } from './common';
// Import all available action creators
import * as actions from '../actions'; 

class ListItem extends Component {
    // Called whenever the component is about to be rerendered
    componentWillUpdate() {
        // All updates on device will be animated
        LayoutAnimation.spring();
    }

    // Helper method
    renderDescription(){
        const { library, expanded } = this.props;

        // If this library is selected than show description
        if(expanded){
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
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

// Pluck properties from state object and inject into component
// Whenever app state changes mapStateToProps will rerun and pass in new set of props to this component and rerender this component
// Add function to consume piece of app level state; Take selected library id and import it into this component
const mapStateToProps = (state, ownProps) => { // ownProps is exactly equal to this.props inside component
    // expanded = true or false
    const expanded = state.selectedLibraryId === ownProps.library.id;

    // Component can just look at expanded flag to show/hide description
    return { expanded };
}

// Take action creators and pass to this component as props
export default connect(mapStateToProps, actions)(ListItem);