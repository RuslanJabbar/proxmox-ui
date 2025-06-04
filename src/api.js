import axios from 'axios';
import { apiBase } from './config.js';

const api = axios.create({
  baseURL: apiBase(),
});

export default api;
