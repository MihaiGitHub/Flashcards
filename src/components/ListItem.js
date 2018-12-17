import React, { Component } from 'react';
import { Text } from 'react-native';
// Import connect to call the action creators
import { connect } from 'react-redux';
import { CardSection } from './common';
// Import all available action creators
import * as actions from '../actions'; 

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;

        return (
            <CardSection>
                <Text>{this.props.library.title}</Text>
            </CardSection>
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