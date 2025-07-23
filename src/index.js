import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css"; 
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';
import { Analytics } from "@vercel/analytics/react";

<Analytics />


ReactGA.initialize('G-HBNMYW0Y67'); // Replace with your actual Google Analytics ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


