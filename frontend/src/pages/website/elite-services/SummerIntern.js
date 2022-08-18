import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './SummerIntern.css'
import { useEffect } from 'react'

function SummerIntern() {

    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
    console.log(`lang ${lang}`)


    console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])
    

    if(lang === 'zh') {
        return (
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <div className="summer-intern">
                <div className="si-span-content">
                    <img className="si-left" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                   
                    <h1>收获你的第一份实习工作</h1>
                    <p>我们与美国最大的企业合作，专门为国际学生提供美国实习机会</p>
                    
                    <button onClick={()=> navigate('/start-now/zh')} className='si-start-btn-top'>开始咨询</button>
                    <p><br/></p>
                    
                </div>
                <div className="si-margin">
                    <h2>我们的精英服务</h2>
                    <ul className="summer-intern-ul-hl">
                        <li>
                            <div>
                                <h3>常规实习服务</h3>
                                <h4>服务:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>参加此项目的候选人可以获得100%的实习机会</li>
                                    <li>模拟面试和简历修改</li>
                                    <li>雇主提供的推荐信和学校学分</li>
                                    <li>积累丰富的工作经验</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>VIP实习服务</h3>
                                <h4>服务:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>参加此项目的候选人可以获得100%的实习机会</li>
                                    <li>5 小时职业指导服务（简历、求职信、模拟面试）</li>
                                    <li>1小时职业规划服务</li>
                                    <li>最新行业及公司资讯</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-right" src="https://images.unsplash.com/photo-1622554129902-bb01970e2540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-lefttoright">
                        <h5>Straight A Prep 的常规实习服务和VIP 实习服务将保证您获得美国大公司的录取</h5>
                    </div>
                    
                </div>
                <div className="si-margin">
                    <p><br/></p>
                    <h2>我们的优势</h2>
                    <h4>与各大企业合作</h4>
                    <p>通过与美国顶尖企业的合作，确保国际学生能够获得顶尖企业的实习机会，帮助学生走上顺畅的职业道路。</p>
                    <h4>一手招聘信息</h4>
                    <p>我们有第一手的企业招聘信息，安排学生第一时间获取。通过为他们安排有针对性的面试，我们可以在各个方面为学生提供帮助。</p>
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-left-2" src="https://images.unsplash.com/photo-1556978082-fc2023bb5081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-righttoleft">
                        <h5>“感谢Straight A Prep为我申请的工作。我从没想过我能在华尔街一家知名的投资银行工作，做我喜欢做的事。你们的耐心和高效的服务是我有过最好的体验”</h5>
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
        </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="summer-intern">
                <div className="si-span-content">
                    <img className="si-left" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                   
                    <h1>Get Your First Internship</h1>
                    <p>We specialize in providing international students with internship opportunities in the United States by partnering with the largest enterprises in the United States.</p>
                    
                    <button onClick={()=> navigate('/start-now')} className='si-start-btn-top'>Start Now</button>
                    <p><br/></p>
                    
                </div>
                <div className="si-margin">
                    <h2><b>Our</b> Elite Services</h2>
                    <ul className="summer-intern-ul-hl">
                        <li>
                            <div>
                            <h3 style={{color:'#5A5A5A'}}><b style={{color:'goldenrod'}}>|</b> <strong style={{color:'#56009A'}}>Basic</strong> Internship</h3>
                                <h4>Services:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>Candidates who enroll in this project can get 100% internship offer</li>
                                    <li>Mock interview and resume revision</li>
                                    <li>Reference letter and school credits offered by employers</li>
                                    <li>Work experience enriched</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                            <h3 style={{color:'#5A5A5A'}}><b style={{color:'goldenrod'}}>|</b> <strong style={{color:'#56009A'}}>VIP</strong> Internship</h3>
                                <h4>Services:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>Candidates who enroll in this project can get 100% internship offer</li>
                                    <li>5 hours career coaching services (resume, cover letter, mock interview)</li>
                                    <li>1-hour career path building service</li>
                                    <li>Newest industry and company information</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-right" src="https://images.unsplash.com/photo-1622554129902-bb01970e2540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-lefttoright">
                        <h5 style={{verticalAlign:'middle'}}>Straight A Prep's Internship and VIP Internship services will guarantee you the offer from big companies in the US</h5>
                    </div>
                    
                </div>
                <div className="si-margin-1">
                    <p><br/></p>
                    <h2><b>Our</b> Advantages</h2>
                    <h4>Partnered with all big enterprises</h4>
                    <p>Through cooperation with the top enterprises in the United States, we can ensure that international students can get internship opportunities in top enterprises and help students to have a smooth career path.</p>
                    <h4>First hand recruitment information</h4>
                    <p>We have first-hand recruitment information of enterprises and arrange students to get it in the first time. By arranging targeted interviews for them, we can assist students on all aspects.</p>
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-left-2" src="https://images.unsplash.com/photo-1556978082-fc2023bb5081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-righttoleft">
                        <h5>"Thanks to Straight A Prep for the job I applied for. I never thought I would be able to work at a great investment bank in Wall Street and do what I love. Your patience and efficient service is the best experience I ever had."</h5>
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default SummerIntern