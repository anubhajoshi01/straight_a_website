import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './ProBono.css'





function ProBono(){



    return (
        <>
        <Header />
        <div className='img'>
            <img src="https://www.sjsu.edu/diversity/pics/community-resources/community-banner.jpg" alt='banner'/>
        </div>
        
        <section>
            <h1>
                Pro Bono Services
            </h1>
        </section>
        <div className='square'>
            <div className='wrap-pic'>
                <img src= "https://www.commonsense.org/education/sites/default/files/styles/16_9_medium/public/blog-share/7-ways-to-make-distance-learning-more-equitable-article.png?itok=ki1Ssfnc"/>
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
                <img  src='https://www.arborwell.com/wp-content/uploads/2017/10/Los-Angeles-Banner.jpg' alt='la'/>
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
            <p>
                Please email  
            </p>
            <p className='purple'>
            info@straightaprep.com
            </p>
            <p>
            with all of the necessary application requirements.
            </p>
            <h3>
                Thank you, and let us help lift our studets and reach their full potential.
            </h3>

        
        </div>
        

        <Footer />
        
        
        
        </>


    )
}

export default ProBono