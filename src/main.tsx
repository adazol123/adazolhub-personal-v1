import { AnimatePresence } from 'framer-motion'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  <React.StrictMode>
    <AnimatePresence mode='wait' >

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
)
