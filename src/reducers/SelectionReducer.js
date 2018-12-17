export default (state = null, action) => {
    // Will return the actions payload (library id)
    console.log(action);

    switch(action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};