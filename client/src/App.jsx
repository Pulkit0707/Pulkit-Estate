import React, { Profiler } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Prrofile from './pages/Prrofile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/listing/:listingId' element={<Listing/>}></Route>
      <Route element={<PrivateRoute/>}>
      <Route path='/profile' element={<Prrofile/>}/>
      <Route path='/create-listing' element={<CreateListing/>}></Route>
      <Route path='/update-listing/:listingId' element={<UpdateListing/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
