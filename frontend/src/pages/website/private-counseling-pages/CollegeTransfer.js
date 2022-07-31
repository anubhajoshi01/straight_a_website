import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './CollegeTransfer.css'

function CollegeTransfer(){

    return (
        <>
            <Header/>
            <div className="college-transfer-container">
                <h1>College Transfer</h1>
                <p>Ideally, every student will head to their dream college straight after high school. Howeber, thousands of students each year find themselves at a university that doesn't match their expectations. They may be seeking a more diverse college campus, more rigorous acaemics, a specific major that is not offered at their school, a richer extracurricular life, or any number of other opportunities. If you are interested in transferring but don't know how to start, Command Education can set you up for succes and assist you along the path to the college that's right for you.</p>
            </div>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="college-transfer-container">
                <h2>Transfer Application Services</h2>
                <p>This package is designed for current college freshmen and sophmores who would like to transfer to a different college or university than they are currently attending. Straight A Prep mentors will work with you to frame your college and high school experiemces, complete the Common App for transfer students, make a list of suitable schools, and come up with the idea for and edit your main personal and supplemental essays.</p>
                <p><br/></p>
                <h2>School Search and Selection</h2>
                <p>This service includes opportunity search, resume revision, cover letter assistance, and interview prep. We also use our extensive network of leading professionals to provide valuable insight and potential opportunities.</p>
            </div>
            <Footer/>
        </>
        
    )
}

export default CollegeTransfer