import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/output.css';
import App from './App.jsx';
import "./assets/index.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
