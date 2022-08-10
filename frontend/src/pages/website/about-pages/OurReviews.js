import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './OurReviews.css'

function OurReviews() {
    return (
        <>
        <Header/>
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
                        </div>
                        <div className="right-content">
                            <p>"I struggled a lot in standardized testing, I was always underperforming and didn't have much confidence in my ability. Straight A Prep helped me with a concrete study plan and tracked my progress ecery step of the way."</p>
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
                            <p>"It was a very personal experience where I was encouraged to pursue my interests. If you're wondering about how effective the process is, I would say that I accomplished more than I expected and got into schools that would have been out of my reach otherwise."</p>
                        </div>
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
                  
                </div>
            </section>
        </div>
        <Footer/>
        </>
    )
}

export default OurReviews