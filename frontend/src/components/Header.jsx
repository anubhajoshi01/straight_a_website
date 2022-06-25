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
                <HeaderMenu title='About' items={[{id: 1, value: 'Our Story'}, {id: 2, value: 'Our Team'}, {id: 3, value: 'Case Studies'}, {id: 4, value: "Testimonials"},
            {id: 5, value: "Partners"}, {id: 6, value: "Pro Bono Services"}]}/>
            </li>
            <li className='litext'>
                <HeaderMenu title='Private Counseling' items={[{id: 1, value: '6-8 Grade Admission'}, {id: 2, value: '8-11 Grade Admission'}, {id: 3, value: 'College Admission'}, {
                    id: 4, value: 'College Transfer'
                }]}/>
            </li>
            <li className='litext'>
                <HeaderMenu title="Elite Services" items={[{id: 1, value:"Elite Test Prep"}, {id: 2, value: 'Elite Private Academic Tutoring'}, {id: 3, value: 'Summer Internship & Study Abroad'},
                {id: 4, value: 'Career Counseling & Placement'}]}></HeaderMenu>
            </li>
            <li className='litext'>
                <HeaderMenu title="Resources" items={[{id: 1, value: "FAQ"}]}/>
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