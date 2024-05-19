import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/main.min.css'
import Home from './views/Home'
import HeaderSection from './views/sections/HeaderSection'
import Contact from './views/Contact'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <HeaderSection />
      <Routes>
        <Route path="/siliconproject" element={<Home />} />
        <Route path="/siliconproject/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
