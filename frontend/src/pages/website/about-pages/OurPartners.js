import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import partnersImg from '../../../res/our-partners-img.jpg'
import './OurPartners.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function OurPartners() {

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

    if(lang === 'zh'){
        return (
            <>
             <Header lang={'zh'} currPath={location.pathname}/>
            <div className="our-partners-container">
                <h1> 合作伙伴</h1>
                <p>Straight A Prep是一个全面化、多方位服务的学术咨询公司，总部位于曼哈顿，由宾夕法尼亚大学的企业家和教育工作者创立，我们有着共同的愿景去重新定义当地和全球的K-12、大学咨询和招生的未来。在过去的几年里，Straight A Prep 很荣幸与其他组织合作，为员工和社区成员提供教育活动、研讨会或大学咨询服务，并为Straight A Prep的学生提供优质服务。如果您有兴趣举办Straight A Prep 活动或与我们合作，请联系我们。</p>
                <p><br/></p>
                
                
                <div className='partner-img'>
                    <img src={partnersImg}/>
                </div>
            </div>
            <Footer lang={lang}/>
            </>
        )
    }

    return (
        <>
         <Header lang={'en'} currPath={location.pathname}/>
        <div className="our-partners-container">
            <h1> Our Partners</h1>
            <p> Straight A Prep is a concierge-style, full service academic consulting firm founded by Harvard, UPenn entrepreneurs, and educatiors with a shared vision to redefine the future K-12 and College Counseling and Admission, locally and around the globe since 2014.</p>
            <p><br/></p>
            <p>Over the last few years, Straight A Prep is proud to partner with other organizations to bring education events, workshops, or college counseling services to employees, and community members, as well as special discounts for Straight A students. If you are interested in hosting a Straight A Prep event or working with us, please contact us.</p>
            <div className='partner-img'>
            <img src={partnersImg}/>
            </div>
        </div>
        <Footer lang={lang}/>
        </>
    )
}

export default OurPartners