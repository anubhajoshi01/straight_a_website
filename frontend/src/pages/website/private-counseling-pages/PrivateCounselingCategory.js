import CategoryViewCard from "../../../components/CategoryViewCard"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import HeaderMenu from "../../../components/HeaderMenu"
import '../Categories.css'

function PrivateCounselingCategory(){

    console.log('private counseling')

    
    const categories = [{imageUrl:'https://images.unsplash.com/photo-1585158531004-3224babed121?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'6-8 GRADE ADMISSION', content:'Our experienced consultants analyze your student profile to help finalize your school list and provide the most effective assistance with your application', navLink:'/6-8-grade-admission'},
    {imageUrl:'https://images.unsplash.com/photo-1606660956148-5291deb68185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGVsZW1lbnRhcnklMjBzY2hvb2wlMjBzdHVkZW50fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60', title:'8-11 GRADE ADMISSION', content:'Our experienced consultants analyze your student profile to help finalize your school list and provide the most effective assistance with your application', navLink:'/8-11-grade-admission'},
    {imageUrl:'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', title:'COLLEGE ADMISSION', content:'We provide students with detailed, expert insight and guide them to develop the personal knowledge needed to complete applications', navLink:'/college-admission'},
    {imageUrl:'https://images.unsplash.com/photo-1606767417438-41fa53fa24c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWR5fGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title:'COLLEGE TRANSFER', content:'We give access to our transfer application or internship and research assistance services to assist students with transfering to a university that fulfills their expectations', navLink:'/college-transfer'}]
    
    return (
        <>
            <Header/>
            <div className="category-container">
                <h1>Private Counseling</h1>
                <p><br/></p>
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

export default PrivateCounselingCategory