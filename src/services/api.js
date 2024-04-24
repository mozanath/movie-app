import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4bfae734acaba83339860bfa8c523520',
  },
});

export default instance;
