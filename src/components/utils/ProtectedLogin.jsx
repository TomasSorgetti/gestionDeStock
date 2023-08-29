import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

 const ProtectedLogin = () => {

    const token = localStorage.getItem("token")
  
    if(token){
        return <Navigate to="/home" replace/>
    }

  return <Outlet />
}

export default ProtectedLogin



