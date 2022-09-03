import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './ProBono.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function ProBono(){

    const location = useLocation()
  //  console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
   // console.log(`lang ${lang}`)


   // console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    if(lang === 'zh'){
        return (
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <div className='pro-bono-page'>
            <img className='img-span' src='https://www.sjsu.edu/diversity/pics/community-resources/community-banner.jpg'/>
            
            <section>
                <h1>
                公益服务
                </h1>
            </section>
            <div className='square'>
                <div className='wrap-pic'>
                    <img id="pic" src= "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                </div>
                
            <section>
                <p>
                Straight A Prep 的团队在过去的十年里一直在教育的第一线奉献；我们了解信息和资源对学生的成功至关重要。但是，我们也意识到某些家庭和社区并不总是可以获得大学奖学金和经济援助。Straight A Prep旨在帮助贫困家庭和社区的孩子，帮助来自资源不足的学校和家庭中聪明、积极的学生，帮助他们建立信心，申请并进入他们梦想的学校。
                </p>
                <p>
                ​从洛杉矶到纽约，从北京到新加坡，Straight A Prep 为来自贫困背景的学生提供免费的指导、研讨会和论文校对服务。我们的团队根据他们的特定需求为不同种族和背景的家庭提供定制的计划。
                </p>
                <div className='wrap-pic1'>
                    <img id="pic" src='https://www.arborwell.com/wp-content/uploads/2017/10/Los-Angeles-Banner.jpg' alt='la'/>
                </div>
                <p>
                为了营造更健康、公平的教育环境，Straight A Prep 与当地公立学校、社区中心、教堂合作，并实施1+1 方案。对于我们收到的每1 个付费案例，我们将向当地贫困学生提供1 次无偿服务。
                </p>
            </section>
               
                <ul className='ul-container'>
                    <li>
                    短文:为什么你有兴趣与来自Straight A Prep的导师一起配合
                    </li>
                    <li>
                    两封来自老师、高中管理人员或辅导员的推荐信
                    </li>
                    <li>
                    官方成绩单
                    </li>
                    <li>
                    单页的简历
                    </li>
                </ul>
    
                <p>
                为符合申请要求，你必须是目前的高中三年级或四年级学生，并证明和核实经济情况。 由于申请量很大，我们将按照先到先得的原则提供无偿咨询服务。
                </p>
                <p>
                请将所有必要的申请要求发送至 
                </p>
                <p className='purple'>
                info@st​​​​raightaprep.com
                </p>
              
                <h3>
                谢谢，让我们一起帮助学生提升并充分发挥他们的潜力。
                </h3>
    
            
            </div>
            </div>
            <Footer lang={lang}/>
            
            
            
            </>
    
    
        )
    }

    return (
        <>
        <Header lang={'en'} currPath={location.pathname}/>
        <div className='pro-bono-page'>
        <img className='img-span' src='https://www.sjsu.edu/diversity/pics/community-resources/community-banner.jpg'/>
        
        <section>
            <h1>
                Pro Bono Services
            </h1>
        </section>
        <div className='square'>
            <div className='wrap-pic'>
                <img id="pic" src= "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNlcnZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </div>
            
        <section>
            <p>
                The team of Straight A Prep has been working on the front line of education for the past decade; 
                we understand information and resources are crucial to student success. However, we also realize 
                that colleges, scholarships, and financial aid options are not always accessible for certain families
                and communities. Straight A Prep aims to lift up children in the underprivileged family and community, 
                helps bright, motivated students from under-resourced schools and families to find the confidence and 
                tools to apply and get admitted to their dream schools.  
            </p>
            <p>
                From Los Angeles to New York, from Beijing to Singapore, Straight A Prep has provided free mentorship, 
                seminars, and essay review services to students coming from underprivileged backgrounds. Our team offers 
                customized programs for families of different races and backgrounds based on their specific needs.
            </p>
            <div className='wrap-pic1'>
                <img id="pic" src='https://www.arborwell.com/wp-content/uploads/2017/10/Los-Angeles-Banner.jpg' alt='la'/>
            </div>
            <p>
                To promote a healthier and fairer education environment, Straight A Prep partners with local public schools, 
                community centers, churches and implements the 1+1 method. For every 1 paid case we received, we will give 1 
                pro bono service to a local underprivileged student. 
            </p>
        </section>
            <h3>
            If you are interested in pro bono services, please send over:
            </h3>
            <ul className='ul-container'>
                <li>
                    Short Essay: Why are you interested in working together with a mentor from Straight A Prep's 
                </li>
                <li>
                    Two letters of recommendation from a teacher, high school administrator, or counselor
                </li>
                <li>
                    Official transcript
                </li>
                <li>
                    One-page resume
                </li>
            </ul>

            <p>
            For your application to be qualified, you must be a current junior or senior in high school and demonstrate 
            and verify financial needs. Due to high application volume, our pro bono consulting service will be provided 
            on a first-come, first-serve basis.
            </p>
           

            <p>Please email <b>info@straightaprep.com</b> with all of the necessary application requirements</p>
            <p><br/></p>
            <h4><strong>Thank You,</strong> and let us help lift our students and help them reach their full potential</h4>
            <p><br/></p>
        
        </div>
        </div>

        <Footer lang={lang}/>
        
        
        
        </>


    )
}

export default ProBono