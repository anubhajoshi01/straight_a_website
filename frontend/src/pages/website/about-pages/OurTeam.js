import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import sunny_img from '../../../res/sunny-cao-img.png'
import './OurTeam.css'
import { useEffect } from "react"
import { useParams } from "react-router-dom"

function OurTeam() {

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname)
   

    let {lang} = useParams()
    console.log(`lang ${lang}`)


    console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    const teamList = [
    {id: "laura-m", name:"Laura M.", title:"Education Consultant", img:"https://static.wixstatic.com/media/660eee_f2aa7652f1704ebfbe5f7f0f49c73148~mv2.png/v1/crop/x_0,y_23,w_574,h_548/fill/w_394,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Laura%20pic.png", hasNavigate:true},
    {id:"alan-g", name:"Alan G.", title:"Education Consultant", img:"https://static.wixstatic.com/media/660eee_4851ac85c2044723b3a29c958cab1c3d~mv2.jpg/v1/crop/x_0,y_0,w_200,h_199/fill/w_280,h_279,al_c,lg_1,q_80,enc_auto/Garcia_prof%20headshot.jpg", hasNavigate:true},
    {id:"chistina-l", name:"Christina L", title:"Education Consultant", img:"https://static.wixstatic.com/media/660eee_9f8fb24f1c50458591f97e19914bcdc2~mv2.png/v1/crop/x_0,y_50,w_370,h_350/fill/w_398,h_376,al_c,lg_1,q_85,enc_auto/Christina%20pic.png", hasNavigate:true},
    {id:'darrian-h', name:"Darrian H", title:"Essay Writer", img:'https://static.wixstatic.com/media/660eee_4bb054c404ef4783a9be017e3305db42~mv2.png/v1/crop/x_25,y_0,w_587,h_581/fill/w_398,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WeChat%20Screenshot_20211203145932.png', hasNavigate:true},
    {id:'sarah-c', name:"Sarah C", title:"Education Consultant", img:"https://static.wixstatic.com/media/660eee_a0a89b828099453a90514c9540d8b4c2~mv2.png/v1/crop/x_0,y_13,w_665,h_635/fill/w_412,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sarah.png", hasNavigate:false},
    {id:'rachel-c', name:'Rachel C', title:"Education Consultant", img:'https://static.wixstatic.com/media/660eee_1df7714effcb4158a8343afff3867aa1~mv2.png/v1/crop/x_0,y_2,w_672,h_669/fill/w_396,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rachel.png', hasNavigate:false},
    {id:'matt-r', name:'Matt R', title:"Mentor", img:"https://static.wixstatic.com/media/660eee_087d171ae4344032a9a6dd25e983710a~mv2.png/v1/crop/x_0,y_1,w_161,h_159/fill/w_225,h_223,al_c,lg_1,q_85,enc_auto/WeChat%20Image_20220610190328.png", hasNavigate:false},
    {id:'besty-b', name:'Besty B', title:'Mentor', img:"https://static.wixstatic.com/media/660eee_14b2044d34d44b83a431665a164c3a7d~mv2.png/v1/crop/x_0,y_4,w_161,h_154/fill/w_225,h_216,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903282.png", hasNavigate:false},
    {id:'sam-s', name:"Sam S", title:'Mentor', img:"https://static.wixstatic.com/media/660eee_bebd9198726742ff98a785126297a339~mv2.png/v1/crop/x_0,y_0,w_161,h_160/fill/w_225,h_224,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903281.png", hasNavigate:false},
    {id:'ali-s', name:'Ali S', title:"Mentor", img:"https://static.wixstatic.com/media/660eee_b67f90495f1a4d09ad177027fb2ce8d1~mv2.png/v1/crop/x_0,y_1,w_161,h_159/fill/w_225,h_223,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903284.png", hasNavigate:false},
    {id:'ryan-f', name:'Ryan F', title:"Mentor", img:"https://static.wixstatic.com/media/660eee_4e023013a3f64a85a84f969213a9b437~mv2.png/v1/crop/x_0,y_4,w_161,h_154/fill/w_225,h_216,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903283.png", hasNavigate:false},
    {id:'iris', name:"Iris", title:"Essay Writer", img:"https://static.wixstatic.com/media/660eee_277bdc48a8ad481daaf6b3897be8cc9f~mv2.jpg/v1/crop/x_0,y_183,w_1080,h_1075/fill/w_396,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WeChat%20Image_20220610191053.jpg", hasNavigate:false}
    ]   

    const teamListZh = [
        {id: "laura-m", name:"Laura M.", title:"留学顾问", img:"https://static.wixstatic.com/media/660eee_f2aa7652f1704ebfbe5f7f0f49c73148~mv2.png/v1/crop/x_0,y_23,w_574,h_548/fill/w_394,h_376,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Laura%20pic.png", hasNavigate:true},
        {id:"alan-g", name:"Alan G.", title:"​留学顾问", img:"https://static.wixstatic.com/media/660eee_4851ac85c2044723b3a29c958cab1c3d~mv2.jpg/v1/crop/x_0,y_0,w_200,h_199/fill/w_280,h_279,al_c,lg_1,q_80,enc_auto/Garcia_prof%20headshot.jpg", hasNavigate:true},
        {id:"chistina-l", name:"Christina L", title:"​留学顾问", img:"https://static.wixstatic.com/media/660eee_9f8fb24f1c50458591f97e19914bcdc2~mv2.png/v1/crop/x_0,y_50,w_370,h_350/fill/w_398,h_376,al_c,lg_1,q_85,enc_auto/Christina%20pic.png", hasNavigate:true},
        {id:'darrian-h', name:"Darrian H", title:"​文书顾问", img:'https://static.wixstatic.com/media/660eee_4bb054c404ef4783a9be017e3305db42~mv2.png/v1/crop/x_25,y_0,w_587,h_581/fill/w_398,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WeChat%20Screenshot_20211203145932.png', hasNavigate:true},
        {id:'sarah-c', name:"Sarah C", title:"​留学顾问", img:"https://static.wixstatic.com/media/660eee_a0a89b828099453a90514c9540d8b4c2~mv2.png/v1/crop/x_0,y_13,w_665,h_635/fill/w_412,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sarah.png", hasNavigate:false},
        {id:'rachel-c', name:'Rachel C', title:"​留学顾问", img:'https://static.wixstatic.com/media/660eee_1df7714effcb4158a8343afff3867aa1~mv2.png/v1/crop/x_0,y_2,w_672,h_669/fill/w_396,h_394,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rachel.png', hasNavigate:false},
        {id:'matt-r', name:'Matt R', title:"导师", img:"https://static.wixstatic.com/media/660eee_087d171ae4344032a9a6dd25e983710a~mv2.png/v1/crop/x_0,y_1,w_161,h_159/fill/w_225,h_223,al_c,lg_1,q_85,enc_auto/WeChat%20Image_20220610190328.png", hasNavigate:false},
        {id:'besty-b', name:'Besty B', title:"导师", img:"https://static.wixstatic.com/media/660eee_14b2044d34d44b83a431665a164c3a7d~mv2.png/v1/crop/x_0,y_4,w_161,h_154/fill/w_225,h_216,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903282.png", hasNavigate:false},
        {id:'sam-s', name:"Sam S", title:'导师', img:"https://static.wixstatic.com/media/660eee_bebd9198726742ff98a785126297a339~mv2.png/v1/crop/x_0,y_0,w_161,h_160/fill/w_225,h_224,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903281.png", hasNavigate:false},
        {id:'ali-s', name:'Ali S', title:'导师', img:"https://static.wixstatic.com/media/660eee_b67f90495f1a4d09ad177027fb2ce8d1~mv2.png/v1/crop/x_0,y_1,w_161,h_159/fill/w_225,h_223,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903284.png", hasNavigate:false},
        {id:'ryan-f', name:'Ryan F', title:'导师', img:"https://static.wixstatic.com/media/660eee_4e023013a3f64a85a84f969213a9b437~mv2.png/v1/crop/x_0,y_4,w_161,h_154/fill/w_225,h_216,al_c,lg_1,q_85,enc_auto/WeChat%20Image_202206101903283.png", hasNavigate:false},
        {id:'iris', name:"Iris", title:'​文书顾问', img:"https://static.wixstatic.com/media/660eee_277bdc48a8ad481daaf6b3897be8cc9f~mv2.jpg/v1/crop/x_0,y_183,w_1080,h_1075/fill/w_396,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WeChat%20Image_20220610191053.jpg", hasNavigate:false}
        ]

    var teamArray = new Array(Math.ceil(teamList.length/3))
    let track = 0;

    if(lang === 'en'){

        for(let i = 0; i < teamArray.length; i++){
        
            teamArray[i] = new Array(3);

            for(let j = 0; j < 3; j++){
                if(track >= teamList.length){
                    break;
                }
                teamArray[i][j] = teamList[track]
                track += 1;
            }
        }
    }
    else{
        for(let i = 0; i < teamArray.length; i++){
        
            teamArray[i] = new Array(3);

            for(let j = 0; j < 3; j++){
                if(track >= teamListZh.length){
                    break;
                }
                teamArray[i][j] = teamListZh[track]
                track += 1;
            }
        }
    }

    const onClick = (event, item) => {
        console.log(item)
        if(item.hasNavigate){
            navigate(`../our-team/${item.id}/${lang}`, {replace:true})
        }
    }

    if(lang === 'zh') {
        return (
            <>
                <Header lang={'zh'} currPath={location.pathname}/>
                <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
                <div className="our-team-container">
                    <h1>我们的团队</h1>
                    <section>
                    <ul className="our-team-hl">
                            <li>
                                <img className='sunny-img' src={sunny_img}/>
                            </li>
                            <li>
                                <div className='descr-sunny'>
                                <h5>首席学术官</h5>
                                <p>Sunny 老师研究生毕业于宾夕法尼亚大学教育系。从事留学行业8年多，她曾帮助学生斩获无数美国名校录取书。Sunny 老师一直注重申请中的细节，无论是文书写作还是学术提升，或者是与家长的沟通交流，她都无时无刻事无巨细的帮助他们，也正是这种对细节的把握帮助学生们取得了好的成绩。另一方面，Sunny老师专业的留学申请操作也是她能成功帮助学生的另一大法宝。她曾经帮助学生们申请上各种学生喜欢的专业，例如：金融、会议、市场营销、通讯工程、艺术等等。现在她的学生遍布美国的常春藤名校，无论是哈佛大学还是耶鲁大学，这都是她专业能力最好的体现</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h2>​我们优秀的团队一直为您提供支持</h2>
                        <p>Straight A Prep 扎根于美国纽约市。 我们的专业辅导员熟悉美国高等教育体系，为学生制定个性化的入学计划，陪伴学生在申请美国学校的时候共同成长。 我们的专业顾问把控整个申请过程，深入挖掘学生的亮点; 准确分析大学申请流程，与各合作院校进行高效沟通，全面帮助学生获得offer和最佳留学体验。 </p>
                    </section>
                    <section>
                        <ul>
                        {
                            teamArray.map((row) => (
                                <ul className='our-story-hl-team'>
                                    {row.map((item) => (
                                        <li key={item.id}>
                                            <div className='profile'>
                                            <ul className='our-story-hl-stack'>
                                                <img className='team-img' src={item.img}/>
                                                <ul className='our-story-vl-stack'>
                                                    <div className='descr'>
                                                        <h6>{item.name}</h6>
                                                        <h6 className='title' onClick={(e) => onClick(e, item)}>{item.title}</h6>
                                                    </div>
                                                </ul>
                                            </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ))
                        }
                        
                        </ul>
                    </section>
                </div>
                <Footer lang={lang}/>
            </>
        )
    }

    return (
        <>
            <Header lang={'en'} currPath={location.pathname}/>
            <img className='img-span' src='https://images.unsplash.com/photo-1582481725274-d63bdf929a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcHVzJTIwaG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
            <div className="our-team-container" >
                <h1 >Our Team</h1>
                <section>
                <ul className="our-team-hl">
                        <li>
                            <img className='sunny-img' src={sunny_img}/>
                        </li>
                        <li>
                            <div className='descr-sunny'>
                            <h5>M.S. Ed University of Pennsylvania</h5>
                            <p>Sunny graduated from the University of Pennsylvania. She has been engaged in college application for more than 8 years and ahs helped her students win numerous American universities' offers. Sunny always pays attention to the details in the application, whether it is essay writing, academic improvement, or communication with parents, she always helps them in every detail, and it is her mastery of details that hellps students. On the other hand, Sunny's professional skills on the application for college application is another magic for her to help students successfully. She has helped students apply for various majors they like, such as finance, computer science, marketing, communications engineering, art, and so on. Now her students are all over the Ivy League universities in the United States, whether Harvard or Yale University, which is the best manifestation of her professional ability.</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section>
                    <div className='title-div'>
                    <h2 style={{textAlign:'center', fontSize:'200%', color:'#5A5A5A'}}><b>|</b> <strong style={{color:'#56009A'}}>Our</strong> Excellent Team is Always in Support of You</h2>
                    </div>
                
                <p><br/></p>
                    <p>Straught A Prep is rooted in New York City, USA. Our expert counselors are familiar with the American higher education system, and have developed personalized admission planning for students, and accompany students to grow together in the United States. Our expert counselors control the entire application process and dig out students' highlights in-depth; Accurate analysis of university application procedure, efficient communication with each partner university, comprehensively help students get the offer and the best overseas study experience.</p>
                </section>
                <section>
                    <ul>
                    {
                        teamArray.map((row) => (
                            <ul className='our-story-hl-team'>
                                {row.map((item) => (
                                    <li key={item.id}>
                                        <div className='profile'>
                                        <ul className='our-story-hl-stack'>
                                            <img className='team-img' src={item.img}/>
                                            <ul className='our-story-vl-stack'  >
                                                <div className='descr'>
                                                    <h6>{item.name}</h6>
                                                    <h6 className='title' onClick={(e) => onClick(e, item)}>{item.title}</h6>
                                                </div>
                                            </ul>
                                        </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ))
                    }
                    
                    </ul>
                </section>
            </div>
            <Footer lang={lang}/>
        </>
    )
}

export default OurTeam