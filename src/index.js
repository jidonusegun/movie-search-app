import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// https://cttn-centre.herokuapp.com/v1
// NEXT_PUBLIC_API_URL=https://centre-api.contentionary.com/v1
// NEXT_PUBLIC_FILE_MANAGER_MEDIA_URL=https://storage.contentionary.com/media/ 
// NEXT_PUBLIC_FILE_DOWNLOAD_URL=https://storage.contentionary.com/v1/download?fileUrl=
// NEXT_PUBLIC_FILE_MANAGER_URL=https://storage.contentionary.com/v1
// NEXT_PUBLIC_VIMEO_ACCESS_TOKEN=995e68a1afef1fb4a712d39af01922d4
reportWebVitals();
