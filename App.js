import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Awards from './pages/Awards'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Interest from './pages/Interest'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/interest' element={<Interest />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App