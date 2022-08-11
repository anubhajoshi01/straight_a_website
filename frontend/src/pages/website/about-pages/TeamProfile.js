import { useParams } from "react-router-dom"
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './TeamProfile.css'

import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function TeamProfile(){

    const {id, lang} = useParams()

    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()

    console.log(`lang ${lang}`)


    console.log(lang)

    useEffect(() => {
      if(lang == null) {
        navigate('en')
        
      }
    }, [])

    var infoDict = {}

    infoDict['laura-m'] = {name:'Laura M', title:'Education Consultant', content:"Laura graduated with her Ph.D. in English Literature from St. John’s University. She also holds a Master of Education in Secondary and Professional Education; a Master of Arts in English Literature; and a Bachelor of Arts in French, with a certificate in Children's Literature. Upon the conferral of her doctorate, Laura successfully pursued an alt-ac career in the governmental sector. Laura has been successfully helped many students on their way to applying for colleges and received great praises from her students. In her free time, Laura enjoys movie marathons, baking, and searching for the best bacon cheeseburger on the eastern seaboard." ,
    img: 'https://static.wixstatic.com/media/660eee_f2aa7652f1704ebfbe5f7f0f49c73148~mv2.png/v1/fill/w_686,h_634,al_c,lg_1,q_90,enc_auto/Laura%20pic.png'}

    infoDict['alan-g'] = {name:'Alan G', title:'Education Consultant', content:"Alan graduated from Cornell University with his B.S and the University of Pennsylvania for his M.S. Ed. Over the past 5 years, he has served as a college consultant for Chinese students (both domestic and international), assisting them through the college application and admissions process. He considers himself a career educator, a master facilitator, and a champion for young people.  Alan lives in Manhattan with my wife and in my spare time enjoys reading, playing basketball, and am working on writing a book, which will be a memoir on my life and all of the influential people who’ve helped me along the way.",
    img: "https://static.wixstatic.com/media/660eee_4851ac85c2044723b3a29c958cab1c3d~mv2.jpg/v1/crop/x_0,y_0,w_200,h_199/fill/w_280,h_279,al_c,lg_1,q_80,enc_auto/Garcia_prof%20headshot.jpg"}
    infoDict['christina-l'] = {name:'Christina L', title:'Education Consultant', content:"During the past eight years, Christina has assisted over 250 students with their school applications. She cares about each student and cherishes every moment they resonate with each other. Being a good audient with her independent thinking and acute insight to discover others' merits, she always finds others' unique talents or personalities. To accompany and witness a student's growth, especially mentally, is what she wants to do in the education field, which leads her to a more meaningful and fulfilling life.", img:'https://static.wixstatic.com/media/660eee_5d98aaecb7a148c0ba4a881d98802e34~mv2.png/v1/fill/w_416,h_384,al_c,lg_1,q_85,enc_auto/Christina%20pic%20(2).png'}

    infoDict['darrian-h'] = {name:'Darrian H', title:'Essay Writer', content:"Darrian graduate from New York University and he is a candidate in the creative writing program.  He is the author of the crime drama novel Nothing But Entertainment.  Darrian has excellent writing skills and is currently teaching undergraduate writing courses at New York University.  His excellent essay writing skills helped students navigate their way through the college application process, eventually winning offers from the top universities and numerous accolades from students.", img:'https://static.wixstatic.com/media/660eee_4bb054c404ef4783a9be017e3305db42~mv2.png/v1/fill/w_629,h_581,al_c,q_90,enc_auto/WeChat%20Screenshot_20211203145932.png'}

    var infoDictZh = {}

    infoDictZh['laura-m'] = {name:'Laura M', title:'留学顾问', content:"Laura毕业于圣约翰大学，获得英语文学博士学位。 她还拥有职业教育硕士学位; 英国文学硕士; 法语文学学士学位，并获得儿童文学证书。 在被授予博士学位后，劳拉成功地在政府部门就职。 劳拉已经成功地帮助了很多学生申请大学，并得到了学生们的好评。 在她的空闲时间，劳拉喜欢看马拉松电影，烘焙，寻找东海岸最好的培根芝士汉堡。" ,
    img: 'https://static.wixstatic.com/media/660eee_f2aa7652f1704ebfbe5f7f0f49c73148~mv2.png/v1/fill/w_686,h_634,al_c,lg_1,q_90,enc_auto/Laura%20pic.png'}

    infoDictZh['alan-g'] = {name:'Alan G', title:'留学顾问', content:"Alan本科毕业于康奈尔大学(Cornell University)，获得学士学位，研究生毕业于宾夕法尼亚大学(University of Pennsylvania)，获得硕士学位。在过去的5年里，他一直担任中国学生(包括国内和国际学生)的留学顾问，协助他们完成大学申请和入学流程。 他认为自己是一个职业教育家，一个导师，一个年轻人的捍卫者。 艾伦和妻子住在曼哈顿，他在业余时间喜欢读书、打篮球，他正在写一本书，这本书将成为他的回忆录，记录他的生活，以及所有帮助过他的有影响力的人。",
    img: "https://static.wixstatic.com/media/660eee_4851ac85c2044723b3a29c958cab1c3d~mv2.jpg/v1/crop/x_0,y_0,w_200,h_199/fill/w_280,h_279,al_c,lg_1,q_80,enc_auto/Garcia_prof%20headshot.jpg"}
    infoDict['christina-l'] = {name:'Christina L', title:'留学顾问', content:"在过去的八年里，Christina帮助超过250名学生申请美国大学。 她关心每一个学生，珍惜每一个与他们产生共鸣的时刻。 她善于倾听，有独立的思考能力和敏锐的洞察力，善于发现别人的优点，总能发现别人独特的才能或个性。 陪伴和见证一个学生的成长，特别是精神方面上的成长是她在教育领域想要做的事情，这将使她的生活更有意义和充实。", img:'https://static.wixstatic.com/media/660eee_5d98aaecb7a148c0ba4a881d98802e34~mv2.png/v1/fill/w_416,h_384,al_c,lg_1,q_85,enc_auto/Christina%20pic%20(2).png'}

    infoDictZh['darrian-h'] = {name:'Darrian H', title:'留学顾问', content:"Darrian毕业于纽约大学，创意写作项目的候选人。他出版过犯罪戏剧小说《只有娱乐》。Darrian有着出色的写作能力的技巧，现在他也在纽约大学参与本科生的写作课程授课。他出色的文书写作能力帮学生学生们在大学申请的过程中一路披荆斩棘，最终成功得到学校的认可，也得到学生的无数赞誉", img:'https://static.wixstatic.com/media/660eee_4bb054c404ef4783a9be017e3305db42~mv2.png/v1/fill/w_629,h_581,al_c,q_90,enc_auto/WeChat%20Screenshot_20211203145932.png'}

    // console.log(id)
    console.log(infoDict[id].img)

    if(lang === 'zh') {
        return(
            <>
            <Header lang={'zh'} currPath={location.pathname}/>
            
            <div className='name-container'>
                <h2>
                    {infoDictZh[id].name}
                </h2>
            </div>
            <div className='dec'>
                <h>
                    {infoDictZh[id].title}
                </h>
    
            </div>
            
            <div className='picture-content-container'>
                <img className='img' src={infoDictZh[id].img}/>
                <div className='content-container'>
                    <p>
                        {infoDictZh[id].content}
                    </p>
    
                </div>
    
            </div>
    
    
            <Footer lang={lang}/>
    
    
    
    
    
            </>
    
        )
    }


    return(
        <>
        <Header lang={'en'} currPath={location.pathname}/>
        
        <div className='name-container'>
            <h2>
                {infoDict[id].name}
            </h2>
        </div>
        <div className='dec'>
            <h>
                {infoDict[id].title}
            </h>

        </div>
        
        <div className='picture-content-container'>
            <img className='img' src={infoDict[id].img}/>
            <div className='content-container'>
                <p>
                    {infoDict[id].content}
                </p>

            </div>

        </div>


        <Footer lang={lang}/>





        </>

    )

}

export default TeamProfile