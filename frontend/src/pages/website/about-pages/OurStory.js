import Footer from '../../../components/Footer'
import Form from '../../../components/Form'
import Header from '../../../components/Header'
import './OurStory.css'

function OurStory(){

    return(
        <>
        <Header/>
        <div className='our-story-container'>
            <section>
                <h1><b>"New Era"</b> Education Consulting</h1>
                <p>Straight A Prep is a concierge-style, full-service academic consulting firm based in Manhattan founded by UPenn entrepreneurs and educators with a shared vision to redefine the future of K-12 and College Counseling and Admission locally, and around the globe.</p>
            </section>
        </div>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
        <div className='our-story-container'>
            <section>
                <h1>Emphasize the <b>"FIT"</b></h1>
                <p> We are a dynamic team that emphasizes the 'fit' in all things - and can find the right for for your secondary school or college choice by building upon your strengths, giving you the necessary tools to stay ahead of the curve, and manage stress.</p>
            </section>
            <section>
                <ul className="our-story-hl">
                    <li className='left-side'>
                        <h2><b>|Our</b> Philosophy</h2>
                        <p>Straight A Prep's philosophy us student-oriented; we are about personally guiding our students through a process of self-discovery and articulation that leads to successful applications, as well as happiness and success in the school itself. We are committed to helping students find and apply to independant schools, international schools, colleges and universities. We choose schools that provide the best fit academically and personally are affordable for their families</p>
                        <p><br/></p>
                        <p>We believe that the application process should be a journey of self-discovery, one in which students grow to understand the factors that matter the most to them as they plan their future educational paths.</p>
                        <p><br/></p>
                        <p>We see our role as guides and mentors, helping students stay on track throughout the process. Our goal is to minimize the stress on families while maximizing opportunities.</p>
                    </li>
                    <li>
                        <img className='side-img' src="https://images.unsplash.com/photo-1604872428066-4407f25e6d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMHN0dWR5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                    </li>
                </ul>
            </section>
            <section>
                <h2><b>|Straight A Prep</b> Advantage</h2>
                <p><br/></p>
                <h3>Straight A Prep affirms that all our services will:</h3>
                <ul className='bullet'>
                    <li><p>Treat every stydent with respect, courtesy, and personal attention.</p></li>
                    <li><p>Honor the highest professional ethical standards.</p></li>
                    <li><p>Empower students and their families to make the best choice in selecting and gaining admission to the college that best fits their needs and goals.</p></li>
                    <li><p>Work with every family to secure appropriate financial assistance.</p></li>
                    <li><p>Provide every student with the highest quality individual consulting and learning materials.</p></li>
                </ul>
            </section>
        </div>
        <h2> Sign up for a free consultation today</h2>
        <Form/>
        <Footer/>
        </>
    )
}

export default OurStory