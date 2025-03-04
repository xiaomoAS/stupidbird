/*
 * @Autor: jiangzupei
 * @Description: 
 * @Date: 2025-02-14 10:55:48
 * @LastEditors: jiangzupei1 jiangzupei1@jd.com
 * @LastEditTime: 2025-03-04 15:14:50
 * @FilePath: /stupidbird/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import microApp from '@micro-zoe/micro-app'
// import reportWebVitals from './reportWebVitals';

microApp.start()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
