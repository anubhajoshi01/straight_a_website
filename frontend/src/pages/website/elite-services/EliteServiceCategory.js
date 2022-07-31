import CategoryViewCard from "../../../components/CategoryViewCard"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import HeaderMenu from "../../../components/HeaderMenu"
import '../Categories.css'

function EliteServiceCategory(){

    
    const categories = [{imageUrl:'https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHNjaG9vbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60', title:'ELITE TEST PREP', content:'All test preperations, includes SSAT, SAT, ACT, TEOFL, IELTS, GRE, etc', navLink:'/elite-test-prep'},
    {imageUrl:'https://images.unsplash.com/photo-1604404895906-1cba0f221e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'ELITE PRIVATE ACADEMIC TUTORING', content:"Private tutoring for every step of your student's academic journey", navLink:'/elite-private-academic-tutoring'},
    {imageUrl:'https://images.unsplash.com/photo-1561409625-df3c51c39c2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmt8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title:'SUMMER INTERNSHIP & STUDY ABROAD', content:'International students with internships and employment opportunities', navLink:'/summer-internship-study-abroad'},
    {imageUrl:'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyZWVyfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title:'CAREER COUNSELING & PLACEMENT', content:'Support you to enroll in all those big companies in the U.S after graduation', navLink:'/career-counseling-placenent'}]
    
    return (
        <>
            <Header/>
            
            <div className="category-container">
                <h1>Elite Services</h1>
                <ul className="category-flex">
                   {
                    categories.map((item) => (
                        <li><CategoryViewCard imgUrl={item.imageUrl} title={item.title} content={item.content} navLink={item.navLink}/></li>
                    ))
                   }
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default EliteServiceCategory