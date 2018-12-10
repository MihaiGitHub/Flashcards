import React from 'react';
import { View, Text } from 'react-native';
// Communication glue between redux and react
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const App = () => {
    return (
        /* Provider tag is communication with React */
        <Provider store={createStore}>
            <View>
                <Text>My App!</Text>
            </View>
        </Provider>
    );
};

export default App;