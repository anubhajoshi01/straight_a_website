import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import jasonImg from '../../../res/case-studies-jason.png'
import lisaImg from '../../../res/case-studies-lisa.png'
import sarahImg from '../../../res/case-studies-sarah.png'
import './CaseStudies.css'

function CaseStudies(){

    return (
        <>
            <Header/>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <h1>Case Studies</h1>
            <section>
                <div className="case-studies-container">
                    <img className='left' src={jasonImg}/>
                    <div className='case-content'>
                        <h2><b>|Applicant</b> Background</h2>
                        <p>School: International School</p>
                        <p>Basic scores: GPA 3.0+/4.0, TOEFL 100+</p>
                        <p>Major: Engineering</p>
                        <p>Target University: New York University</p>
                        <p><br/></p>
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
                        <h2><b>|Applicant</b> Background</h2>
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
                        <h2><b>|Applicant</b> Background</h2>
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
            <Footer/>
        </>
    )
}

export default CaseStudies