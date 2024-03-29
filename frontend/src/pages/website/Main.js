import './Main.css'

import img1 from '../../res/main-img1.jpeg'
import img2 from '../../res/main-img2.jpeg'
import img3 from '../../res/main-img3.jpeg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageSlider from '../../components/ImageSlider'
import ImgSlider from '../../components/ImgSlider'
import Form from '../../components/Form'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'


function Main(){

    const {lang} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(lang == null) {
          navigate('en')
        }
      }, [])

   // console.log(`lang is ${lang}`)

    const slides = [
        {title:"Private Counseling: Realize your dream, create your future", img:"https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpYnJhcnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", navLink:'/private-counseling'},
        {title: "Elite Services: Test Prep, Tutoring, Career Counseling", img:"https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", navLink:'/elite-services'},
        {title:'College Transfer Program: Transfer Application Services', img:"https://images.unsplash.com/photo-1558168674-2505c71112eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxjb2xsZWdlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60", navLink:'/college-transfer'}
    ]

    const slides_zh = [
        {title:"私教辅导：实现你梦想，创造你未来", img:"https://images.unsplash.com/photo-1549383028-df014fa3a325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxpYnJhcnl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", navLink:'/private-counseling/zh'},
        {title: "精英服务: 考试辅导, 私教辅导, 职业规划", img:"https://images.unsplash.com/photo-1599689868384-59cb2b01bb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", navLink:'/elite-services/zh'},
        {title:'大学转学服务: 常青藤名校转学', img:"https://images.unsplash.com/photo-1558168674-2505c71112eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxjb2xsZWdlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60", navLink:'/college-transfer/zh'}
    ]
    

    const slides2 = [
        {title:"Why do you need Straight A Prep?",content:"Straight A Prep is a concierge-style, full-service academic consulting firm founded by" , navLink:'/view-blog/6302da978f07ddb81dca59bc/en',img:"https://images.unsplash.com/photo-1581832097732-8565eff3d361?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg5fHxjb2xsZWdlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
        {title:"How to choose the right college?",content:"First, we will break down different types of universities",navLink:'/view-blog/6302da2c8f07ddb81dca59b6/en' ,img:"https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"},
        {title:"Full score Common App essay writing tips",content:"Are college applications really difficult?", navLink:'/view-blog/6302d73bbcecafa9605cbfac/en', img:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
    ]
    const slides2_zh = [
        {title:"为什么 Straight A Prep 能帮到你?", content: "经验丰富的留学顾问，最一流贴心的服务质量", navLink:'/view-blog/6302da978f07ddb81dca59bc/zh' ,img:"https://images.unsplash.com/photo-1581832097732-8565eff3d361?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg5fHxjb2xsZWdlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"},
        {title:"如何选择合适的大学", content: "首先，我们将分解不同类型的大学",navLink:'/view-blog/6302da2c8f07ddb81dca59b6/zh' ,img:"https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZGVudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"},
        {title:"新加坡陪同簽證的優勢", content: "目前很多國家不支持隨行學生在本國學習",navLink:'/view-blog/6302d73bbcecafa9605cbfac/zh'  ,img:"https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
    ]

    if(lang === 'zh') {
        return (
           <>
             <Header lang={'zh'} currPath={location.pathname}/>
            <ImageSlider slides={slides_zh}/>
            <div className='main-container'>
                <section>
                    <h1>我们的服务</h1>
                    <p><br/></p>
                    <p><br/></p>
                    <p>Straight A Prep 为学生提供辅导、指引、行政支持和洞察力，使他们在申请梦想中的学院或大学时更具有竞争优势。</p>
                </section>
                <section>
                    <ul className="main-ul-hl">
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/8-11-grade-admission/zh')}>
                                <img src="https://images.unsplash.com/photo-1604882737278-6aeefeb2c827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWwlMjBzdHVkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot">高中申请</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/college-admission/zh')}>
                                <img src="https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHZlcnRpY2FsJTIwc3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot">大学申请</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/elite-private-tutoring/zh')}>
                                <img src="https://images.unsplash.com/photo-1476459216969-94c7100f88a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHZlcnRpY2FsJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot">​私人辅导</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/career-counseling/zh')}>
                                <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWwlMjBjYXJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot">职业咨询/就业</div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>高中申请</h3>
                    <p className='p2'>我们的高中入学申请包括学生和家长论文协助、活动规划指导、帮助学生获得最好的推荐信、面试准备、学校访问指导、SAT备考、如何利用社交媒体为您带来优势以及申请指导，还包括对运动员和艺术专业学生的指导。</p>
                    <p><br/></p>
                    <h3>大学申请</h3>
                    <p className='p2'>我们的大学入学申请为学生提供详细、专业的见解，并指导他们在申请过程中展示最能反映其优势的个人知识。通过围绕个人档案建立、定制时间表和专业短文的展示，学生成为更具吸引力的申请人和更自信的个人。</p>
                    <p><br/></p>
                    <h3>​私人辅导</h3>
                    <p className='p2'>我们的私人辅导为您学生学术旅程的每一步提供有针对性的辅导。我们知道每一年的学校都会为您的学生带来不同的挑战，因此我们的导师专注于各个层次的教学，包括小学、中学、高中和大学。我们的团队可以确定学生缺乏哪些技能，并帮助他们为未来的课程奠定坚实的基础。</p>
                    <p><br/></p>
                    <h3>职业咨询/就业</h3>
                    <p className='p2'>我们的职业咨询/就业专门为留学生提供美国实习和就业机会，与美国最大的企业合作，让就业之路不再是留学生的绊脚石。通过与美国顶尖企业的合作，确保留学生能够在顶尖企业获得实习和就业机会，帮助学生走上顺畅的美国职业道路。</p>
                    <p><br/></p>
                </section>
                <section>
                    <ul className="main-ul-hl-2">
                        <li>
                            <div className="main-img-container-2">
                                <img className='img1' src="https://cdn.pixabay.com/photo/2015/01/22/23/59/purple-608575_1280.jpg"/>
                                <div className="top-left">
                                    <b>Jason H.</b>
                                    <p>宾夕法尼亚大学</p>
                                    <p>2024届</p>
                                </div>
                                <div className="center">
                                    <p className='p3'>
                                        "这是一次非常私人的经历，Straight A Prep鼓励我追求自己的目标学校。如果你想知道这个过程到底有多有效，我想说的是，我完成的比我预想的要多，进入了一些我原本无法进入的学校。"
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container-2">
                                <img className='img2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILszxiJ4kFWBW9PU_x6ohcPlUjPnpaWmPRw&usqp=CAU"/>
                                <div className="top-left">
                                    <b>Kali K.</b>
                                    <p>伯克利大学</p>
                                    <p>2023届</p>
                                </div>
                                <div className="center">
                                    <p className='p3'>
                                        "关于如何申请私立学校，我有一个很模糊的想法。我的想法到处都是，我很难把我的经历变成一个关于我自己的有力的故事。Straight A Prep的升学顾问们非常有帮助，我可以很容易地安排与他们的电话会议来集思广益，并在他们的帮助下申请上心仪大学。"
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container-2">
                                <img className='img3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwi5tJn4pr90rgfhD7Z9Xobv6yGB3XY1HKw&usqp=CAU"/>
                                <div className="top-left">
                                    <b>Greg Q.</b>
                                    <p>耶鲁大学</p>
                                    <p>2023届</p>
                                </div>
                                <div className="center">
                                    <p className='p3'>
                                        "我在标准化考试中很挣扎，我总是表现不佳，对自己的能力没有多大信心。Straight A Prep帮助我制定了一个具体的学习计划，并跟踪我的每一个进步，帮助我实现了我的名校梦想。"
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <h1>博文</h1>
                    <ImgSlider slides={slides2_zh}/>
                    <div className='form-container'>
                    <div className='seperate-container'>
                        <div className='purple-background'>
                            <h1>
                                Hello, 欢迎
                            </h1>
                            <h3>
                                STRAIGHT A PREP
                            </h3>
                            <p>
                                Straight A Prep 为学生提供辅导、指引、行政支持和洞察力，使他们在申请梦想中的学院或大学时更具有竞争优势。
                            </p>
                            <p>
                                我们理解并准备伸出援助之手！
                            </p>
                            <p>
                            让我们的资深顾问为您进行全面评估，带领您走上充分发挥学业潜力、课外活动潜力以及更多个人成长成就的道路。
                            </p>
                        </div>
                        <div className='white-background'>
                           
                            <div className='form'>
                            <Form lang={'zh'}/>
                            </div>
                        </div>

                    </div>
                    </div>
                </section>
            </div>
            <Footer lang={lang}/>
        </>
        )
    }

    return (
        
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <ImageSlider slides={slides}/>
            <div className='main-container'>
                <section>
                    <h1 style={{color:'#554E5A'}}><b>|</b><strong style={{color:'#56009A'}}>OUR</strong> SERVICES</h1>
                    <p><br/></p>
                    <p><br/></p>
                    <p className='p-italic'>Straight A Prep provides students with counseling, guidance, mentoring, administrative support, and institutional insights to give them a competitive edge when applying to the college or university of their dreams.</p>
                </section>
                <section>
                    <ul className="main-ul-hl">
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/8-11-grade-admission')}>
                                <img src="https://images.unsplash.com/photo-1604882737278-6aeefeb2c827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWwlMjBzdHVkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>HIGH SCHOOL</b> ADMISSION</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/college-admission')}>
                                <img src="https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHZlcnRpY2FsJTIwc3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>COLLEGE</b> ADMISSION</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/elite-private-tutoring')}>
                                <img src="https://images.unsplash.com/photo-1476459216969-94c7100f88a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHZlcnRpY2FsJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>PRIVATE</b> TUTORING</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container" onClick={() => navigate('/career-counseling')}>
                                <img src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWwlMjBjYXJlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>CAREER COUNSELING</b> PLACEMENT</div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>High School Admission</h3>
                    <p className='p2'>Our High School Admission includes assistance with both student and parent essays, activity sheet completion guidance, help to secure the best letters of recommendation, interview preparation, school visitation guidance, SAT preparation, how to use social media to your advantage, and application completion guidance. Assistance for athletes and artists is also included as appropriate.</p>
                    <p><br/></p>
                    <h3>College Admission</h3>
                    <p className='p2'>Our College Admission Package provides students with detailed, expert insight and guide them to develop the personal knowledge needed to complete applications that best reflect their strengths. With extensive counseling around developing a personal prodile, customized timelines, and effective essays, students become more compelling applicants and more confident individuals.</p>
                    <p><br/></p>
                    <h3>Private Tutoring</h3>
                    <p className='p2'>Our Private Tutoring provides targeted tutoring for every step of your student’s academic journey. We understand that each year of school can provide different challenges for your student, so our tutors specialize in teaching at all levels of instruction, including elementary school, middle school, high school, and college. Our team can identify which skills are lacking and help build a strong foundation for future courses.</p>
                    <p><br/></p>
                    <h3>Career Counseling</h3>
                    <p className='p2'>Our Career Counseling/Placement specializes in providing international students with internship and employment opportunities in the United States, partnered with the largest enterprises in the United States so that the road to employment is no longer a stumbling block for international students. Through cooperation with the top enterprises in the United States, we can ensure that international students can get internships and employment opportunities in top enterprises, and help students to have a smooth career path.</p>
                    <p><br/></p>
                </section>
                <section>
                    <ul className="main-ul-hl-2">
                        <li>
                            <div className="main-img-container-2">
                                <img className='img1' src="https://cdn.pixabay.com/photo/2015/01/22/23/59/purple-608575_1280.jpg"/>
                                <div className="top-left">
                                    <b>Jason H.</b>
                                    <p>University of Pennsylvania</p>
                                    <p>Class of 2024</p>
                                </div>
                                <div className="center">
                                    <p className='p3'>
                                        "It was a very personal experience where I was encouraged to pursue my interests. If you're wondering about how effective the process is, I would say that I accomplised more than I expected and got into schools that would have been out of my reach otherwise"
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container-2">
                                <img className='img2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILszxiJ4kFWBW9PU_x6ohcPlUjPnpaWmPRw&usqp=CAU"/>
                                <div className="top-left">
                                    <b>Kali K.</b>
                                    <p>UC Berkeley</p>
                                    <p>Class of 2023</p>
                                </div>
                                <div className="center">
                                    <p className='p3'>
                                        "I have a very vague idea about how to apply for a private school. My ideas were all over the place, and I had trouble forming my experieces into a strong story about myself. The counselors were very helpful, and it was very accessible to schedule calls with them to brainstorm ideas"
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container-2">
                                <img className='img3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwi5tJn4pr90rgfhD7Z9Xobv6yGB3XY1HKw&usqp=CAU"/>
                                <div className="top-left">
                                    <b>Greg Q.</b>
                                    <p>Yale University</p>
                                    <p>Class of 2023</p>
                                </div>
                                <div className="center">
                                    <p className='p3'>
                                        "I Struggled a lot in standardized testing, I was always underperforming and didn't have much confidence in my abillity. Stright A prep helped me with a concrete study plan and tracked my progress every step of the way"
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
           
                <section>
                <h1 style={{color:'#554E5A'}}><b>|</b><strong style={{color:'#56009A'}}>BLOG</strong> POSTS</h1>
                <div className='slider2-container'>
                    <ImgSlider slides={slides2}/>
                </div>
                <div className='form-container'>
                    <div className='seperate-container'>
                        <div className='purple-background'>
                            <h1>
                                Hello, Welcome
                            </h1>
                            <h3>
                                STRAIGHT A PREP
                            </h3>
                            <p>
                            Straight A Prep provide students with coaching, guidance, mentoring, administrative support, and institutional insights to give them a competitive edge when applying to the college or university of their dreams. 
                            </p>
                            <p>
                            We understand and are ready to lend a helping hand!
                            </p>
                            <p>
                            Let our senior counselors give you a full assessment and lead you to the path of fully realizing your potential in academics, extra-curriculum, and many more achievements in personal growth.
                            </p>
                        </div>
                        <div className='white-background'>
                          
                            <div className='form'>
                            <Form lang={'en'}/>
                            </div>
                        </div>

                    </div>
                    </div>
                </section>
            </div>
            <p><br/></p>
            <Footer lang={lang}/>
        </>
    )
}

export default Main