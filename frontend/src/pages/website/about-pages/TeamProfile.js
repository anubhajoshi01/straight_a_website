import { useParams } from "react-router-dom"

function TeamProfile(){

    const {id} = useParams()

    var infoDict = {}

    infoDict['laura-m'] = {name:'Laura M', title:'Education Consultant', content:"Laura graduated with her Ph.D. in English Literature from St. John’s University. She also holds a Master of Education in Secondary and Professional Education; a Master of Arts in English Literature; and a Bachelor of Arts in French, with a certificate in Children's Literature. Upon the conferral of her doctorate, Laura successfully pursued an alt-ac career in the governmental sector. Laura has been successfully helped many students on their way to applying for colleges and received great praises from her students. In her free time, Laura enjoys movie marathons, baking, and searching for the best bacon cheeseburger on the eastern seaboard." ,
    img: 'https://static.wixstatic.com/media/660eee_f2aa7652f1704ebfbe5f7f0f49c73148~mv2.png/v1/fill/w_686,h_634,al_c,lg_1,q_90,enc_auto/Laura%20pic.png'}

    infoDict['alan-g'] = {name:'Alan G', title:'Education Consultant', content:"Alan graduated from Cornell University with his B.S and the University of Pennsylvania for his M.S. Ed. Over the past 5 years, he has served as a college consultant for Chinese students (both domestic and international), assisting them through the college application and admissions process. He considers himself a career educator, a master facilitator, and a champion for young people.  Alan lives in Manhattan with my wife and in my spare time enjoys reading, playing basketball, and am working on writing a book, which will be a memoir on my life and all of the influential people who’ve helped me along the way.",
    img: "https://static.wixstatic.com/media/660eee_4851ac85c2044723b3a29c958cab1c3d~mv2.jpg/v1/fill/w_280,h_259,al_c,lg_1,q_80,enc_auto/Garcia_prof%20headshot.jpg"}
    
    infoDict['christina-l'] = {name:'Christina L', title:'Education Consultant', content:"During the past eight years, Christina has assisted over 250 students with their school applications. She cares about each student and cherishes every moment they resonate with each other. Being a good audient with her independent thinking and acute insight to discover others' merits, she always finds others' unique talents or personalities. To accompany and witness a student's growth, especially mentally, is what she wants to do in the education field, which leads her to a more meaningful and fulfilling life.", img:'https://static.wixstatic.com/media/660eee_5d98aaecb7a148c0ba4a881d98802e34~mv2.png/v1/fill/w_416,h_384,al_c,lg_1,q_85,enc_auto/Christina%20pic%20(2).png'}

    infoDict['darrian-h'] = {name:'Darrian H', title:'Essay Writer', content:"Darrian graduate from New York University and he is a candidate in the creative writing program.  He is the author of the crime drama novel Nothing But Entertainment.  Darrian has excellent writing skills and is currently teaching undergraduate writing courses at New York University.  His excellent essay writing skills helped students navigate their way through the college application process, eventually winning offers from the top universities and numerous accolades from students.", img:'https://static.wixstatic.com/media/660eee_4bb054c404ef4783a9be017e3305db42~mv2.png/v1/fill/w_629,h_581,al_c,q_90,enc_auto/WeChat%20Screenshot_20211203145932.png'}

    

}

export default TeamProfile