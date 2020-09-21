import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguer-bd0ec.firebaseio.com/'
});

export default instance;