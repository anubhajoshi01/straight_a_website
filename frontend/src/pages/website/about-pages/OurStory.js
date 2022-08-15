import Footer from '../../../components/Footer'
import Form from '../../../components/Form'
import Header from '../../../components/Header'
import './OurStory.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Consultation from '../../../components/Consultation'

function OurStory(){

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

    if(lang === 'zh'){
        return(
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <div className='our-story-container'>
                <section>
                    <h1><b>“新时代”</b>教育的引航者</h1>
                    <p>Straight A Prep是一个全面化、多方位服务的学术咨询公司，总部位于曼哈顿，由宾夕法尼亚大学的企业家和教育工作者创立，我们有着共同的愿景去重新定义当地和全球的K-12、大学咨询和招生的未来。</p>
                </section>
            </div>
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className='our-story-container'>
                <section>
                    <h1>重视<b>“量身打造”</b></h1>
    
                    <p> 我们是一个充满活力的团队，在所有事情上都强调“适合”——并且可以通过发挥您的优势找到适合您的学校或大学，为您提供必要的协助来保证申请学校的优势。</p>
    
                </section>
                <section>
                    <ul className="our-story-hl">
                        <li className='left-side'>
                            <h2>我们的理念</h2>
             
                            <p>Straight A Prep 以学生为导向，我们通过自我发现和表达的过程亲自指导学生，从而帮助他们申请心仪的学校，以及发现学校的快乐和成功之道。我们致力于帮助学生申请独立学校、国际学校、学院和大学。帮助学生选择学术和个人感觉最适合的，并且家庭负担得起的学校。</p>
                            <p><br/></p>
                            <p>我们相信申请过程应该是一次自我发现的旅程，在这个旅程中，学生在规划未来的教育道路时逐渐了解对他们最重要的因素。</p>
                            <p><br/></p>
                            <p>我们将自己视为指导者和导师，帮助学生在整个过程中保持在正确的轨道。我们的目标是最大限度地减少家庭压力，同时最大限度地增加成功机会。</p>
                        </li>
                        <li>
                            <img className='side-img' src="https://images.unsplash.com/photo-1604872428066-4407f25e6d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHN0dWR5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2><b>|Straight A Prep</b>的优势</h2>
                    <p><br/></p>
                    <h3>Straight A Prep 的服务：</h3>
                    <ul className='bullet'>
                        <li><p>尊重、礼貌和关注地对待每一位学生。</p></li>
    
                        <li><p>尊重最高的职业道德标准。</p></li>
    
                        <li><p>使学生及其家人能够在选择和获得最适合他们需求和目标的大学录取方面做出最佳选择。</p></li>
                        <li><p>与每个家庭合作，以帮助他们获得适当的经济援助。</p></li>
                        <li><p>为每个学生提供最高质量的个人咨询和学习材料。</p></li>
                    </ul>
                </section>
                <h2 className='consult'> 开始咨询</h2>
                <Consultation lang={lang}/>
                
                      
            </div>
    
            
            <Footer lang ={lang}/>
            </>
        )
    }


    return(
        <>
        <Header lang={'en'} currPath={location.pathname}/>
        <div className='our-story-container'>
         
            <section>
                <h1 style={{color:'#56009A'}}><b>"New Era"</b> Education Consulting</h1>
                <p style={{textAlign:'center'}}>Straight A Prep is a concierge-style, full-service academic consulting firm based in Manhattan founded by UPenn entrepreneurs and educators with a shared vision to redefine the future of K-12 and College Counseling and Admission locally, and around the globe.</p>
            </section>
        </div>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
        <div className='our-story-container'>
            <section>
                <h1 style={{color:'#56009A'}}>Emphasize the <b>"FIT"</b></h1>

                <p> We are a dynamic team that emphasizes the 'fit' in all things - and can find the right for for your secondary school or college choice by byuldig upon your strengths, giving you the necessary tools to stay ahead of the curve, and manage stress.</p>

            </section>
            <section>
            <h2 className='center-left'><b>|</b> <strong style={{color:'#56009A'}}>Our</strong> Philosophy</h2>
                <ul className="our-story-hl">
                    <li className='left-side'>
                        
         
                        <p>Straight A Prep's philosophy us student-oriented; we are about personally guiding our students through a process of self-discovery and articulation that leads to successful applications, as well as happiness and success in the school itself. We are committed to helping students find and apply to independant schools, international schools, colleges and universities. We choose schools that provide teh best fit academically and personally are affordable for their families</p>
                    
                        <p>We believe that the applicayion process sould be a journey of self-discovery, one in which students grow to understand the factors that matter the most to them as they plan their future educational paths.</p>
                
                        <p>We see our role as guides and mentors, helping students stay on track throughout the process. Our goal is to minimize the stress on families while maximizing opportunities.</p>
                    </li>
                    <li>
                        <img className='side-img' src="https://images.unsplash.com/photo-1604872428066-4407f25e6d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHN0dWR5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    </li>
                </ul>
            </section>
            <section>
            <h2 style={{textAlign:'center'}}><b>|</b> <strong style={{color:'#56009A'}}>Straight A Prep</strong> Advantage</h2>
                <p><br/></p>
                <h3>Straight A Prep affirms that all our services will:</h3>
                <p><br/></p>
                <ul className='bullet'>
                    <li><p>Treat every student with respect, courtesy, and personal attention.</p></li>

                    <li><p>Honor the highest professional ethical standards.</p></li>

                    <li><p>Empower students and their families to make the best choice in selecting and gaining admission to the college that best fits their needs and goals.</p></li>
                    <li><p>Work with every family to secure appropriate financial assistance.</p></li>
                    <li><p>Provide every student with the highest quality individual consulting and learning materials.</p></li>
                </ul>
            </section>
            <p><br/></p>
        </div>
        <div className='consultation'>
         <Consultation lang={lang}/>
         </div>

        
        <Footer lang ={lang}/>
        </>
    )
}

export default OurStory