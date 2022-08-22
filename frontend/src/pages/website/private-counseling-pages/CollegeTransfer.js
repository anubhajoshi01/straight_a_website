import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './CollegeTransfer.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function CollegeTransfer(){

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
                <div className="college-transfer-container">
                    <h1>大学转学服务</h1>
                    <p><br/></p>
                    <p>理想情况下，每个学生高中毕业后都将直接进入他们梦想中的大学。 然而，每年有成千上万的学生发现自己上的大学并不符合他们的期望。 他们可能是在寻找一个更多元化的大学校园，更严谨的学术，一个学校没有提供的特定专业，更丰富的课外生活，或任何其他机会。 如果你对转学感兴趣，但不知道如何开始，指挥教育可以帮助你成功，并帮助你在通往适合你的大学的道路上。 </p>
                </div>
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="college-transfer-container">
                    <div className='college-transfer-descr'>
                    <h2>大学转学服务</h2>
                    <p>这个转学计划是为想转学到不同学院或大学的大一和大二学生设计的。Straight A Prep导师将与你一起完善你的大学和高中经历，完成转学学生的相关申请，列出适合的学校名单，并为你的文书和补充文章提出想法并进行编辑。</p>
                    <p><br/></p>
                    <h2>实习/研究协助</h2>
                    <p>这项服务包括机会搜寻、简历修改、求职信协助修改和面试准备。我们还利用我们广泛的专业人士网络提供有价值的见解和潜在的机会</p>
                    </div>
                </div>
                <Footer lang={lang}/>
            </>
            
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="college-transfer-container">
                <h1>College Transfer</h1>
                <p><br/></p>
                <p>Ideally, every student will head to their dream college straight after high school. Howeber, thousands of students each year find themselves at a university that doesn't match their expectations. They may be seeking a more diverse college campus, more rigorous acaemics, a specific major that is not offered at their school, a richer extracurricular life, or any number of other opportunities. If you are interested in transferring but don't know how to start, Command Education can set you up for succes and assist you along the path to the college that's right for you.</p>
            </div>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="college-transfer-container">
                <div className='college-transfer-descr'>
                <h2>Transfer Application Services</h2>
                <p>This package is designed for current college freshmen and sophmores who would like to transfer to a different college or university than they are currently attending. Straight A Prep mentors will work with you to frame your college and high school experiemces, complete the Common App for transfer students, make a list of suitable schools, and come up with the idea for and edit your main personal and supplemental essays.</p>
                <p><br/></p>
                <h2>School Search and Selection</h2>
                <p>This service includes opportunity search, resume revision, cover letter assistance, and interview prep. We also use our extensive network of leading professionals to provide valuable insight and potential opportunities.</p>
                </div>
            </div>
            <Footer lang={lang}/>
        </>
        
    )
}

export default CollegeTransfer