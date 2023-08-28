import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Jest from './Jest';
import Blog from './components/Blog.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blog/>
    {/* <App /> */}
    {/* <Jest/> */}
  </React.StrictMode>
);


