import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/success" element={<ProtectedRoute element={<Success/>}/>}/>
    <Route path="/*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
}

export default App
