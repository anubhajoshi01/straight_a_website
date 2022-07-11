import React from 'react'
import logo from '../res/LOGO_edited.jpg'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';

const AdminHeader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(
        (state) => state.auth
    )

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <header style={{top:'2%'}} className='header'>
       
        <ul>
            <li>  
                <img className='logoimg' src={logo}/>   
            </li>
            <li className='litext'>
                <div>Forms</div>
            </li>
            <li className='litext'>
                <div>Blog</div>
            </li>
            <li className='litext' onClick={onLogout}>
                <div>Logout</div>
            </li>
        </ul>
    </header>
  )
}

export default AdminHeader