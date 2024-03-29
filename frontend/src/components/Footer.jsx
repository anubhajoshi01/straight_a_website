import React from 'react'
import qrcodeimg from '../res/qrcode.jpg'
import './Footer.css'
import logo from '../res/LOGO_edited.jpg'
import { useNavigate } from 'react-router-dom'

const Footer = ({lang}) => {

    //console.log(`footer ${lang}`)

    const navigate = useNavigate()


    if(lang==='zh'){
        return(
            <>
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
                        <li className='text-li' style={{marginTop:'9%'}}>
                            版权所有
                        </li>
                        <li onClick={() => navigate('/terms-and-conditions/zh')} className='text-li' style={{textDecoration:'underline'}}>
                            服务条款
                        </li>
                        <li onClick={() => navigate('/privacy-policy/zh')} className='text-li' style={{textDecoration:'underline'}}>
                            隐私政策
                        </li>
                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'620', fontSize:'125%'}}>
                            联系方式
                        </li>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            纽约办公室
                        </li>
                        <li className='text-li' style={{fontWeight:'200', fontSize:'80%'}}>
                            500 7th Ave, New York, NY 10018
                        </li>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            加州办公室
                        </li>
                        <li className='text-li' style={{fontWeight:'200', fontSize:'80%'}}>
                            670 Spectrum Center Dr, Irvine, CA 92618
                        </li>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Email
                        </li>
                        <li className='text-li' >
                            <a href='mailto:info@straightaprep.com' >info@straightaprep.com </a>
                        </li>

                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column', padding: '0% 10%'}}>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Straight A Prep
                        </li>
                        <li onClick={() => navigate('/zh')} className='text-li-link'>
                            关于我们
                        </li>
                        <li onClick={() => navigate('/our-story/zh')} className='text-li-link'>
                            我们的故事
                        </li>
                        <li onClick={() => navigate('/testimonials/zh')} className='text-li-link'>
                            学生感言
                        </li>
                        <li onClick={() => navigate('/case-studies/zh')} className='text-li-link'>
                            成功案例
                        </li>
                        <li onClick={() => navigate('/faq/zh')} className='text-li-link'>
                            常见问题
                        </li>
                        <li onClick={() => navigate('/start-now/zh')} className='text-li-link'>
                            联系我们
                        </li>
                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            服务范围
                        </li>
                        <li onClick={() => navigate('/8-11-grade-admission/zh')} className='text-li-link'>
                            高中申请
                        </li>
                        <li onClick={() => navigate('/college-admission/zh')} className='text-li-link'>
                            大学申请
                        </li>
                        <li onClick={() => navigate('/elite-private-tutoring/zh')} className='text-li-link'>
                            私人辅导
                        </li>
                        <li onClick={() => navigate('/career-counseling/zh')} className='text-li-link'>
                            职业规划
                        </li>
                        <li onClick={() => navigate('/elite-test-prep/zh')} className='text-li-link'>
                            精英备考
                        </li>
                        <li onClick={() => navigate('/summer-intern/zh')} className='text-li-link'>
                            暑假实习
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
            </>
        )
    }

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
                        <li className='text-li' style={{marginTop:'9%'}}>
                            All rights reserved
                        </li>
                        <li onClick={() => navigate('/terms-and-conditions')} className='text-li' style={{textDecoration:'underline'}}>
                            Terms of Services
                        </li>
                        <li onClick={() => navigate('/privacy-policy')} className='text-li' style={{textDecoration:'underline'}}>
                            Privacy Policy
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
                        <li className='text-li' >
                            <a href='mailto:info@straightaprep.com' >info@straightaprep.com </a>
                        </li>

                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Straight A Prep
                        </li>
                        <li onClick={() => navigate('/')} className='text-li-link'>
                            About Us
                        </li>
                        <li onClick={() => navigate('/our-story')} className='text-li-link'>
                            Our Story
                        </li>
                        <li onClick={() => navigate('/testimonials')} className='text-li-link'>
                            Testimonials
                        </li>
                        <li onClick={() => navigate('/case-studies')} className='text-li-link'>
                            Case Studies
                        </li>
                        <li onClick={() => navigate('/faq')} className='text-li-link'>
                            FAQ
                        </li>
                        <li onClick={() => navigate('/start-now')} className='text-li-link'>
                            Contact Us
                        </li>
                    </ul>
                </li>
                <li>
                    <ul style={{display:'flex', flexDirection:'column'}}>
                        <li className='text-li' style={{fontWeight:'500', fontSize:'100%'}}>
                            Services
                        </li>
                        <li onClick={() => navigate('/8-11-grade-admission')} className='text-li-link'>
                            High School Admission
                        </li>
                        <li onClick={() => navigate('/college-admission')} className='text-li-link'>
                            College Admission
                        </li>
                        <li onClick={() => navigate('/elite-private-tutoring')} className='text-li-link'>
                            Private Tutoring
                        </li>
                        <li onClick={() => navigate('/career-counseling')} className='text-li-link'>
                            Career Counseling
                        </li>
                        <li onClick={() => navigate('/elite-test-prep')} className='text-li-link'>
                            Elite Test Prep
                        </li>
                        <li onClick={() => navigate('/summer-intern')} className='text-li-link'>
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