import axios from 'axios';
const apiBaseURL = '/api';

export const GET = url => {
    return axios.get(`${apiBaseURL}/${url}`);
}


// export function loadPlayers(apiEndPoint) = async () => {
//         const response = await fetch(`/api/${apiEndPoint}`);
//         const data = await response.json();
//         return data;
//      }