import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nimbus-back-end.herokuapp.com',
});

export default api;
