import React from 'react';
import { View, Text } from 'react-native';
// Communication glue between redux and react
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
    return (
        /* Provider tag is communication with React;
        Create store with reducers and pass to Provider tag */
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />
            
                <Text>My App!</Text>
            </View>
        </Provider>
    );
};

export default App;