// src/services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '37f87a1e238c8105688af70fc09f8cc1',
  },
});

export default instance;
