import Footer from "../../components/Footer"
import Form from "../../components/Form"
import Header from "../../components/Header"
import './StartNow.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Consultation from "../../components/Consultation"

function StartNow() {

    const location = useLocation()
   // console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
   // console.log(`lang ${lang}`)


    //console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    if(lang === 'zh'){
        return(
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <div className="start-now-page">
                    <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                    <div className="start-now-margin">
                    <h1>现在开始咨询</h1>
                    <p><br/></p>
                    <h2>让我们的资深留学顾问为您进行全面评估，带领您走上充分发挥学业潜力、课外活动潜力以及更多个人成长成就的道路。您也可以直接拨打6465892545联系我们！请详细填写表格。</h2>
                    <p><br/></p>
                    </div>
                    <div className="consultation"><Consultation lang={'zh'}/></div>
                    
                </div>
                <Footer lang={lang}/>
            </>
        )
    }

    return(
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="start-now-page">
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="start-now-margin">
                <h1>Start a Consultation Now</h1>
                <p><br/></p>
                <h2>Let our senior counselors give you a full assessment and lead you to the path of fully realizing your potential in academics, extra-curriculum, and many more achievements in personal growth. You can also call us at 6465892545 directly! PLEASE FILL IN THE FORM WITH DETAILS.</h2>
                <p><br/></p>    
                </div>
                <div className="consultation"><Consultation lang={'en'}/></div>
                
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default StartNow