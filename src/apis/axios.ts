import axios from 'axios';
import { BASE_URL } from '@env';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export default instance;
