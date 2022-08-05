import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './SummerIntern.css'
import { useEffect } from 'react'
import bannerImg from '../../../res/industry-web.png'

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
        return(
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <div className="summer-intern">
                <div className="si-span-content">
                    <img className="si-left" src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                   
                    <h1>获得你的第一份工作</h1>
                    <p>获得你的第一份工作我们与美国最大的企业合作，专门为国际学生提供美国就业机会</p>
                    
                    <button className='si-start-btn-top'>开始咨询</button>
                    <p><br/></p>
                    
                </div>
                <div className="si-margin">
                    <h2>我们的精英服务</h2>
                    <ul className="summer-intern-ul-hl">
                        <li>
                            <div>
                                <h3>职业指导</h3>
                                <h4>服务:</h4>
                                <p>我们提供来自不同行业经验丰富企业专家的1v1 职业指导服务。</p>
                                <ul className="summer-intern-list-ul">
                                    <li>简历修改</li>
                                    <li>求职信润色</li>
                                    <li>虚拟模拟面试</li>
                                    <li>职业道路发展规划</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>全职工作</h3>
                                <h4>服务:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>10小时职业指导服务（包括简历修改、求职信润色、模拟面试）</li>
                                    <li>职业道路规划</li>
                                    <li>12 个月的全职职位推荐机会</li>
                                    <li>最新行业动态&公司招聘</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-right" src="https://images.unsplash.com/photo-1622554129902-bb01970e2540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-lefttoright-cc">
                        <h5>获得梦想工作 ​走向成功人生 </h5>
                        <h6>Straight A Prep 的全职服务和VIP 全职服务将保证您获得美国大公司的录取</h6>
                    </div>
                    
                </div>
                <div className="si-margin-more">
                    <p><br/></p>
                    <h2>全职服务</h2>
                    <ul className="summer-intern-ul-hl">
                        <li>
                            <div>
                                <h3>全职工作</h3>
                                <h4>服务:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>10小时职业指导服务（包括简历修改、求职信润色、模拟面试）</li>
                                    <li>职业道路规划</li>
                                    <li>12 个月的全职职位推荐机会</li>
                                    <li>最新行业动态&公司招聘</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>VIP全职工作</h3>
                                <h4>服务:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>2个保实习</li>
                                    <li>1个保全职工作</li>
                                    <li>10小时职业指导服务</li>
                                    <li>24 个月的推荐机会</li>
                                    <li>参加企业社交活动</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                        
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-left" src="https://images.unsplash.com/photo-1556978082-fc2023bb5081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-righttoleft">
                        <h5>“感谢Straight A Prep为我申请的工作。我从没想过我能在华尔街一家知名的投资银行工作，做我喜欢做的事。你们的耐心和高效的服务是我有过最好的体验”</h5>
                    </div>
                    
                </div>
                <div className='si-margin'>
                    <h2>所有行业</h2>
                    <img className='banner' src={bannerImg}/>
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
                   
                    <h1>Get Your First Job</h1>
                    <p>We specialize in providing international students with internship opportunities in the United States by partnering with the largest enterprises in the United States.</p>
                    
                    <button className='si-start-btn-top'>Start Now</button>
                    <p><br/></p>
                    
                </div>
                <div className="si-margin">
                    <h2><b>Our</b> Elite Services</h2>
                    <ul className="summer-intern-ul-hl">
                        <li>
                            <div>
                                <h3><b>|Career</b> Coaching</h3>
                                <h4>Services:</h4>
                                <p>We provide 1v1 career coashing service from experienced business experts in different industries.</p>
                                <ul className="summer-intern-list-ul">
                                    <li>Resume revision</li>
                                    <li>Cover letter polish</li>
                                    <li>Virtual mock interview</li>
                                    <li>Career path development</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><b>|Full-time </b>Job</h3>
                                <h4>Services:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>10 hours career coaching services (include resume revision, cover letter polsih, mock interview)</li>
                                    <li>Career path developed</li>
                                    <li>12 months referral opportunities of full time positions</li>
                                    <li>Newest industry update and company recruit</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-right" src="https://images.unsplash.com/photo-1622554129902-bb01970e2540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95bWVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-lefttoright-cc">
                        <h5>The fastest way to your dream job and success </h5>
                        <h6>Straight A Prep's Full Time and VIP Full Time services will guarantee you get the offer from the big companies in the US</h6>
                    </div>
                    
                </div>
                <div className="si-margin-more">
                    <p><br/></p>
                    <h2><b>Our</b> Elite Services</h2>
                    <ul className="summer-intern-ul-hl">
                        <li>
                            <div>
                                <h3><b>|Full Time</b> Job</h3>
                                <h4>Services:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>10 hours career coaching services (include resume revision, cover letter polish, mock interview)</li>
                                    <li>Career Path developed</li>
                                    <li>12 month referral opportunities of full-time positions</li>
                                    <li>Newest industry update & company recruit</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><b>|VIP Full Time</b> Job</h3>
                                <h4>Services:</h4>
                                <ul className="summer-intern-list-ul">
                                    <li>2 Guaranteed internships</li>
                                    <li>1 Guranteed full-time job</li>
                                    <li>10 hours carrer coaching services</li>
                                    <li>24 months referral opportunities</li>
                                    <li>Join networking events</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                        
                </div>
                <p><br/></p>
                <div className="si-span-content">
                    <img className="si-left" src="https://images.unsplash.com/photo-1556978082-fc2023bb5081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="gradient-righttoleft">
                        <h5>"Thanks to Straight A Prep for the job I applied for. I never thought I would be able to work at a great investment bank in Wall Street and do whatI love. Your patience and efficient service is the best experience I ever had."</h5>
                    </div>
                    
                </div>
                <div className='si-margin'>
                    <h2><b>All </b>Industries</h2>
                    <img className='banner' src={bannerImg}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SummerIntern