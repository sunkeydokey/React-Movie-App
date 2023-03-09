import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: import.meta.env.VITE_APIKEY,
    language: 'ko-KR',
  },
});

export default instance;
