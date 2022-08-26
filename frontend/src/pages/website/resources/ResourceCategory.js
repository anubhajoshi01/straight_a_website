import CategoryViewCard from "../../../components/CategoryViewCard"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import '../Categories.css'
import { useParams, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

function ResourceCategory() {

    const { lang } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (lang == null) {
            navigate('en')
        }
    }, [])

    if(lang === 'zh'){
        return(
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <div className="category-container">
                <h2 style={{textAlign:'center'}}><b>|</b>资源</h2>
                <div className="single-category">
                <CategoryViewCard imgUrl={'https://static.wixstatic.com/media/fadc828f3819492293734e9444605b5a.jpg/v1/crop/x_869,y_0,w_3624,h_3587/fill/w_668,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/In%20the%20Classroom.jpg'} title={'资源二'} content={'为您的申请和以后的实习准备一些有用的资源'} navLink={'/faq/zh'} msg={'了解更多'}/>
                </div>
                <Footer lang={lang}/>
            </div>
                
            </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="category-container">
            <h2 style={{textAlign:'center'}}><b>|</b> <strong style={{color:'#56009A'}}>Our </strong> Resources</h2>
                <div className="single-category">
                <CategoryViewCard imgUrl={'https://static.wixstatic.com/media/fadc828f3819492293734e9444605b5a.jpg/v1/crop/x_869,y_0,w_3624,h_3587/fill/w_668,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/In%20the%20Classroom.jpg'} title={'FAQ'} content={'Have a look at what questions students ask the most'} navLink={'/faq'} msg={'Learn more'}/>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default ResourceCategory