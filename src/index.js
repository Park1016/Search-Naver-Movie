import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Naver from './service/naver';

const naver = new Naver(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_SECRET);

ReactDOM.render(
  <React.StrictMode>
    <App naver={naver}/>
  </React.StrictMode>,
  document.getElementById('root')
);

