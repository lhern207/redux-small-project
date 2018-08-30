import axios from 'axios';
const BACKEND_API = 'http://localhost:3004';

export function artistList(keywords){
    const request = axios.get(`${BACKEND_API}/artists?q=${keywords}&_limit=6`)
                    .then(response => response.data)
                    .catch(e => console.log(e));
    return {
        type: 'GET_ARTISTS',
        payload : request
    }
}

export function artistListAll(){
    const request = axios.get(`${BACKEND_API}/artists?_limit=6`)
                    .then(response => response.data)
                    .catch(e => console.log(e));
    return {
        type: 'GET_ARTISTS_ALL',
        payload : request
    }
}

export function storeSearch(keyword){
    return {
        type: 'STORE_SEARCH',
        payload : [
            keyword
        ]
    }
}

export function artistDetails(id){
    const request = axios.get(`${BACKEND_API}/artists?id=${id}`)
                    .then(response => response.data)
                    .catch(e => console.log(e));
    return {
        type: 'GET_ARTIST_DETAILS',
        payload : request
    }
}

export function clearArtistDetails(){
    return {
        type: 'CLEAR_ARTIST_DETAILS',
        payload : null
    }
}