export default function(state={}, action){
    switch(action.type){
        case 'GET_ARTISTS_ALL':
            return {...state, artistList: action.payload}
        case 'GET_ARTISTS':
            return {...state, artistList: action.payload}
        case 'STORE_SEARCH':
            return {...state, searchField: action.payload}
        case 'GET_ARTIST_DETAILS':
            return {...state, artistDetails: action.payload}
        case 'CLEAR_ARTIST_DETAILS':
            return {...state, artistDetails: action.payload}
        default:
            return state;
    }
}