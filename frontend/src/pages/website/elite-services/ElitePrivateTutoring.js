
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Form from '../../../components/Form'
import './ElitePrivateTutoring.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Consultation from '../../../components/Consultation'

function ElitePrivateTutoring(){

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
       return ( <>

        <Header lang={'zh'} currPath={location.pathname}/>


        <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
        <div className='elite-content-box'>
            <h1>
                精英私人学术辅导
            </h1>
            <p>
            Straight A Prep 为您学生学术旅程的每一步提供精英私人学术辅导。我们知道每一年的学校课程都会为您的学生带来不同的挑战，因此我们的讲师专注于各个层次的教学，包括小学、中学、高中和大学。我们的团队可以确定缺乏哪些技能，并帮助为未来的课程奠定坚实的基础。
            </p>
           <p><br/></p>
            <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Straight A Prep</strong> 为学生提供所有科目的辅导</h2>
            <img className="left-img-2" src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            <div className='lists'>
            <ul className='subjects'>
                <li>
                文学
                </li>
                <li>
                物理
                </li>
                <li>
                美国历史
                </li>
                <li>
                其他
                </li>
    
                <h3>
                化学
                </h3>
            </ul>
            <ul className='subjects'>
                <li>
                代数
                </li>
                <li>
                生物
                </li>
                <li>
                世界历史
                </li>
                <li>
                微积分
                </li>
            </ul>
        </div>
        <p><br/></p>
            

            <section className='curriculum'>
            <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Straight A Prep</strong> 的其他强化课程</h2>
            <p>
            坦率地说，我们的导师都是资历颇深的优秀师资，有着不凡的追求和才能。如果学生想要探索学校通常不涉及的兴趣领域，我们还提供其它丰富的科目，例如计算机编程（包括数据库创建和网页设计）、欧洲军事史、莎士比亚文学、歌曲创作、科幻小说、环境科学和有机农业、纪录片制作和工程。
            </p>
            </section>
            <p><br/></p>
            <p><br/></p>
            <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Straight A Prep</strong> 我们的优势</h2>
            <section className='advantage'>
            
            <div className='qualities'>
            <ul className='private-tut-hl'>
                    <li>
                        <p>专业知识</p>
                   </li>
                   <li>
                        <p>优质的服务</p>
                   </li>
                </ul>
              
                <div className='center-quality'>
                    <p>教育创新精神</p>
               </div>
            </div>
            </section>
            
        </div>
        <div className="consultation">
                <Consultation lang={'zh'}/>
        </div>
        <Footer />

        </>)

    }

    return(
        <>

        <Header lang={'en'} currPath={location.pathname}/>

        <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
        <div className='elite-content-box'>
            <h1>
                Elite Private Academic Tutoring
            </h1>
            <p>
            Straight A Prep provides elite private academic tutoring for every step of your 
            student’s academic journey. We understand that each year of school can provide 
            different challenges for your student, so our tutors specialize in teaching at all 
            levels of instruction, including elementary school, middle school, high school, and 
            college. Our team can identify which skills are lacking and help build a strong 
            foundation for future courses.
            </p>
            <p><br/></p>
            <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Straight A Prep</strong> Offers a Variety of Subjects</h2>
            <img className="left-img-2" src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
            <div className='lists'>
            <ul className='subjects'>
                <li>
                    Literature
                </li>
                <li>
                    Algebra
                </li>
                <li>
                    Calculus
                </li>
                <li>
                    US History
                </li>
    
                <h3>
                    And More
                </h3>
            </ul>
            <ul className='subjects'>
                <li>
                    Physics
                </li>
                <li>
                    Biology
                </li>
                <li>
                    Chemistry
                </li>
                <li>
                    World History
                </li>
            </ul>
        </div>
        <p><br/></p>
            
            

            <section className='curriculum'>
           
            <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Straight A Prep's</strong> Other Enrichment Curriculum</h2>
            <p>
            Our tutors are, quite frankly, amazing people with fascinating pursuits and talents. 
            If a student wants to explore areas of interest that schools generally do not cover, 
            we also offer enrichment subjects such as computer programming (including database creation
            and web design), European military history, Shakespeare, songwriting, science fiction, 
            environmental science and organic farming, documentary filmmaking, and engineering.
            </p>
            </section>
            <p><br/></p>
            <section className='advantage'>
            <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Our</strong> Advantages</h2>
            <div className='qualities'>
              
                <ul className='private-tut-hl'>
                    <li>
                        <p>PROFESSIONAL KNOWLEDGE</p>
                   </li>
                   <li>
                        <p>QUALITY SERVICE</p>
                   </li>
                </ul>
              
                <div className='center-quality'>
                    <p>SPIRIT OF EDUCATIONAL INNOVATION</p>
               </div>
               
            </div>
            </section>
            
        </div>
        <div className="consultation">
                <Consultation lang={'en'}/>
        </div>
        <Footer />

        </>

    )


}
export default ElitePrivateTutoring