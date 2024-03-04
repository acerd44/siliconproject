import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/main.min.css'
import Home from './views/Home'
import HeaderSection from './views/sections/HeaderSection'
import FooterSection from './views/sections/FooterSection'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>

  </React.StrictMode>,
)
