import CategoryViewCard from "../../../components/CategoryViewCard"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import HeaderMenu from "../../../components/HeaderMenu"
import '../Categories.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function EliteServiceCategory(){

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

    const categories = [{imageUrl:'https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNjaG9vbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60', title:'ELITE TEST PREP', content:'All test preparations, includes SSAT, SAT, ACT, TEOFL, IELTS, GRE, etc', navLink:'/elite-test-prep'},
    {imageUrl:'https://images.unsplash.com/photo-1604404895906-1cba0f221e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'ELITE PRIVATE ACADEMIC TUTORING', content:"Private tutoring for every step of your student's academic journey", navLink:'/elite-private-tutoring'},
    {imageUrl:'https://images.unsplash.com/photo-1561409625-df3c51c39c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title:'SUMMER INTERNSHIP & STUDY ABROAD', content:'International students with internships and employment opportunities', navLink:'/summer-intern'},
    {imageUrl:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZWVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title:'CAREER COUNSELING & PLACEMENT', content:'Support you to enroll in all those big companies in the U.S after graduation', navLink:'/career-counseling'}]

    const categoriesZh = [{imageUrl:'https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNjaG9vbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60', title:'精英入学考试辅导', content:'所有入学考试辅导，包括SSAT、SAT、ACT、托福、雅思、GRE...', navLink:'/elite-test-prep/zh'},
    {imageUrl:'https://images.unsplash.com/photo-1604404895906-1cba0f221e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'精英私人学术辅导', content:"为学生学术旅程的每一步提供私人辅导", navLink:'/elite-private-tutoring/zh'},
    {imageUrl:'https://images.unsplash.com/photo-1561409625-df3c51c39c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title:'暑期实习&海外学习', content:'为国际学生提供在美国大企业实习和就业机会的', navLink:'/summer-intern/zh'},
    {imageUrl:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZWVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title:'职业规划和就业', content:'协助学生毕业后进入美国大公司就职的机会', navLink:'/career-counseling/zh'}]
    

    if(lang === 'zh') {
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <div className="category-container">
                    <h1>精英服务</h1>
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
                <h1>Elite Services</h1>
                <ul className="category-flex">
                   {
                    categories.map((item) => (
                        <li><CategoryViewCard imgUrl={item.imageUrl} title={item.title} content={item.content} navLink={item.navLink} msg={'Learn More'}/></li>
                    ))
                   }
                </ul>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default EliteServiceCategory