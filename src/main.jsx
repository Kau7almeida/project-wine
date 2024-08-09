import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Company from './pages/Company/Company.jsx'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/company" element={<Company />} />
            </Routes>
        </BrowserRouter>
)
