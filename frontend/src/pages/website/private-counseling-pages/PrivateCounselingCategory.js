import CategoryViewCard from "../../../components/CategoryViewCard"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import HeaderMenu from "../../../components/HeaderMenu"
import '../Categories.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function PrivateCounselingCategory(){

    console.log('private counseling')

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
    
    const categories = [{imageUrl:'https://images.unsplash.com/photo-1585158531004-3224babed121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'6-8 GRADE ADMISSION', content:'Our experienced consultants analyze your student profile to help finalize your school list and provide the most effective assistance with your application', navLink:'/6-8-grade-admission'},
    {imageUrl:'https://images.unsplash.com/photo-1606660956148-5291deb68185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGVsZW1lbnRhcnklMjBzY2hvb2wlMjBzdHVkZW50fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'8-11 GRADE ADMISSION', content:'Our experienced consultants analyze your student profile to help finalize your school list and provide the most effective assistance with your application', navLink:'/8-11-grade-admission'},
    {imageUrl:'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title:'COLLEGE ADMISSION', content:'We provide students with detailed, expert insight and guide them to develop the personal knowledge needed to complete applications', navLink:'/college-admission'},
    {imageUrl:'https://images.unsplash.com/photo-1606767417438-41fa53fa24c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title:'COLLEGE TRANSFER', content:'We give access to our transfer application or internship and research assistance services to assist students with transfering to a university that fulfills their expectations', navLink:'/college-transfer'}]
    
    const categoriesZh = [{imageUrl:'https://images.unsplash.com/photo-1585158531004-3224babed121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'6-8年级留学', content:'我们经验丰富的留学顾问会分析您的学生档案，以帮助确定您的学校名单，并为您的申请提供最有效的帮助', navLink:'/6-8-grade-admission/zh'},
    {imageUrl:'https://images.unsplash.com/photo-1606660956148-5291deb68185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGVsZW1lbnRhcnklMjBzY2hvb2wlMjBzdHVkZW50fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'8-11级留学', content:'我们经验丰富的留学顾问会分析您的学生档案，以帮助确定您的学校名单，并为您的申请提供最有效的帮助', navLink:'/8-11-grade-admission/zh'},
    {imageUrl:'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title:'大学申请', content:'我们为学生提供详细、专业的见解，并指导他们发展完成申请所需的个人知识', navLink:'/college-admission/zh'},
    {imageUrl:'https://images.unsplash.com/photo-1606767417438-41fa53fa24c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title:'大学转学服务', content:' 如果你对转学感兴趣，但不知道如何开始，指挥教育可以帮助你成功，并帮助你在通往适合你的大学的道路上。', navLink:'/college-transfer/zh'}]

    if(lang === 'zh') {
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <div className="category-container">
                <h2 style={{textAlign:'center'}}><b>|</b>留学咨询</h2>
           
                    <p><br/></p>
                    <ul className="category-flex">
                       {
                        categoriesZh.map((item) => (
                            <li><CategoryViewCard imgUrl={item.imageUrl} title={item.title} content={item.content} navLink={item.navLink} msg={'了解更多'}/></li>
                        ))
                       }
                    </ul>
                </div>
                <Footer lang={lang}/>
            </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="category-container">
                <h2 style={{textAlign:'center'}}><b>|</b> <strong style={{color:'#56009A'}}>Private</strong> Counseling</h2>
                <p><br/></p>
                <ul className="category-flex">
                   {
                    categories.map((item) => (
                        <li><CategoryViewCard imgUrl={item.imageUrl} title={item.title} content={item.content} navLink={item.navLink} msg={'Learn more'}/></li>
                    ))
                   }
                </ul>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default PrivateCounselingCategory