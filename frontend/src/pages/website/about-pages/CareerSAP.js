import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import './CareerSAP.css'

function CareerSAP() {

    const location = useLocation()
    //console.log(location.pathname)
    const navigate = useNavigate()

    let {lang} = useParams()
    //console.log(`lang ${lang}`)


   // console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    if(lang === 'zh') {
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <div className="career-sap-page">
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="career-sap-container">
                    <h1>Careers at Straight A Prep</h1>
                    <p>Founded in 2013, Straight A Prep is one of the fastest-growing education companies in the United States. Our company now has 30 independant counselors, and offices in the United States, Canada, and China.</p>
                    <p>Our primary focus is helping students apply to U.S K-12 schools and colleges. We operate as a team, and everyone is given opportunities to advance in the organization. If you are looking for a fast-paced, excitinf, and rewarding employment opportunity, Straight A Prep is the place for you!</p>
                    <h4>Send CV to Straight A Prep Consulting Inc, 347 W 36 St, #602, NY, NY 10018 or contact us at info@straightaprep.com</h4>
                    <section>
                        <h2>Education Specialist - <b>Hiring Now</b></h2>
                        <p>This position requires at leats a Master;s degree in Education or equivalent, with at least 6 months or work experience at the same Education Spcialist position or any related occupations such as Curriculum Specialist, Academic Program Spcialist</p>
                        <ul className="career-sap-hl-ul">
                            <li>
                                <div>
                                    <h3>Position Snapshot</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Experience Required: 6 months</li>
                                        <li>Salary: $50003 + yearly</li>
                                        <li>Duration: Full time regular</li>
                                        <li>Shift: First Shift (Day)</li>
                                        <li>Hours per week: varies</li>
                                        <li>Preferred Start Date: 7/30/2022</li>
                                    </ul>
                                    <h3>Benefit Snapshot</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Multiple health plan options, including vision and dental plans for you and dependants</li>
                                        <li>Parental leave</li>
                                        <li>Pay during military service</li>
                                        <li>Paid time off - to include vacation, sickness, parental</li>
                                        <li>Education assistance for Associate and dependants</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>Job duties</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Conduct research on and keep up to date with the newest education trends and policies of K-12 education, higher/research education, international education, and related policies such as international student visa policies, financial aid policies, and visiting scholars policies</li>
                                        <li>Design the structures a d policies of various tutoring and educational support programs, covering K-12 to higher education admission and academic training</li>
                                        <li>Review, evaluate, and suggest academic tutoring and various test preparation materials and technologies, and coordinate with teachers to implement and develop teaching materials</li>
                                        <li>Design and set assessment protocols and processes to evaluate teaching outcomes; collect and analyze students' test data and admission data and generate analysis reports to better give constructive feedback to teachers and otehr admission counselors</li>
                                        <li>Improve teachers’ teaching skills and students’ academic outcomes by providing consultations, conducting training seminars, and holding internal conferences or workshops;</li>
                                        <li>Confer with parents, guardians, teachers, other counselors, or administrators to resolve students' other behavioral and academic problems.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>High School STEM tutor - <b>Hiring Now</b></h2>
                        <p>This position requires at least a Master's degree in Math or equivalent STEM major, with at least 1 year of work experience. Proficiency with basic computer software such as Word and Excel. Experience working with children and adolescents. Previous experience as a STEM teacher will be advantageous.</p>
                        <ul className="career-sap-hl-ul">
                            <li>
                                <div>
                                    <h3>Position Snapshot</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Experience Required: 6 months</li>
                                        <li>Salary: $50 + hourly</li>
                                        <li>Duration: Part Time Contract</li>
                                        <li>Shift: First Shift (Day)</li>
                                        <li>Hours per week: 40</li>
                                        <li>Preferred Start Date: 7/7/2022</li>
                                    </ul>
                                    <h3>Benefit Snapshot</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Multiple health plan options, including vision and dental plans for you and dependants</li>
                                        <li>Parental leave</li>
                                        <li>Pay during military service</li>
                                        <li>Paid time off - to include vacation, sickness, parental</li>
                                        <li>Education assistance for Associate and dependants</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>Job duties</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Developing STEM curricula.</li>
                                        <li>Planning daily lessons.</li>
                                        <li>Adopting a data-driven attitude towards measuring learner progress.</li>
                                        <li>Developing STEM learning activities and hands-on material for classes.</li>
                                        <li>Attending to individual student needs.</li>
                                        <li>Demonstrating an awareness of different student backgrounds and cultures.</li>
                                        <li>Communicating regularly with parents.</li>
                                        <li>Providing extra support to students who need it.</li>
                                        <li>Monitoring student growth to identify strengths and areas for improvement.</li>
                                        <li>Using learner data to constantly refine your curriculum.</li>
                                        <li>Providing regular feedback to students</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>Academic Writer/Editor - <b>Hiring Now</b></h2>
                        <p>This position requires at least a Bachelor Degree in Marketing, English, Journalism or related field.Familiarity with web publications. Hands-on experience with Content Management Systems (e.g. WordPress) with at least 6 month experience in related position.</p>
                        <ul className="career-sap-hl-ul">
                            <li>
                                <div>
                                    <h3>Position Snapshot</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Experience Required: 6+ months</li>
                                        <li>Salary: $45000 + yearly</li>
                                        <li>Duration: Full Time Regular</li>
                                        <li>Shift: First Shift (Day)</li>
                                        <li>Hours per week: 40</li>
                                        <li>Preferred Start Date: 8/15/2022</li>
                                    </ul>
                                    <h3>Benefit Snapshot</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Multiple health plan options, including vision and dental plans for you and dependants</li>
                                        <li>Parental leave</li>
                                        <li>Pay during military service</li>
                                        <li>Paid time off - to include vacation, sickness, parental</li>
                                        <li>Education assistance for Associate and dependants</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>Job duties</h3>
                                    <ul className="career-sap-dotted-ul">
                                        <li>Research education industry-related topics (combining online sources, interviews and studies)</li>
                                        <li>Write clear marketing copy to promote Straight A Prep products/services</li>
                                        <li>Prepare well-structured drafts using Content Management Systems</li>
                                        <li>Proofread and edit blog posts before publication</li>
                                        <li>Submit work to editors for input and approval</li>
                                        <li>Coordinate with marketing and design teams to illustrate articles</li>
                                        <li>Conduct simple keyword research and use SEO guidelines to increase web traffic</li>
                                        <li>Promote content on social media</li>
                                        <li>Identify customers’ needs and gaps in our content and recommend new topics</li>
                                        <li>Ensure all-around consistency (style, fonts, images and tone)</li>
                                        <li>Update website content as needed</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                </div>
                <Footer lang={lang}/>
            </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <div className="career-sap-page">
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="career-sap-container">
                <h1>Careers at Straight A Prep</h1>
                <p>Founded in 2013, Straight A Prep is one of the fastest-growing education companies in the United States. Our company now has 30 independant counselors, and offices in the United States, Canada, and China.</p>
                <p>Our primary focus is helping students apply to U.S K-12 schools and colleges. We operate as a team, and everyone is given opportunities to advance in the organization. If you are looking for a fast-paced, excitinf, and rewarding employment opportunity, Straight A Prep is the place for you!</p>
                <h4>Send CV to Straight A Prep Consulting Inc, 347 W 36 St, #602, NY, NY 10018 or contact us at info@straightaprep.com</h4>
                <section>
                    <h2>Education Specialist - <b>Hiring Now</b></h2>
                    <p>This position requires at leats a Master;s degree in Education or equivalent, with at least 6 months or work experience at the same Education Spcialist position or any related occupations such as Curriculum Specialist, Academic Program Spcialist</p>
                    <ul className="career-sap-hl-ul">
                        <li>
                            <div>
                                <h3>Position Snapshot</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Experience Required: 6 months</li>
                                    <li>Salary: $50003 + yearly</li>
                                    <li>Duration: Full time regular</li>
                                    <li>Shift: First Shift (Day)</li>
                                    <li>Hours per week: varies</li>
                                    <li>Preferred Start Date: 7/30/2022</li>
                                </ul>
                                <h3>Benefit Snapshot</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Multiple health plan options, including vision and dental plans for you and dependants</li>
                                    <li>Parental leave</li>
                                    <li>Pay during military service</li>
                                    <li>Paid time off - to include vacation, sickness, parental</li>
                                    <li>Education assistance for Associate and dependants</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Job duties</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Conduct research on and keep up to date with the newest education trends and policies of K-12 education, higher/research education, international education, and related policies such as international student visa policies, financial aid policies, and visiting scholars policies</li>
                                    <li>Design the structures a d policies of various tutoring and educational support programs, covering K-12 to higher education admission and academic training</li>
                                    <li>Review, evaluate, and suggest academic tutoring and various test preparation materials and technologies, and coordinate with teachers to implement and develop teaching materials</li>
                                    <li>Design and set assessment protocols and processes to evaluate teaching outcomes; collect and analyze students' test data and admission data and generate analysis reports to better give constructive feedback to teachers and otehr admission counselors</li>
                                    <li>Improve teachers’ teaching skills and students’ academic outcomes by providing consultations, conducting training seminars, and holding internal conferences or workshops;</li>
                                    <li>Confer with parents, guardians, teachers, other counselors, or administrators to resolve students' other behavioral and academic problems.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>High School STEM tutor - <b>Hiring Now</b></h2>
                    <p>This position requires at least a Master's degree in Math or equivalent STEM major, with at least 1 year of work experience. Proficiency with basic computer software such as Word and Excel. Experience working with children and adolescents. Previous experience as a STEM teacher will be advantageous.</p>
                    <ul className="career-sap-hl-ul">
                        <li>
                            <div>
                                <h3>Position Snapshot</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Experience Required: 6 months</li>
                                    <li>Salary: $50 + hourly</li>
                                    <li>Duration: Part Time Contract</li>
                                    <li>Shift: First Shift (Day)</li>
                                    <li>Hours per week: 40</li>
                                    <li>Preferred Start Date: 7/7/2022</li>
                                </ul>
                                <h3>Benefit Snapshot</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Multiple health plan options, including vision and dental plans for you and dependants</li>
                                    <li>Parental leave</li>
                                    <li>Pay during military service</li>
                                    <li>Paid time off - to include vacation, sickness, parental</li>
                                    <li>Education assistance for Associate and dependants</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Job duties</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Developing STEM curricula.</li>
                                    <li>Planning daily lessons.</li>
                                    <li>Adopting a data-driven attitude towards measuring learner progress.</li>
                                    <li>Developing STEM learning activities and hands-on material for classes.</li>
                                    <li>Attending to individual student needs.</li>
                                    <li>Demonstrating an awareness of different student backgrounds and cultures.</li>
                                    <li>Communicating regularly with parents.</li>
                                    <li>Providing extra support to students who need it.</li>
                                    <li>Monitoring student growth to identify strengths and areas for improvement.</li>
                                    <li>Using learner data to constantly refine your curriculum.</li>
                                    <li>Providing regular feedback to students</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Academic Writer/Editor - <b>Hiring Now</b></h2>
                    <p>This position requires at least a Bachelor Degree in Marketing, English, Journalism or related field.Familiarity with web publications. Hands-on experience with Content Management Systems (e.g. WordPress) with at least 6 month experience in related position.</p>
                    <ul className="career-sap-hl-ul">
                        <li>
                            <div>
                                <h3>Position Snapshot</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Experience Required: 6+ months</li>
                                    <li>Salary: $45000 + yearly</li>
                                    <li>Duration: Full Time Regular</li>
                                    <li>Shift: First Shift (Day)</li>
                                    <li>Hours per week: 40</li>
                                    <li>Preferred Start Date: 8/15/2022</li>
                                </ul>
                                <h3>Benefit Snapshot</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Multiple health plan options, including vision and dental plans for you and dependants</li>
                                    <li>Parental leave</li>
                                    <li>Pay during military service</li>
                                    <li>Paid time off - to include vacation, sickness, parental</li>
                                    <li>Education assistance for Associate and dependants</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Job duties</h3>
                                <ul className="career-sap-dotted-ul">
                                    <li>Research education industry-related topics (combining online sources, interviews and studies)</li>
                                    <li>Write clear marketing copy to promote Straight A Prep products/services</li>
                                    <li>Prepare well-structured drafts using Content Management Systems</li>
                                    <li>Proofread and edit blog posts before publication</li>
                                    <li>Submit work to editors for input and approval</li>
                                    <li>Coordinate with marketing and design teams to illustrate articles</li>
                                    <li>Conduct simple keyword research and use SEO guidelines to increase web traffic</li>
                                    <li>Promote content on social media</li>
                                    <li>Identify customers’ needs and gaps in our content and recommend new topics</li>
                                    <li>Ensure all-around consistency (style, fonts, images and tone)</li>
                                    <li>Update website content as needed</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default CareerSAP