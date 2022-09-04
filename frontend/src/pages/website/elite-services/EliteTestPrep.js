import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './EliteTestPrep.css'
import Form from "../../../components/Form"
import Consultation from "../../../components/Consultation"

function EliteTestPrep(){

    const location = useLocation()
  //  console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
   // console.log(`lang ${lang}`)


  //  console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])


    if(lang === 'zh'){
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="elite-test-prep-container">
                    <div>
                        <h1>精英入学考试辅导</h1>
                        <p>Straight A Prep 为学生学术旅程的每一步提供有针对性的考试辅导。考试包括SSAT、ISEE、ACT、SAT、托福、雅思、GRE、GMAT 等。我们知道每个学年的学生都会面对不同的学术挑战，因此我们的导师团队专门从事各级教别的教学：小学、初中、高中和大学。我们的教师团队可以确定学生缺乏哪些技能，并帮助他们为未来的课程奠定坚实的基础。</p>
                    </div>
                    <p><br/></p>
                    <div>
                        <img className="left-img" src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                        
                        <div className="right-etp">
                            <h2>高中入学考试</h2>
                            <p>SSAT 是一项标准化考试，侧重于语言、数学和阅读技能。学生全年有多种方式参加SSAT. ISEE（独立学校入学考试）是2-12 年级的入学考试。测试的材料根据学生的年级水平而变化；但是，所有考试都包含一篇作文，它将被发送到您申请的学校。专业高中入学考试(SHSAT) 是录取纽约市9 所专业高中中8 所的唯一标准。</p>
                            
                        </div>
                    </div>
                    <p><br/></p>
                    <p><br/></p>
                    <div>
                        <img className="right-img" src="https://cdn.pixabay.com/photo/2018/10/04/07/48/omr-3723130__480.jpg"/>
                        <div className="left-etp">
                        <p><br/></p>
                        <p><br/></p> 
                            
                            <h2>大学入学考试</h2>
                            <p>SAT 是美国大学入学广泛使用的标准化考试。该测试旨在评估学生对大学的准备情况。SAT 最初设计为不与高中课程保持一致，但对2016 年推出的SAT 版本进行了一些调整，该测试更真实地反映了学生在高中学习的课程核心标准。</p>
                            <p>ACT 是用于美国大学入学的标准化考试。ACT 考试涵盖四个学术技能领域：英语、数学、阅读和科学推理。它还包含了一个可选的写作在测试中。它被美国所有四年制大学和超过225 所美国以外的大学所接受。主要的四个ACT 考试部分按1-36 的范围单独评分，综合分数（四舍五入）提供四个部分的整数平均值）。</p>
                        </div>
                        
                        
                        
                        
                    </div>
                    <p><br/></p>
                    <div>
                        <h2>研究生院入学考试</h2>
                        <p>GMAT是一种计算机适应性测试，旨在评估书面英语的某些分析、写作、定量、口头和阅读技能，以用于研究生管理课程（例如MBA课程）的录取。据测试公司称，GMAT评估分析性写作和解决问题的能力，同时还解决数据充分性、逻辑和批判性推理技能，它认为这些技能对现实世界的商业和管理成功至关重要。一年可以参加考试五次，但最多不超过八次。</p>
                        <p>LSAT是一项为期半天的标准化考试，每年在世界各地的指定考试中心进行七次。法学院招生委员会(LSAC)为潜在的法学院候选人管理LSAT。它旨在评估阅读理解以及逻辑和口头推理能力。该测试是在美国，加拿大，澳洲，以及越来越多的其他国家法学院录取过程中不可或缺的一部分。</p>
                        <p>GRE是一项标准化考试，是美国和加拿大的许多研究生院的入学要求，而在其他国家/地区则很少。GRE由教育考试服务中心(ETS)拥有和管理。该测试由卡内基教学促进基金会于1936年设立。根据ETS的说法，GRE旨在衡量长期学习中获得的口头推理、定量推理、分析性写作和批判性思维技能。</p>
                    </div>
                    <p><br/></p>
                    <div>
                        <img className="left-img" src="https://images.unsplash.com/photo-1547567667-1aa64e6f58dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV4YW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                        <div className="right-etp">
                            <h2>国际生入学考试</h2>
                            <h3>托福</h3>
                            <p>TOEFL是一项标准化考试，用于衡量希望入读英语大学的非母语人士的英语语言能力。该考试被150多个国家的11,000多所大学和其他机构接受。TOEFL是教育考试服务中心(ETS)的商标，ETS是一个私人非营利组织，负责设计和管理考试。ETS发布官方成绩报告，这些报告独立发送给机构，考试后两年内有效。</p>
                            <h3>雅思</h3>
                            <p>雅思是针对非英语母语人士的英语语言能力国际标准化考试。雅思成绩或测试报告表发给所有考生，分数从“band 1”（“非用户”）到“band 9”（“专家用户”），每个机构设置不同的门槛。</p>
                        </div>
                    </div>
                    
                </div>
                <div className="consultation">
                    <Consultation lang={'zh'}/>
                </div>
                <p><br/></p>
                <Footer lang={lang}/>
            </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="elite-test-prep-container">
                <div>
                    <h1>Elite Test Prep</h1>
                    <p>Straight A Prep provides targeted test tutoring for every step of our student's academic journey. The tests incluse SSAT, ISEE, ACT, SAT, TOEFL, IELTS, GRE, GMAT, etc. We understand that each school year can provide different challenges for your student, so our tutors specialize in teaching at all levels of instruction: elementary school, middle school, high school, and college. Our team can identify which skills are lacking and help build a strong foundation for future courses.</p>
                </div>
                <p><br/></p>
                <div>
                    <img className="left-img" src="https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXhhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                    
                    <div className="right-etp">
                        <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>High School</strong> Entrance Exams</h2>
                        <p>The SSAT is a standardized test focusing on verbal, mathematical, and reading skills. Students ahve multiple ways throughout the year to take the SSAT. ISEE (The Independant School Entrance Examination) is an admission entrance exam for grades 2-12. The tested material changes based on a student's grade level; however, all exams incluse an essay, which will be sent to the schools where you're applying. The Specialized High School Admissions Test (SHSAT) is the only criterion for admissions to 8 of the 9 New York City specialized high schools.</p>
                        
                    </div>
                </div>
                <p><br/></p>
                <p><br/></p>
                <div>
                    <img className="right-img" src="https://cdn.pixabay.com/photo/2018/10/04/07/48/omr-3723130__480.jpg"/>
                    <div className="left-etp">
                    <p><br/></p>
                    <p><br/></p> 
                        
                        <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>College</strong> Entrance Exams</h2>
                        <p>SAT is a standardized test widely used for college admissions in the United States. The test was intended to assess student's readiness for college. The SAT was originally deisgned to not be aligned with the high school curriculum, but several adjustments were made for the version of the SAT introduced in 2016, the test reflects more closely what students learn in high school with the new Common Core standards.</p>
                        <p>The ACT is a standardized test used for college admissions in the United States. The ACT test covers four academic skill areas: English, mathematics, reading, and scientific reasoning. It also offers an optional direct writing test. It is accepted by all four-year colleges and universities in the United States as well as more than 225 universities outside of the U.S. The main four ACT test divs are individually scored on a scale of 1-36, and a composite score (the rounded whole number average of the four divs) is provided.</p>
                    </div>
                    
                    
                    
                    
                </div>
                <p><br/></p>
                <div className="etp">
                    <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Graduate Schools</strong> Entrance Exams</h2>
                    <p>GMAT is a computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills in written English for use in admission to a graduate management program, such as an MBA program. According to the test-ownig compant, the GMAt assesses analytical writing and problem-solving abilities, while also addressing data sufficiency, logic, and critical reasoning skills that it believes to be vital to real-world business and management success. It can be taken up to five times a year but no more than eight times total.</p>
                    <p>LSAT is a half-day standardized test administered seven times each year at designated testing centers throughout the world. The Law School Admission Council (LSAC) administers the LSAT for prospective law school candidates. It is designed to assess reading comprehension as well as logical and verbal reasoning proficiency. The test is an integral part of the law school admission process in the United States, Canada (common law programs only), the University of Melbourne, Australia, and a growing number of other countries.</p>
                    <p>GRE is a standardized test that is an admissions requirement for many graduate schools in the United States and Canada and few in other countries. The GRE is owned and administered by Educational Testing Service (ETS). The test was established in 1936 by the Carnegie Foundation for the Advancement of Teaching.
                    According to ETS, the GRE aims to measure verbal reasoning, quantitative reasoning, analytical writing, and critical thinking skills that have been acquired over a long period of learning.</p>
                </div>
                <p><br/></p>
                <div>
                    <img className="left-img" src="https://images.unsplash.com/photo-1547567667-1aa64e6f58dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV4YW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    <div className="right-etp">
                    <h2 style={{color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>International</strong> Application Exams</h2>
                        <h3>TOEFL</h3>
                        <p>TOEFL is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by more than 11,000 universities and other institutions in over 150 countries. TOEFL is a trademark of the Educational Testing Service (ETS), a private non-profit organization, which designs and administers the tests. ETS issues official score reports which are sent independently to instiutions and are valid for two years following the test</p>
                        <h3>IELTS</h3>
                        <p>IELTS is an international standardized test of English language proficiency for non-native English language speakers. An IELTS result or Test Report Form is issued to all test takers with a score from "band 1" ("non-user") to "band 9" ("expert user") and each institution sets a different threshold. </p>
                    </div>
                </div>
                
            </div>
            <div className="consultation">
                    <Consultation lang={'en'}/>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default EliteTestPrep