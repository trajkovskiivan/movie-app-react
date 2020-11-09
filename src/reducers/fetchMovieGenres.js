export default (state = null, action) => {
    switch (action.type) {
        case 'FETCH_GENRE':
            return action.payload;
        default:
            return state
    }
}