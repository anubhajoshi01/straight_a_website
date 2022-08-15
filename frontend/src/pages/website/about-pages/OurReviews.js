import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './OurReviews.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function OurReviews() {

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
                <div className="our-reviews-container">
                <h1>学生感言</h1>
                <section>
                    <div className="review-inline">
                        <img className="left-img" src="https://images.unsplash.com/photo-1624567644499-c9df255d150b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                        <div className="content-box">
                            <div className="left-content">
                                <h2>格雷格 Q</h2>
                                <h3>耶鲁大学</h3>
                                <h3>2023届</h3>
                            </div>
                            <div className="right-content">
                                <p><br/></p>
                                <p>"我在标准化考试中很挣扎，我总是表现不佳，对自己的能力没有多大信心。Straight A Prep帮助我制定了一个具体的学习计划，并跟踪我的每一个进步，帮助我实现了我的名校梦想"</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-inline">
                        
                        <div className="content-box-left">
                            <div className="left-content">
                                <h2>杰森 H</h2>
                                <h3>宾夕法尼亚大学</h3>
                                <h3>2024届</h3>
                            </div>
                            <div className="right-content">
                                <p><br/></p>
                                <p>"这是一次非常私人的经历，Straight A Prep鼓励我追求自己的目标学校。如果你想知道这个过程到底有多有效，我想说的是，我完成的比我预想的要多，进入了一些我原本无法进入的学校。"</p>
                            </div>
                        </div>
                        <div className='right-img-testimonials'>
                        <img src='https://images.unsplash.com/photo-1604404895906-1cba0f221e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60'/>
                    </div>
                        
                    </div>
                    <div className="review-inline">
                        <img className="left-img" src="https://images.unsplash.com/photo-1644211492216-8a5e874023f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJvb2tzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                        <div className="content-box">
                            <div className="left-content">
                                <h2>卡利 K</h2>
                                <h3>加州大学伯克利分校</h3>
                                <h3>2023届</h3>
                            </div>
                            <div className="right-content">
                                <p><br/></p>
                                <p>"关于如何申请私立学校，我有一个很模糊的想法。我的想法到处都是，我很难把我的经历变成一个关于我自己的有力的故事。Straight A Prep的升学顾问们非常有帮助，我可以很容易地安排与他们的电话会议来集思广益，并在他们的帮助下申请上心仪大学。"</p>
                            </div>
                        </div>
                    </div>
                    <div className="review-inline">
                       
                        <div className="content-box-left">
                            <div className="left-content">
                                <h2>克洛伊 T</h2>
                                <h3>加州大学洛杉矶分校</h3>
                                <h3>2024届</h3>
                            </div>
                            <div className="right-content">
                                <p><br/></p>
                                <p>"我发现Straight A Prep的服务非常有帮助。这个过程最好的部分是写作专家通过指导而不是直接编辑来完成每一个句子，以完成一篇精美的文章。"</p>
                            </div>
                        </div>
                        <div className='right-img-testimonials'>
                        <img src='https://images.unsplash.com/photo-1621310814711-56ccead6e1fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbGxlZ2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/>
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
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="our-reviews-container">
            <h1> Our Reviews </h1>
            <section>
                <div className="review-inline">
                    <img className="left-img" src="https://images.unsplash.com/photo-1624567644499-c9df255d150b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                    <div className="content-box">
                        <div className="left-content">
                            <h2>Greg Q.</h2>
                            <h3>Yale University</h3>
                            <h3>Class of 2023</h3>
                            <p><br/></p>
                        </div>
                        <div className="right-content">
                            <p><br/></p>
                            <p>"I struggled a lot in standardized testing, I was always underperforming and didn't have much confidence in my ability. Straight A Prep helped me with a concrete study plan and tracked my progress every step of the way."</p>
                        </div>
                    </div>
                </div>
                <div className="review-inline">
                    
                    <div className="content-box-left">
                        <div className="left-content">
                            <h2>Jason H.</h2>
                            <h3>University of Pennsylvania</h3>
                            <h3>Class of 2024</h3>
                        </div>
                        <div className="right-content">
                            <p><br/></p>
                            <p>"It was a very personal experience where I was encouraged to pursue my interests. If you're wondering about how effective the process is, I would say that I accomplished more than I expected and got into schools that would have been out of my reach otherwise."</p>
                        </div>
                    </div>
                    <div className='right-img-testimonials'>
                        <img src='https://images.unsplash.com/photo-1604404895906-1cba0f221e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60'/>
                    </div>
                    
                </div>
                <div className="review-inline">
                    <img className="left-img" src="https://images.unsplash.com/photo-1644211492216-8a5e874023f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJvb2tzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                    <div className="content-box">
                        <div className="left-content">
                            <h2>Kali K.</h2>
                            <h3>UC Berkeley</h3>
                            <h3>Class of 2023</h3>
                        </div>
                        <div className="right-content">
                            <p><br/></p>
                            <p>"I have a very vague idea about how to apply for a private school. My ideas were all over the place, and I had trouble forming experiences into a strong story about myself. The counselors were very helpful, and it was very accessible to schedule calls with them to brainstorm ideas."</p>
                        </div>
                    </div>
                </div>
                <div className="review-inline">
                   
                    <div className="content-box-left">
                        <div className="left-content">
                            <h2>Chloe T.</h2>
                            <h3>UCLA</h3>
                            <h3>Class of 2024</h3>
                        </div>
                        <div className="right-content">
                            <p>"I found the services extremely helpful. The best part about the process is that empowerly writing specialists worked through every sentence in order to fabricate a polished essay through guidance rather than direct edits"</p>
                        </div>
                    </div>
                    <div className='right-img-testimonials'>
                        <img src='https://images.unsplash.com/photo-1621310814711-56ccead6e1fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbGxlZ2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/>
                    </div>
                </div>
            </section>
        </div>
        <Footer lang={lang}/>
        </>
    )
}

export default OurReviews