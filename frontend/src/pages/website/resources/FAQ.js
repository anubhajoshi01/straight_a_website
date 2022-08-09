import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

function FAQ() {
    const { lang } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (lang == null) {
            navigate('en')
        }
    }, [])


    return(
        <>
            <Header lang={'en'} currPath={location.pathname} />
            {/* <img src='https://www.uwindsor.ca/dailynews/sites/uwindsor.ca.dailynews/files/styles/full/public/600_scantron.jpg?itok=jvkWbxxW' alt='banner'/>  */}
            <Footer />
        </>
    )
       
           


    
}
export default FAQ


