import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import './FAQ.css'
import FaqCard from "../../../components/FaqCard"
import { NavItem } from "react-bootstrap"

function FAQ() {
    const { lang } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (lang == null) {
            navigate('en')
        }
    }, [])

    const faqList = [
        {question:"1. What is the length of schooling in American universities?", answer:" Bachelor's degree in all majors is usually four years. After the completion of undergraduate studies, you can continue to apply for graduate studies. It takes two years for a master's degree and five years for a doctorate."},
        {question:"2. What are the requirements for high school students to study in the United States?", answer:"In fact, there is only one requirement for high school students who want to study in the United States: a high school diploma. There are no essential requirements beyond that. Students who do not have TOEFL scores or do not have sufficient TOEFL scores may be enrolled in both language and degree programs. If you don't have enough money, you can choose a less expensive school or go for a scholarship. Therefore, as long as you obtain a high school diploma, you can study in the United States."},
        {question:"3. What are ED, EA, RD?", answer:"The deadline for Early Decision applications is usually Nov. 1, and females are no later than the middle of December. If a student is accepted into the ED school, you have no right to go to another school even if another school offers you a scholarship. Therefore, for students from poor families who want to receive scholarships, it is advisable to choose the Early Decision carefully, because once you are bound, it is not acceptable to change to another school that can offer you scholarships.Early Action is the same as Early Decision. Students are required to apply for Early Action before November 1st.The result can also be issued in the middle of December, but it will not be bound. Students can reply in April or May of the following year whether they want to go to school or not. There aren't many schools that have this application model, and it's usually a little more demanding; Regular Decision mentions the application deadline and the admission date. The application deadline for RD is usually the end of December or the beginning of the next year, and the admission will be concentrated in March to April of the next year. If Ed is not admitted, can he apply for RD of the same school again? Generally not. Ed itself will be given priority, Ed failed to be admitted, RD is even more impossible. However, if Ed is not accepted, RD is not restricted to apply to other schools."},
        {question:"4. Which is more important among comprehensive ranking, major ranking, geographical location, or faculty& student ratio when considering a US university?", answer:"The first is comprehensive ranking, the second geographical location, the third major ranking, the fourth teacher& student ratio. In fact, the comprehensive ranking is to a large extent the reflection of the school's education quality + the school's reputation, which is the most important for undergraduates. The first important meaning of undergraduate course is learning, so the geographical location is not as important as graduate students; For graduate students, location is directly related to future employment and internship. There is no so-called ranking of majors for undergraduates. USNEWS only lists two majors, business and engineering, which is meaningless because of a small number of universities. What's more, many universities do not choose majors when applying. As an indicator of teaching quality, the teacher-student ratio is essentially integrated into the comprehensive ranking."},
        {question:"5. What materials do families need to prepare for their students?", answer:" In addition to the work that students need to do in order to improve their quality and competitiveness, as well as the application materials that students need to make when applying, families only need to make some relevant preparations in terms of funds and financial resources, including deposit certificate and work certificate, etc. And unlike Canada and some other countries, the United States has no specific requirements on the amount and term of deposit, so its flexibility is relatively large. The amount of the deposit depends on the cost of the school and whether the student has won the scholarship. In the case of no scholarship, the student needs to provide a certificate of deposit that exceeds the total cost of the school in one year. However, in order to ensure the visa to the maximum extent, it is recommended that the cost of the certificate of deposit should cover the cost of 3-4 years. If there is a scholarship, it needs to be analyzed according to the amount of the scholarship and the cost of the school. There are almost no requirements for maturity. But it would be better for households to prepare early, in terms of savings, homes, fixed assets, and so on. In addition, it is also necessary to obtain a passport before the visa is granted."},
        {question:"6. Can I study in the United States without TOEFL scores?", answer:"You can. You can apply for both language and degree admission if your chosen school offers ESL language programs. After finishing the language courses in our school, once you pass the test, you can enter the undergraduate study at any time."},
        {question:"7. What majors can I choose in the United States?", answer:"American universities offer a wide range of undergraduate programs. Most majors are offered in three major schools: 1- Faculty of Arts and Sciences, which includes many basic disciplines, such as mathematics, physics, biology, chemistry, economics, psychology, etc.2- School of Engineering, including all engineering majors, such as Electronic Engineering, Biological Engineering, Civil Engineering, Environmental Engineering, etc.;3- Business school, including all business subjects, such as accounting, finance, marketing, management, etc. Other mainstream majors include journalism, mass communication, music, public affairs, education, arts, urban planning, agriculture, etc. Generally speaking, international students are free to choose their major except for some special majors such as medicine, law, and architecture." },
        {question:"8. Can American universities change majors and schools?", answer:"All universities in the United States use the common credit system, so it is very convenient to transfer to another school. You only need to submit your application materials to the school just as you would apply for freshman admission. In addition, it is very convenient to change your major, especially in the first and second years when you are still taking basic courses. Some universities even don't require freshmen to decide on a major when they arrive on campus. In addition, if you have the energy, you can choose to take a second major."},
    ]


    return(
        <>
            <Header lang={'en'} currPath={location.pathname} />
            <img className= 'banner' src='https://www.greenvilleadvocate.com/wp-content/uploads/sites/33/2017/06/Scantron.gif' alt='banner'/> 
            <h1> FAQ </h1>
            <div className='content-box-pics'>
                <div className="pictures" >
                    <img className="pics" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHl8ZW58MHx8MHx8&w=1000&q=80" alt='pic1'/>
                    <img className="pics" src= "https://images.ctfassets.net/81iqaqpfd8fy/41KiNVEWQM6MgY8QEGkoco/44b9952239085ad2c731b3dcef4cc94f/selfcareguide-02.jpg?h=620&w=1440"/>
                    <img className="pics" src="https://www.oxfordlearning.com/wp-content/uploads/2009/05/tips-for-easier-studying.jpg"/>
                    <img className='pics' src="https://education.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_xl/public/2021-12/Planning%20your%20studies.jpg?h=140710cd&itok=EDqz50YE"/>
                    <img className='pics' src="https://www.heysigmund.com/wp-content/uploads/Studying-9-Scientifically-Proven-Ways-to-Supercharge-Your-Learning.jpg"/>
                    <img className='pics' src="https://www.brightoncollege.com/wp-content/uploads/2012/03/are-you-studying-properly.jpg"/>
                    <img className='pics' src="https://i.pinimg.com/originals/c5/f4/0f/c5f40fbbe1aea840e549e71d1d7cb9f1.jpg" />
                    <img className='pics' src="https://media.istockphoto.com/photos/female-student-picture-id1264296727?b=1&k=20&m=1264296727&s=170667a&w=0&h=uGwjyDSjSqIsq9jCwnCHpQDtnDkNIU3Jjoq8cTN8Pss=" />
                </div>
                
                <ul className="cards">
                    {
                        faqList.map((item) => (
                            <li>
                                <FaqCard question={item.question} answer={item.answer}  />
                            </li>
                        )
    
                    )

                    }

                </ul>
            
            </div>
            <Footer lang={'en'} />
        </>
    )
       
           


    
}

export default FAQ


