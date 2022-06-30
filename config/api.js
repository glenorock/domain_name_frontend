import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default request;
