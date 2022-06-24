import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../res/LOGO_edited.jpg'
import './Header.css';
import Box from '@mui/material/Box'
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <header className='header'>
       
        <ul>
            <li>  
                <img className='logoimg' src={logo}/>   
            </li>
            <li className='litext'>
                <HeaderMenu title='About' items={[{id: 1, value: 'Our Story'}, {id: 2, value: 'Our Team'}]}/>
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
            <li className='startnow'>
                <div className='rectangle'>
                    Start Now
                </div>
            </li>
        </ul>
    </header>
  )
}

export default Header