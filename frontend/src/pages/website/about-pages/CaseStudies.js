import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import jasonImg from '../../../res/case-studies-jason.png'
import lisaImg from '../../../res/case-studies-lisa.png'
import sarahImg from '../../../res/case-studies-sarah.png'
import './CaseStudies.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function CaseStudies(){

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
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                
                <section>
                    <div className="case-studies-container">
                    <h1>成功案例</h1>
                    <p><br/></p>
                        <img className='left' src={jasonImg}/>
                        <div className='case-content'>
                            <h2>申请人背景</h2>
                            <p>学校：国际学校</p>
                            <p>基本成绩：GPA 3.0+/4.0，托福100+</p>
                            <p>专业：工程</p>
                            <p>目标大学：纽约大学</p>
                            <p><br/></p>
                            <h3>Straigh A Prep的帮助</h3>
                            <p>Straight A Prep在了解了Jason的个人资料并规划了他未来的职业规划后，知道他对互联网公司非常感兴趣。于是我们安排Jason Wang准备实习，终于找到了理想的工作。借助Straight A Prep的后台提升项目，Jason系统地学习了机器学习的基本概念和模型，理解了线性模型的求解和优化方法。这次经历让他对机器学习处理数据的科学方法有了完整的概念性理解。在之前实习的基础上，Jason获得了实习机会。Jason独特的背景和申请新专业的经验使他在众多申请者中脱颖而出，他是第一批收到梦想学校录取通知书的人之一</p>
                        </div>
                        <div className='quote'>
                            <h4>"三月份收到NYU的录取通知书后，很高兴Straight A Prep的顾问在申请中帮我的合理规划，这是我学年中最好的咨询服务。" -Jason Wang</h4>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="case-studies-container">
                        <img className='right' src={lisaImg}/>
                        <div className='case-content'>
                            <h2>申请人背景</h2>
                            <p>学校：私立学校</p>
                            <p>基本成绩：托福100+，SAT1460+</p>
                            <p>专业：经济学</p>
                            <p>目标大学：宾夕法尼亚大学</p>
                            <p><br/></p>
                            <h3>Straight A Prep 的帮助</h3>
                            <p>Straight A Prep 帮助丽莎提高了她的整体GPA。在分析了GPA对申请的影响以及与学生的其他经历讨论后，探索实习中的学习机会，展示学习成果，Straight A Prep让学生在申请文件上有很大的差异。在个人陈述写作方面，我们针对不同的项目内容，对学生的个人经历进行一一修改和优化，使之更好地契合项目的培养目标。同时，申请人以适当的方式强调了丽莎的一些个人经历​​。最后，考虑到GPA的不足，我们以补充论文的形式解释GPA，用事实和进步打破GPA对招生官的限制。</p>
                        </div>
                        <div className='quote'>
                            <h4>"老师们不仅在申请上帮助了我，而且在很多方面都帮助了我。老师们通过仔细比较我的学术背景、活动经历、工作经历以及各种优缺点，为我的申请大学指明了方向，鼓励我多思考自己的未来生活。" - Lisa</h4>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="case-studies-container">
                        <img className='left' src={sarahImg}/>
                        <div className='case-content'>
                            <h2>申请人背景</h2>
                            <p>学校：私立学校</p>
                            <p>基本成绩：GPA 3.53/4.0</p>
                            <p>专业：工程</p>
                            <p>目标大学：康奈尔大学</p>
                            <p><br/></p>
                            <h3>Straight A Prep 的帮助</h3>
                            <p> Straight A Prep 帮助了负责在线申请的学生，我们在整个过程中给予了他们很大的支持，尤其是文档的写作部分。学生之所以能拿到这么好的申请成绩，与Straight A Prep的量身定做的essay密切相关。在写作过程中，学生与Straight A Prep保持着密切的沟通。学生写作的总体思路是突出优秀的英语能力和浓厚的科研兴趣。整个申请过程非常顺利。特别是，Straight A Prep 帮助学生选择学校，根据申请要求选择两三所合适的学校，然后根据学生的综合能力、专业排名和位置再选择几所学校。</p>
                        </div>
                        <div className='quote'>
                            <h4>"我要感谢参与我申请的Straight A Prep 的老师们。他们的完美的合作和高效的工作作风帮助我实现了进入美国名校的梦想。" - Sarah</h4>
                        </div>
                    </div>
                </section>
                <Footer lang={lang}/>
            </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            
            <section>
            
                <div className="case-studies-container">
                <h1>Case Studies</h1>
                <p><br/></p>
                    <img className='left' src={jasonImg}/>
                    <div className='case-content'>
                        <p><br/></p>
                       
                        <h2 style={{color:'#554E5A'}}><b>|</b><strong style={{color:'#56009A'}}>Applicant</strong> Background</h2>
                        <p>School: International School</p>
                        <p>Basic scores: GPA 3.0+/4.0, TOEFL 100+</p>
                        <p>Major: Engineering</p>
                        <p>Target University: New York University</p>
                        
                        <h3>Straight A Prep's <b>Support</b></h3>
                        <p>Jason Wang was very interested in internet companies after Straight A Prep studied his profile and talked about his future career plans. So we arranged for Json Wang to prepare for an internship and finally found the ideal jpb. With the help of the background improvement project of Straight A Prep, Jason Wang systematically learned the basic concepts and models of machine learning and understood the solution and optimization methods of a linear model. This experience gave him complete conceptual understanding of the scientific methods of processing data with machine learning. With the foundation of his pervious internship, Jason Wang got the internship opportunity. Jason Wang's unique background and experience in applying for a new major made him stand out from many other applicants, and he was one of the first ones to recieve the offer from his dream school.</p>
                    </div>
                    <div className='quote'>
                        <h4>"After I recieved the acceptanvce letter from NYU in March, I was very pleased at Straight A Prep's conultant's reasonable planning in the application. This is the best consulting service in my school year." -Jason Wang</h4>
                    </div>
                </div>
            </section>
            <section>
                <div className="case-studies-container">
                    <img className='right' src={lisaImg}/>
                    <div className='case-content'>
                        <h2 style={{color:'#554E5A'}}><b>|</b><strong style={{color:'#56009A'}}>Applicant</strong> Background</h2>
                        <p>School: Private School</p>
                        <p>Basic scores: TOEFL 100+, SAT 1460+</p>
                        <p>Major: Economics</p>
                        <p>Target University: University of Pennsylvania</p>
                        <p><br/></p>
                        <h3>Straight A Prep's <b>Support</b></h3>
                        <p>Straight A Prep jelps students to improve their overall GPA. After analyzing the inlfuence of GPA on the application as well as discussing with the student's other experiences, we explore the learning opportunities in the internship and display the learning results so that the student has great dofferences in application documents. In terms of personal statement writing, we modify and optimize student's personal experiences one by one for different project contents in order for tgem to be a better match for the project's training objective. At the same time, the applicant highlights some of Lisa's personal experiences in a way that is apporpriate. Finally, considering the deficiencies of GPA, we explain GPA in the form of supplementary essays, breaking the restrictions imposed on admissions officers by GPA with facts and progress.</p>
                    </div>
                    <div className='quote'>
                        <h4>"The teachers have helped me not only in application, but also in many ways. Through a careful comparison of my academic background, activity experiences, work experience and various advantages and disadvantages, the teachers pointed out the way for me to apply for university, and encouraged me to think more about my future life." - Lisa</h4>
                    </div>
                </div>
            </section>
            <section>
                <div className="case-studies-container">
                    <img className='left' src={sarahImg}/>
                    <div className='case-content'>
                        <h2 style={{color:'#554E5A'}}><b>|</b><strong style={{color:'#56009A'}}>Applicant</strong> Background</h2>
                        <p>School: Private School</p>
                        <p>Basic scores: GPA 3.53/4.0</p>
                        <p>Major: Engineering</p>
                        <p>Target University: Cornell University</p>
                        <p><br/></p>
                        <h3>Straight A Prep's <b>Support</b></h3>
                        <p>Straight A Prep helped the student who was in charge of the online application, we gave them great support throughout the process, especially the writing section of the document. The reason why the student got such a good application result was closely related to Straight A Prep’s tailored essay. During the writing process, the student kept in close communication with Straight A Prep. The overall idea of student’s writing was to highlight excellent English ability and strong interest in scientific research. The whole application process was very smooth. In particular, Straight A Prep helped the student with school selection, choosing two or three appropriate schools based on application requirements, and then choosing several more schools based on their overall ability, major rankings, and location.</p>
                    </div>
                    <div className='quote'>
                        <h4>"I would like to thank the counselors of Straight A Prep who participated in my application. Their perfect cooperation and efficient working style helped me realize my dream of getting into an elite school in United States." - Sarah</h4>
                    </div>
                </div>
            </section>
            <Footer lang={lang}/>
        </>
    )
}

export default CaseStudies