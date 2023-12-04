import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import setupLocatorUI from "@locator/runtime";

if (import.meta.env.VITE_NODE_ENV === "DEVELOPMENT") {
  setupLocatorUI();
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
