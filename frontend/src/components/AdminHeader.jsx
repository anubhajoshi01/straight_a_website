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

    const navToBlog = () => {
        navigate('/blog')
    }

    const navToForms = () => {
        navigate('view-forms')
    }
 
  return (
    <header style={{top:'0px', paddingBottom:'5px'}} className='header'>
       
        <ul>
            <li>  
                <img className='logoimg' style={{height:'100px', width:'auto'}} src={logo}/>   
            </li>
            <li className='litext' onClick={navToForms}>
                <div>Forms</div>
            </li>
            <li className='litext' onClick={navToBlog}>
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