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

    const faqListZh = [
        {question:"1. 美国大学学制多长时间？", answer:"本科所有专业一般为四年。完成本科学习以后，可以继续申请研究生。一般硕士需要读两年，博士需要读五年。在美国具有了本科学位就可以直接申请硕博连读。"},
        {question:"2. 高中生去美国留学有什么要求？", answer:"对于高中生想要留学美国只有一个必须的条件：取得高中毕业证。除此之外没有任何必不可少的要求。没有TOEFL成绩或没有足够的TOEFL成绩，可以通过获得语言和学位双录取的方式;没有足够的资金，可以选择费用较低的学校或争取奖学金。因此，只要取得高中毕业证就能够留学美国。"},
        {question:"3. 什么是ED、EA、RD", answer:"Early Decision申请通常在每年11月1日就截止了，录取结果在12月份中旬前就公布。如果学生被学校ED录取，按照规定来说即使别的学校可以给你奖学金，你也没有权利再去其他学校了。所以对于家庭条件不是很好、想要拿奖学金的学生来说，建议还是慎重选择ED，因为一旦被绑定之后，想换其他可以给你提供奖学金的学校都是不可以的. EA和ED一样，需要学生在11月1日之前提前申请。也是12月份中旬就可以出结果，但是不会绑定。学生可以在次年的4月或5月答复学校是否去学校学习。有这种申请模式的学校并不是很多，通常来说这种申请的要求会更局一点。​常规决定RD的申请截止时间通常为12月底或次年年初，录取时间集中在次年3月至次年4月。如果ED没有被录取，他可以再次申请同一学校的RD 吗？一般不会。ED本身会被优先录取，ED没被录取，RD就更不可能了。但是，如果ED不被录取，RD 不限于申请其他学校。"},
        {question:"4. 在考虑美国大学时，综合排名、专业排名、地理位置和师生比例哪个更重要？", answer:"第一是综合排名，第二是地理位置，第三是专业排名，第四是师生比。其实综合排名很大程度上是学校教育质量+学校声誉的反映，这对本科生来说是最重要的。本科的第一个重要意义是学习，所以地理位置不如研究生重要；对于研究生来说，地点直接关系到未来的就业和实习。本科没有所谓的专业排名。USNEWS只列出商科和工程两个专业，因为大学数量少，没有意义。更何况很多大学在申请的时候不选专业。师生比作为教学质量的一个指标，本质上是纳入综合排名的。"},
        {question:"5.  家庭需要为学生准备哪些材料?", answer:"除了学生为提高自身素质和竞争力需要做的工作，以及学生申请时需要准备的申请材料外，家庭只需要在资金和财力方面做好一些相关准备，包括存款证、工作证等。而且与加拿大等一些国家不同，美国对存款的金额和期限没有具体要求，所以灵活性比较大。押金的多少取决于学校的费用以及学生是否获得了奖学金。在没有奖学金的情况下，学生需要提供超过学校一年总费用的存款证明。但是为了最大限度的保证签证，建议存款证明的费用要覆盖3-4年的费用。如果有奖学金，需要根据奖学金的数额和学校的费用来分析。对成熟度几乎没有要求。但家庭还是早做准备比较好，在储蓄、房屋、固定资产等方面。此外，在获得签证之前还需要获得护照。"},
        {question:"6. 没有托福成绩可以去美国留学吗？", answer:"可以。如果您选择的学校提供​​ESL 语言课程，您可以同时申请语言和学位入学。完成语言课程后，一旦通过考试，即可随时进入本科学习。"},
        {question:"7. 在美国可以选择什么专业？", answer:"美国大学提供广泛的本科课程。大多数专业在三个主要学院提供： 1. 文理学院，包括许多基础学科，如数学、物理、生物、化学、经济学、心理学等。2. 工程学院，包括所有工程专业，如电子工程、生物工程、土木工程、环境工程等；3. 商学院，包括所有商科科目，如会计、金融、市场营销、管理等。其他主流专业包括新闻、大众传播、音乐、公共事务、教育、艺术、城市规划、农业等。一般来说，国际学生除医学、法律、建筑等特殊专业外，可以自由选择专业。" },
        {question:"8. 美国大学可以转专业和学校吗？", answer:"美国所有大学都使用通用学分制，因此转学非常方便。您只需像申请新生入学一样向学​​校提交申请材料即可。另外，转专业也很方便，尤其是第一年和第二年还在上基础课的时候。有些大学甚至不要求新生在到达校园时决定专业。另外，如果你有精力，可以选择读第二个专业。"},
    ]

    if(lang === 'zh') {
        return(
            <>
                <Header lang={'zh'} currPath={location.pathname} />
                <div className="faq-page">
                <img className= 'banner' src='https://www.greenvilleadvocate.com/wp-content/uploads/sites/33/2017/06/Scantron.gif' alt='banner'/> 
                <h1>常见问题</h1>
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
                            faqListZh.map((item) => (
                                <li>
                                    <FaqCard question={item.question} answer={item.answer}  />
                                </li>
                            )
        
                        )
    
                        }
    
                    </ul>
                
                </div>
                </div>
                <Footer lang={'zh'} />
            </>
        )
    }

    return(
        <>
            <Header lang={'en'} currPath={location.pathname} />
            <img className= 'banner' src='https://www.greenvilleadvocate.com/wp-content/uploads/sites/33/2017/06/Scantron.gif' alt='banner'/> 
            <div className="faq-page">
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
            </div>
            <Footer lang={'en'} />
        </>
    )
       
           


    
}

export default FAQ


