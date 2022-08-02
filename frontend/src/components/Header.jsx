import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../res/LOGO_edited.jpg'
import './Header.css';
import Box from '@mui/material/Box'
import HeaderMenu from './HeaderMenu';
import LangSwitch from './LangSwitch';

const Header = ({lang}) => {

    const navigate = useNavigate()
    console.log(`header ${lang}`)

  return (
    <header className='header'>
       
        <ul>
            <li>  
                <img className='logoimg' src={logo}/>   
            </li>
            <li className='litext'>
                <HeaderMenu title='About' nav='/' items={[{id: 1, value: 'Our Story', nav:'/our-story'}, {id: 2, value: 'Our Team', nav:'/our-team'}, {id: 3, value: 'Case Studies', nav:'/case-studies'}, {id: 4, value: "Testimonials", nav:'/testimonials'},
            {id: 5, value: "Partners", nav:'/our-partners'}, {id: 6, value: "Pro Bono Services", nav:'/pro-bono'}]}/>
            </li>
            <li className='litext'>
                <HeaderMenu title='Private Counseling' nav={'/private-counseling'} items={[{id: 1, value: '6-8 Grade Admission', nav:'/6-8-grade-admission'}, {id: 2, value: '8-11 Grade Admission', nav:'/8-11-grade-admission'}, {id: 3, value: 'College Admission', nav:'/college-admission'}, {
                    id: 4, value: 'College Transfer', nav:'/college-transfer'
                }]}/>
            </li>
            <li className='litext'>
                <HeaderMenu title="Elite Services" nav={'/elite-services'} items={[{id: 1, value:"Elite Test Prep", nav:'/elite-test-prep'}, {id: 2, value: 'Elite Private Academic Tutoring',nav:'/elite-private-tutoring'}, {id: 3, value: 'Summer Internship & Study Abroad'},
                {id: 4, value: 'Career Counseling & Placement'}]}></HeaderMenu>
            </li>
            <li className='litext'>
                <HeaderMenu title="Resources" nav={'/resources'} items={[{id: 1, value: "FAQ"}]}/>
            </li>
            <li className='litext' onClick={() => navigate('/blog')}>
                <div>Blog</div>
            </li>
            <li className='startnow'>
                <div className='rectangle'>
                    Start Now
                </div>
            </li>
            <li>
                <LangSwitch lang={lang}/>
            </li>
        </ul>
    </header>
  )
}

export default Header