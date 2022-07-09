import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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
    <div>Admin</div>
  )
}

export default Admin