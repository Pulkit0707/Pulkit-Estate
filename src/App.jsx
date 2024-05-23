import React, { Profiler } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Prrofile from './pages/Prrofile'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Prrofile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
