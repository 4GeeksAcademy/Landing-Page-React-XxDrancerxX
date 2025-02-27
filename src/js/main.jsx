import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import Global Styles
import '../styles/index.css';

// Import Components
import Home from './components/home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
