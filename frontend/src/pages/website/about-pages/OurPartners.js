import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import partnersImg from '../../../res/our-partners-img.jpg'
import './OurPartners.css'

function OurPartners() {
    return (
        <>
        <Header/>
        <div className="our-partners-container">
            <h1> Our Partners</h1>
            <p> Straight A Prep is a concierge-style, full service academic consulting firm founded by Harvard, UPenn entrepreneurs, and educatiors with a shared vision to redefine the future K-12 and College Counseling and Admission, locally and around the globe since 2014.</p>
            <p><br/></p>
            <p>Over the last few years, Straight A Prep is proud to partner with other organizations to bring education events, workshops, or college counseling services to employees, and community members, as well as special discounts for Straight A students. If you are interested in hosting a Straight A Prep event or working with us, please contact us.</p>
            
            <img src={partnersImg}/>
        </div>
        <Footer/>
        </>
    )
}

export default OurPartners