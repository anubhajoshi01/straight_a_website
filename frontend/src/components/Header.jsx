import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../res/LOGO_edited.jpg'
import './Header.css';

function Header() {
  return (
    <header className='header'>
       
        <ul>
            <li>  
                <img className='logoimg' src={logo}/>   
            </li>
            <li className='litext'>
                About
            </li>
            <li className='litext'>
                Private Counseling
            </li>
            <li className='litext'>
                Elite Services
            </li>
            <li className='litext'>
                Resources 
            </li>
            <li className='litext'>
                Blog 
            </li>
            <li className='litext'>
                Start Now
            </li>
        </ul>
    </header>
  )
}

export default Header