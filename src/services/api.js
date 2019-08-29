//import axios from 'axios';

const loginUser = (user) => {
    return fetch('http://localhost:3333/devs', {method:'POST', headers: {"Content-type": "application/json; charset=UTF-8"}, body: JSON.stringify({ username :user }) });

} 

const listUser = (id) => {
    return fetch('http://localhost:3333/devs', {method:'GET', headers: { user : id } });
}
      
// const api = axios.create({ 
//     baseURL: 'http://192.168.137.1:3333'      
// })  
 
export {loginUser, listUser};   