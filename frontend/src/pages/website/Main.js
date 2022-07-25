import './Main.css'

import img1 from '../../res/main-img1.jpeg'
import img2 from '../../res/main-img2.jpeg'
import img3 from '../../res/main-img3.jpeg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageSlider from '../../components/ImageSlider'
import ImgSlider from '../../components/ImgSlider'
import Form from '../../components/Form'

function Main(){

    const slides = [
        {title:"Private Counseling: Realize your dream, create your future", img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWR2aWNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60", navLink:'/'},
        {title: "Elite Services: Test Prep, Tutoring, Career Counseling", img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHV0b3J8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", navLink:'/'},
        {title:'College Transfer Program: Transfer Application Services', img:"https://images.unsplash.com/photo-1567167273284-b39c9c601b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGNvbGxlZ2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", navLink:'/'}
    ]

    const slides2 = [
        {title:"Why do you need Straight A Prep? Straight A Prep is a concierge-style, full-service academic consulting firm founded by", img:"https://static-cse.canva.com/blob/558554/studyingtips1.jpg"},
        {title:"Why do you need Straight A Prep? Straight A Prep is a concierge-style, full-service academic consulting firm founded by", img:"https://www.thoughtco.com/thmb/hQC8gjfZ4Rd421J4i3UeRwr6eZY=/3865x2576/filters:fill(auto,1)/teenage-students-in-classroom--141090063-5a653ed40c1a8200366bdd66.jpg"},
        {title:"Why do you need Straight A Prep? Straight A Prep is a concierge-style, full-service academic consulting firm founded by", img:"https://www.gettingsmart.com/wp-content/uploads/2018/06/Diverse-Students-Working-on-Maps-Project-with-teacher-Feature-Image.jpg"}
    ]
    return (
        <>
            <Header/>
            <ImageSlider slides={slides}/>
            <div className='main-container'>
                <section>
                    <h1><b>|OUR</b> SERVICES</h1>
                    <p>Straight A Prep provides students with counseling, guidance, mentoring, administrative support, and institutional insights to give them a competitive edge when applying to the college or university of their dreams.</p>
                </section>
                <section>
                    <ul className="main-ul-hl">
                        <li>
                            <div className="main-img-container">
                                <img src="https://images.unsplash.com/photo-1604882737278-6aeefeb2c827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWwlMjBzdHVkeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>HIGH SCHOOL</b> ADMISSION</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container">
                                <img src="https://images.unsplash.com/photo-1594750852563-5ed8e0421d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHZlcnRpY2FsJTIwc3R1ZGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>COLLEGE</b> ADMISSION</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container">
                                <img src="https://images.unsplash.com/photo-1476459216969-94c7100f88a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHZlcnRpY2FsJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                                <div className="img-label-bot"><b>PRIVATE</b> TUTORING</div>
                            </div>
                        </li>
                        <li>
                            <div className="main-img-container">
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
                    <ul className="main-ul-hl">
                        <li>
                            <div className="main-img-container-2">
                                <img className='img1' src="https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/>
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
                                <img className='img2' src="https://images.unsplash.com/photo-1623578540859-adf2416e09b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjZW5lcnl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
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
                                <img className='img3' src="https://images.unsplash.com/photo-1610533090386-11dce1436c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNjZW5lcnl8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
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
                    <h1><b>|BLOG</b> POSTS</h1>
                    <ImgSlider slides={slides2}/>
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
                            <h3>
                                Sign up for a consultation 
                            </h3>
                            <div className='form'>
                            <Form/>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}

export default Main