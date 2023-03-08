import React from 'react'
import Login from '../Components/Login'
import {Routes,Route} from "react-router-dom"
import Register from '../Components/Register'
import Navbar from '../Components/Navbr'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    
<Route path="/" element={<Navbar />} />
<Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
</Routes>

    </div>
  )
}

export default AllRoutes