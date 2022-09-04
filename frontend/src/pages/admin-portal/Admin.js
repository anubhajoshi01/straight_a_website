import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AdminHeader from '../../components/AdminHeader'
import { checkLoggedIn } from '../../features/auth/authSlice'

const Admin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector(
        (state) => state.auth
    )

    useEffect(
       
        () => {
           // console.log(checkLoggedIn())
            if(!checkLoggedIn()){
                navigate('/login')
            }

        },
        
    )

  return (
    <div style={{width:'100%'}}>
        <AdminHeader/>
        <Outlet/>
    </div>
  )
}

export default Admin