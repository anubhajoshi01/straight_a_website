import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './ElitePrivateTutoring.css'

function ElitePrivateTutoring(){
    return(
        <>

        <Header />

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
            <h3>
                <b>|Straight A Prep </b> 
                Offers a Variety of Subjects
            </h3>
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
            
            

            <section className='curriculum'>
            <h3>
            <b>|Straight A Prep's </b> 
            other Enrichment Curriculum
            </h3>
            <p>
            Our tutors are, quite frankly, amazing people with fascinating pursuits and talents. 
            If a student wants to explore areas of interest that schools generally do not cover, 
            we also offer enrichment subjects such as computer programming (including database creation
            and web design), European military history, Shakespeare, songwriting, science fiction, 
            environmental science and organic farming, documentary filmmaking, and engineering.
            </p>
            </section>

            <section className='advantage'>
            <h3>
            <b>|Our </b> 
                advantages
            </h3>
            <div className='qualities'>
                <p>
                    Professional Knowledge
                </p>
                <p>
                    Quality Service
                </p>
                <p>
                    Spirit of Educational Innovation
                </p>
            </div>
            </section>
            <h4> Sign up for a free consultation today</h4>
        </div>
        
        <Footer />

        </>

    )


}
export default ElitePrivateTutoring