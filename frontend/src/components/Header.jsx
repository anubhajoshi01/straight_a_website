import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../res/LOGO_edited.jpg'
import './Header.css';
import Box from '@mui/material/Box'
import HeaderMenu from './HeaderMenu';
import LangSwitch from './LangSwitch';

const Header = ({lang, currPath}) => {

    const navigate = useNavigate()
    console.log(`header ${lang}`)


    if (lang==="zh"){
        return(
            <>
            <header className='header'>
       <ul>
           <li>  
               <img className='logoimg' src={logo}/>   
           </li>
           <li className='litext'>
               <HeaderMenu title='关于我们' nav='/zh' items={[{id: 1, value: '我们的故事', nav:'/our-story/zh'}, {id: 2, value: '我们的团队', nav:'/our-team/zh'}, {id: 3, value: '成功案例', nav:'/case-studies/zh'}, {id: 4, value: "学生感言", nav:'/testimonials/zh'},
           {id: 5, value: "合作伙伴", nav:'/our-partners/zh'}, {id: 6, value: "公益服务", nav:'/pro-bono/zh'}]}/>
           </li>
           <li className='litext'>
               <HeaderMenu title='留学咨询' nav={'/private-counseling/zh'} items={[{id: 1, value: '6-8 年级申请', nav:'/6-8-grade-admission/zh'}, {id: 2, value: '8-11 年级申请', nav:'/8-11-grade-admission/zh'}, {id: 3, value: '大学申请', nav:'/college-admission/zh'}, {
                   id: 4, value: '大学转学', nav:'/college-transfer/zh'
               }]}/>
           </li>
           <li className='litext'>
               <HeaderMenu title="精英服务" nav={'/elite-services/zh'} items={[{id: 1, value:"精英考试辅导", nav:'/elite-test-prep/zh'}, {id: 2, value: '精英学术辅导',nav:'/elite-private-tutoring/zh'}, {id: 3, value: '暑假实习&海外学习', nav:'/summer-intern/zh'},
               {id: 4, value: '职业规划和就业'}]}></HeaderMenu>
           </li>
           <li className='litext'>
               <HeaderMenu title="资源" nav={'/resources/zh'} items={[{id: 1, value: "常见问题",nav:'/FAQ/zh'}]}/>
           </li>
           <li className='litext' onClick={() => navigate('/blog/zh')}>
               <div>博客</div>
           </li>
           <li className='startnow'>
               <div className='rectangle' onClick={() => navigate('/start-now/zh')}>
               开始咨询
               </div>
           </li>
           <li className='lang-switcher'>
               <LangSwitch lang={lang} currPath={currPath}/>
           </li>
       </ul>
   </header>
            </>

        )
    }

  return (
    <header className='header'>
       
        <ul className='header-ul'>
            <li>  
                <img className='logoimg' src={logo}/>   
            </li>
            <li className='litext'>
                <HeaderMenu title='About' nav='/' margin='50%' items={[{id: 1, value: 'Our Story', nav:'/our-story'}, {id: 2, value: 'Our Team', nav:'/our-team'}, {id: 3, value: 'Case Studies', nav:'/case-studies'}, {id: 4, value: "Testimonials", nav:'/testimonials'},
            {id: 5, value: "Partners", nav:'/our-partners'}, {id: 6, value: "Pro Bono Services", nav:'/pro-bono'}, {id:7, value:'Career At SAP', nav:'/career-sap'}]}/>
            </li>
        
            <li className='litext'>
                <div style={{marginLeft:'1%' , marginRight:'10%', transform: 'translateY(-6px)'}}>
                <HeaderMenu title='Private Counseling'  nav={'/private-counseling'} items={[{id: 1, value: '6-8 Grade Admission', nav:'/6-8-grade-admission'}, {id: 2, value: '8-11 Grade Admission', nav:'/8-11-grade-admission'}, {id: 3, value: 'College Admission', nav:'/college-admission'}, {
                    id: 4, value: 'College Transfer', nav:'/college-transfer'
                }]}/>
                </div>
            </li>
            <li className='litext'>
              <div style={{marginLeft:'22.225%'}}>
                <HeaderMenu title="Elite Services" nav={'/elite-services'} items={[{id: 1, value:"Elite Test Prep", nav:'/elite-test-prep'}, {id: 2, value: 'Elite Private Academic Tutoring',nav:'/elite-private-tutoring'}, {id: 3, value: 'Summer Internship & Study Abroad', nav:'/summer-intern'},
                {id: 4, value: 'Career Counseling & Placement', nav:'/career-counseling'}]}></HeaderMenu>
                </div>
            </li>
            <li className='litext'>
                <div style={{marginLeft:'35%'}}>
                <HeaderMenu title="Resources" nav={'/resources'} items={[{id: 1, value: "FAQ", nav:'/FAQ'}]}/>
                </div>
            </li>
            <li className='litext' onClick={() => navigate('/blog')}>
                <div style={{fontSize:'16px'}}>Blog</div>
            </li>
            <li className='startnow'>
                <div className='rectangle' onClick={() => navigate('/start-now')}>
                    Start Now
                </div>
            </li>
            <li className='lang-switcher'>
                <LangSwitch lang={lang} currPath={currPath}/>
            </li>
        </ul>
    </header>
  )
}

export default Header