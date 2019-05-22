import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-order-21bd7.firebaseio.com/' 
});

export default instance;