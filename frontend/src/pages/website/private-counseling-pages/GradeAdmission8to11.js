import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import './GradeAdmission.css'

function GradeAdmission8to11(){

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

    if(lang === 'zh') {
        return (
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            <div className="grade-admissions">
            <div className="grade-admissions-container">
                <h1>8-11年级申请</h1>
                <section>
                    <ul className="grade-adm-hl">
                        <li>
                            <img src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/>
                        </li>
                        <li>
                            <div>
                                <p>我们的专业能力在选择私立/独立学校录取过程中可以帮助需要帮助的学生和家庭。我们经验丰富的留学顾问将分析您的学生档案，以确定您的学校名单，并为您的申请提供最有效的帮助。我们定制的服务可以满足学生的独特需求和目标。</p>
                                <p><br/></p>
                                <p>Straight A Prep套餐包括提供学生和家长文书协助、活动表完成指导、帮助学生获得最佳推荐信、面试准备、学校参观指导、SAT等考试准备、利用社交媒体为您带来优势以及完成申请指导，还提供对运动员和艺术家的申请支持。</p>
                                <button className="start-now-btn" onClick={() => navigate('/start-now/zh')}>开始咨询</button>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    
                    <h2>Straight A Prep 的专业服务</h2>
                    <p><br/></p>
                    <h3>背景分析</h3>
                    <p>在充分了解您的兴趣和目标后，我们会对成绩单、标准化考试成绩、课外活动和个人背景进行全面的整理和分析。</p>
                    <p><br/></p>
                    <h3>选择学校</h3>
                    <p>我们确定可能是“匹配”和“适合”的学校的初始列表。匹配是指您和您的家人最感兴趣的学校。适合是指学校如何看待您的申请。</p>
                    <p><br/></p>
                    <h3>学生文书指导</h3>
                    <p>学生文书为学生提供了一个机会，让他们突出自己的性格、独特的视角、学术兴趣和写作能力。因为每个学生都是独一无二的，我们帮助学生构思出他们最佳的文书内容，会不辞辛苦的帮助学生反复调整。</p>
                    <p><br/></p>
                    <h3>家长文书指导</h3>
                    <p>家长文书为学校提供有关申请人及其家人的见解。我们为您提供了与我们一起讨论文书问题的机会，并讨论如何最好地书写以支持您孩子的申请。我们还会审核草稿并会提出修改建议。</p>
             
                </section>
            </div>
            <section>
                <div className="gradient-img-box">
                <div className="left-rect">
                        <h3>杰森 H</h3>
                        <h3>宾夕法尼亚大学</h3>
                        <h3>2024届</h3>
                        <p><br/></p>
                        <h3>"这是一次非常私人的经历，Straight A Prep鼓励我追求自己的目标学校。如果你想知道这个过程到底有多有效，我想说的是，我完成的比我预想的要多，进入了一些我原本无法进入的学校"</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1526315060860-f05bd462eb60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                </div>
            </section>
            <div className="grade-admissions-container">
                <section>
                   
                    <div className="right-box">
                        <h3>活动表完成指南</h3>
                        <p>课外活动表的呈现方式与其列出的活动和成就一样重要。我们会建议包括哪些活动和荣誉，以及如何在简历或申请的“活动表”部分最好地展示它们。</p>
                        
                        <h3>推荐信指导</h3>
                        <p>推荐信可以进一步个性化申请人的内容。不幸的是，许多推荐信都不起眼。获得最有帮助的推荐信不仅仅是让别人书写，我们为辅导员、教师和其他推荐人的提交提供指导，以尽可能获得最强的推荐信。</p>
                     
                        <h3>​面试准备</h3>
                        <p>学校的面试机会为学生加强和确认他们的申请提供了帮助。以便为成功的面试做好准备，我们提供有关问题、有效答案以及如何提出有见地的问题的指导。我们也可以进行模拟面试来练习。</p>
                    
                        <h3>标准化考试准备</h3>
                        <p>我们提供高效的标准化考试准备计划。它包括有关如何正确有效地回答每一类问题的指导。还提供了对每个问题都提供详细解答的练习测试。</p>
                      
                        <h3>完成在线申请</h3>
                        <p>在线申请系统完成平时成绩单、考试成绩、推荐信的提交以及其它一系列复杂又耗时的过程。</p>
                       
                        <h3>校园参观</h3>
                        <p>校园参观是选择学校的重要组成部分。我们提供关于参观哪些学校、最好去的时间、要完成的具体活动以及如何评估整体体验的指导。</p>
                        <p><br/></p>
                    </div>
                    <div className="left-img-adm">
                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    </div>
                </section>
             
                <section>
                    <div className='grade-adm-title'>Straight A Prep 帮助你成就你未来</div>
                    <p><br/></p>
                    <button className="start-now-btn" onClick={() => navigate('/start-now/zh')}>开始咨询</button>
                </section>
                <section>
                        <h3>S社交媒体指导</h3>
                        <p>招生官员可以使用社交媒体审查申请人。事实上，如果使用得当，社交媒体可以成为您应用程序的主要积极补充。我们帮助您优化适当的社交媒体帐户以支持您的申请程序。</p>
                        <p><br/></p>
                        <h3>运动员招募指导</h3>
                        <p>我们提供有关如何最好地激发教练的指导，包括如何制作视频和推荐信的兴趣。</p>
                        
                </section>
                
            </div>
            <section>
                    <div className="img-text-container">
                        <img src="https://images.unsplash.com/photo-1598275930732-8df785c9db52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                        <div className="center-txt">高中学校录取书</div>
                    </div>
            </section>
            <div className="offers-list">
                <ul className="grade-adm-hl">
                    <li>
                        <div className='list-school'>
                            <h3>Philips Exeter Academy</h3>
                            <p><br/></p>
                            <h3>Lawrenceville School</h3>
                            <p><br/></p>
                            <h3>Sidwell Friends School</h3>
                            <p><br/></p>
                            <h3>The Taft School</h3>
                            <p><br/></p>
                            <h3>The Master's School</h3>
                            <p><br/></p>
                        </div>
                        
                    </li>
                    <li>
                        <div className='list-school'> 
                            <h3>The Hotchkiss School</h3>
                            <p><br/></p>
                            <h3>Choate Rosemary Hall</h3>
                            <p><br/></p>
                            <h3>The Chapin School</h3>
                            <p><br/></p>
                            <h3>Hackley School</h3>
                            <p><br/></p>
                            <h3>Newark Academy</h3>
                            <p><br/></p>
                        </div>
                       
                    </li>
                    <li>
                        <div className='list-school'> 
                            <h3>The Groton School</h3>
                            <p><br/></p>
                            <h3>Hopkins School</h3>
                            <p><br/></p>
                            <h3>Milton Academy</h3>
                            <p><br/></p>
                            <h3>Peddie School</h3>
                            <p><br/></p>
                            <h3>The Rivers School</h3>
                            <p><br/></p>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            <Footer lang={lang}/>
            </>
        )
    }
    
    return (
        <>
        <Header lang={'en'} currPath={location.pathname}/>
        <div className="grade-admissions">
        <div className="grade-admissions-container">
            <h1>8-11 Grade Admissions</h1>
            <section>
                <ul className="grade-adm-hl">
                    <li>
                        <img src="https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/>
                    </li>
                    <li>
                        <div>
                            <p>We are well-equipped to help students and families who want assistance in navigating the selective private/independent school admission process. Our experienced consultants will analyze your student profile to help finalize your school list ad provide the most effective aid to your applications. Services are customized to meet student's unique needs and goals.</p>
                            <p><br/></p>
                            <p>The preperatory school package includes assistance with both student and parent essays, activity sheet completion guidance, help to secure the best letters of reccomendation, interview preperation, school visitation guidance, SAT preparation, how to use social media to your advantage, and application completion guidance. Assistance for athletes and artists is also included as appropriate.</p>
                            <button className="start-now-btn" onClick={() => navigate('/start-now')}> Start Now </button>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                
                <h2>Straight A Prep's <b>Professional Services</b></h2>
                <p><br/></p>
                <h3>Profile Analysis</h3>
                <p>After fully understanding your interests and goal, we do a thorough review and analysis of transcripts, standardized test scores, extracurricular activities, and personal history. </p>
                <p><br/></p>
                <h3>School Search and Selection</h3>
                <p>We identify an initial list of schools that may be a good "Match" and "Fit". Match refers to schools that have the attributes that interest you and your family most. Fit refers to how schools will percieve your application.</p>
                <p><br/></p>
                <h3>Student Essay Completion Guide</h3>
                <p>Student Essay provides an opportunity for students to highlighht their character, unique perspective, academic interests, and writing ability. Because each student is unique, we help develop, revise, and edit essays that reflect their best self, without regard to the number of drafts it requires.</p>
                <p><br/></p>
                <h3>Parent Essay Completion Guide</h3>
                <p>Parent Essay provides the school with insights into the applicant and their family. We provide an opportunity for you to review essay questions with us and discuss how responses may be best tailored in support of your child's application. We also review drafts and may suggest edits.</p>
         
            </section>
        </div>
        <section>
                <div className="gradient-img-box">
                    <div className="left-rect">
                        <h3 > Jason H.</h3>
                        <h3 > University of Pennsylvania</h3>
                        <h3 > Class of 2024</h3>
                        <p><br/></p>
                        <h3>"It was a very personal experience where I was encouraged to pursue my interests. If you're wondering about how effective the process is, I would say that I accomplished more than I expected and got into schools that would have been out of my reach otherwise."</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1526315060860-f05bd462eb60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60"/>
                </div>
        </section>
        <div className="grade-admissions-container">
            <section>
               
                <div className="right-box">
                    <h3>Activity Sheet Completion Guide</h3>
                    <p>How an extra-curricular activity sheet is presented can be as important as the activities and accomplishments it lists.  We advise what activities and honors to include and how to best explain them on a resume or the "Activity Sheet" portion of an application</p>
                    
                    <h3>Letter of Reccomendation Guidance</h3>
                    <p>Letter of recommendation can further personalize an applicant. Unfortunately, many letters of recommendation are unremarkable. Obtaining the most helpful letters of recommendation involves more than just asking for them. We provide guidance on counselor, teacher, and other recommender based submissions to obtain the strongest letters possible.</p>
                 
                    <h3>Interview Preparation</h3>
                    <p>School Interviews provide an opportunity for students to strengthen and confirm their application. To prepare for successful interviews, we provide guidance on the types of questions to expect, how to formulate effective answers and how to ask insightful questions. We may conduct a mock interview to practice.</p>
                
                    <h3>Standardized Test Preparation</h3>
                    <p>We provide a highly effective standardized test preparation program. It includes guidance and explanations on how to answer every type of question correctly and efficiently. It also provides practice tests that are scored with detailed explanations offered for every question.</p>
                  
                    <h3>Application Completion Guidance</h3>
                    <p>Navigating the submission of transcripts, test scores, letters of recommendation via the Standard Application Online and other websites can be complex and time-consuming.</p>
                   
                    <h3>Campus Visit Guidance</h3>
                    <p>Campus visits can be an important part of selecting a school. We provide guidance on what schools to visit, the best time to go, specific activities to accomplish and how to evaluate the overall experience.</p>
                    <p><br/></p>
                </div>
                <div className="left-img-adm">
                    <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"/>
                </div>
            </section>
         
            <section>
                <div className='grade-adm-title'>Let Straight A Prep help you create your future in the most efficient way</div>
                <p><br/></p>
                <button className="start-now-btn" onClick={() => navigate('/start-now')}> Start Now </button>
            </section>
            <section>
                    <h3>Social Media Guidance</h3>
                    <p>Admissions officers may review applicants using social media. In fact, when used right, social media can be a major positive addition to your application. We help you optimize appropriate social media accounts to support your application</p>
                    <p><br/></p>
                    <h3>Athlete Recruitment Guidance</h3>
                    <p>We provide guidance on how best to generate coach interest including how to produce a recruitment video, and develop letters of interest.</p>
                    
            </section>
            
        </div>
        <section>
                <div className="img-text-container">
                    <img src="https://images.unsplash.com/photo-1598275930732-8df785c9db52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMGJ1aWxkaW5nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"/>
                    <div className="center-txt">High School Offers We Received in Past 3 Years</div>
                </div>
        </section>
        <div className="offers-list">
            <ul className="grade-adm-hl">
                <li>
                    <div className='list-school'>
                        <h3>Philips Exeter Academy</h3>
                        <p><br/></p>
                        <h3>Lawrenceville School</h3>
                        <p><br/></p>
                        <h3>Sidwell Friends School</h3>
                        <p><br/></p>
                        <h3>The Taft School</h3>
                        <p><br/></p>
                        <h3>The Master's School</h3>
                        <p><br/></p>
                    </div>
                    
                </li>
                <li>
                    <div className='list-school'> 
                        <h3>The Hotchkiss School</h3>
                        <p><br/></p>
                        <h3>Choate Rosemary Hall</h3>
                        <p><br/></p>
                        <h3>The Chapin School</h3>
                        <p><br/></p>
                        <h3>Hackley School</h3>
                        <p><br/></p>
                        <h3>Newark Academy</h3>
                        <p><br/></p>
                    </div>
                   
                </li>
                <li>
                    <div className='list-school'> 
                        <h3>The Groton School</h3>
                        <p><br/></p>
                        <h3>Hopkins School</h3>
                        <p><br/></p>
                        <h3>Milton Academy</h3>
                        <p><br/></p>
                        <h3>Peddie School</h3>
                        <p><br/></p>
                        <h3>The Rivers School</h3>
                        <p><br/></p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <Footer lang={lang}/>
        </>
    )
}

export default GradeAdmission8to11