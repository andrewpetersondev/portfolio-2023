import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {About, Contact, Projects , Landing, Error} from './pages/index'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
