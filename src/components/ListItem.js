import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// Import connect to call the action creators
import { connect } from 'react-redux';
import { CardSection } from './common';
// Import all available action creators
import * as actions from '../actions'; 

class ListItem extends Component {
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

// Take action creators and pass to this component as props
export default connect(null, actions)(ListItem);