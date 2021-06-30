import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Naver from './service/naver-axios';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: "https://search-naver-movie.herokuapp.com/https://openapi.naver.com/v1",
  headers: { 'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID, 'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET },
});

const naver = new Naver(httpClient);

// const naver = new Naver(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

ReactDOM.render(
  // <React.StrictMode>
    <App naver={naver}/>,
  // {/* </React.StrictMode>,
  document.getElementById('root')
);

