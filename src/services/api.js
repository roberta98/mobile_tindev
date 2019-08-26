import axios from 'axios';

const api = id =>  fetch('http://192.168.137.1:3333/devs', {method:'POST', body: JSON.stringify(id) });

// const api = axios.create({
//     baseURL: 'http://192.168.137.1:3333'
// })

export default api;