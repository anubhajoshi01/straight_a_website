import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AdminHeader from '../../components/AdminHeader'

const Admin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector(
        (state) => state.auth
    )

    useEffect(
        () => {
            if(!user){
                navigate('/login')
            }

        },
        [user, navigate, dispatch]
    )

  return (
    <div style={{width:'100%'}}>
        <AdminHeader/>
        <Outlet/>
    </div>
  )
}

export default Admin