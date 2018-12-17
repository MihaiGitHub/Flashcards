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
        const { library, selectedLibraryId } = this.props;

        if(library.id === selectedLibraryId){
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
const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
}

// Take action creators and pass to this component as props
export default connect(mapStateToProps, actions)(ListItem);