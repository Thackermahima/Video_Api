import axios from 'axios';
const KEY = 'AIzaSyBdULK82GplDN5hNi7uOy9PLH_y4oRJewc';
export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});