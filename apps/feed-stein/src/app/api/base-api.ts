import axios from 'axios';

import { API_URL } from '../config';

const baseAPI = axios.create({
  baseURL: API_URL,
});

export default baseAPI;
