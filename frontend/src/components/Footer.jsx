import React from 'react'
import qrcodeimg from '../res/qrcode.jpg'
import './Footer.css'
import logo from '../res/LOGO_edited.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='box'>
            <ul className='horizontal' style={{display:'flex', flexDirection:'row'}}>
                <li>
                    <ul className='vertical'>
                        <li className='text-li'>
                        <img className='qrimg' src={qrcodeimg}/>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='vertical-legal' style={{display:'flex', flexDirection:'column'}}>
                        
                        <li className='text-li'>
                        © Copyright 2021
                        </li>
                        <li className='text-li'>
                            Straight A Prep Consulting Inc.
                        </li>
                        <li className='text-li' style={{marginTop:'9%', textDecoration:'underline'}}>
                            All rights reserved
                        </li>
                        <li className='text-li' style={{textDecoration:'underline'}}>
                            Terms of Services
                        </li>
                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'620', fontSize:'125%'}}>
                            Contact
                        </li>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            New York Office
                        </li>
                        <li className='text-li' style={{fontWeight:'200', fontSize:'80%'}}>
                            500 7th Ave, New York, NY 10018
                        </li>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            California Office
                        </li>
                        <li className='text-li' style={{fontWeight:'200', fontSize:'80%'}}>
                            670 Spectrum Center Dr, Irvine, CA 92618
                        </li>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Email
                        </li>
                        <li className='text-li' style={{fontWeight:'200', fontSize:'80%', textDecoration:'underline'}}>
                            info@straightaprep.com
                        </li>

                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Straight A Prep
                        </li>
                        <li className='text-li-link'>
                            About Us
                        </li>
                        <li className='text-li-link'>
                            Our Story
                        </li>
                        <li className='text-li-link'>
                            Testimonials
                        </li>
                        <li className='text-li-link'>
                            Case Studies
                        </li>
                        <li className='text-li-link'>
                            FAQ
                        </li>
                        <li className='text-li-link'>
                            Contact Us
                        </li>
                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Services
                        </li>
                        <li className='text-li-link'>
                            High School Admission
                        </li>
                        <li className='text-li-link'>
                            College Admission
                        </li>
                        <li className='text-li-link'>
                            Private Tutoring
                        </li>
                        <li className='text-li-link'>
                            Career Counseling
                        </li>
                        <li className='text-li-link'>
                            Elite Test Prep
                        </li>
                        <li className='text-li-link'>
                            Summer Internship
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer