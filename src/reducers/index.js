import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    // libraries reducer always returns an array; 
    // whenever this reducer runs it will return a list of libraries to the user
    // LibraryReducer assigned to the key libraries in state
    // When console.log(store.getState()) = { libraries: [] }
    libraries: LibraryReducer
});