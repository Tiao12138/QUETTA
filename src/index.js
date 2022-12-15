import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import './index.css';
import App from './App';
import Page2 from './Page2';
import Page3 from './Page3';
import reportWebVitals from './reportWebVitals';


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Page2' element={<Page2 />} />
      <Route path='/Page3' element={<Page3 />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
