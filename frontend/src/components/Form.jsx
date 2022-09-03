import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { createForm } from '../features/forms/formSlice';
import './Form.css';
import emailjs from '@emailjs/browser'

const Form = ({lang, type}) => {
    const [parentName, setParentName] = useState("");
    const [studentName, setStudentName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [grade, setGrade] = useState("")
    const [school, setSchool] = useState("")
    const [more, setMore] = useState("")
   
    const [errorMsg, setErrorMsg] = useState("")

    const dispatch = useDispatch()


    const validateEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
    
    // email blast
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_kggikeu', 'template_exwhmh5', form.current, '27KtUw9_4Sazxt3vn')
            .then((result) => {
               // console.log(result.text);
            }, (error) => {
                //console.log(error.text);
            });

            emailjs.sendForm('service_kggikeu', 'template_spoaqm7', form.current, '27KtUw9_4Sazxt3vn')
            .then((result) => {
              //  console.log(result.text);
            }, (error) => {
                //console.log(error.text);
            });
        };

    const onSubmit = (e) => {
       // console.log('submit')
            sendEmail(e);
            e.preventDefault()
            try{
                //console.log('trying..')
    
                if(studentName.length > 0 && email.length > 0 && phone.length > 0){
                    if(! validateEmail(email)){
                        setErrorMsg("Please enter a valid email address")
                        
                    }
                    else{
                        dispatch(createForm({parentName, studentName, email, phone, grade, school, more}))
                    }
                }
                else{
                    setErrorMsg("Please fill in the required fields")
                }
            }catch(e){
                //console.log(e)
                setErrorMsg(e)
            }
    
            setParentName('')
            setStudentName('')
            setEmail('')
            setPhone('')
            setGrade('')
            setSchool('')
            setMore('')
        }
      
    if(lang === 'zh') {
        return (
    
            <div style={{ width:'100%'}} className={type === 'below' ? 'form-container-zh-2' : 'form-container-zh'}>
            
            <h2 className='chinese-head'  style={{marginBottom:'30%', fontSize:'20px', textAlign:'center', width:'100%'}}>免费申请 今天开始</h2>
            <form  ref={form} onSubmit={onSubmit}>
            <ul className='inputs-vertical'>
            <li>
                <div className='in-line-form'>
                <ul className='inputs-horizontal'>
                    <li>
                        <div className='input-container'>
                    
                            <label htmlFor="parentname"> 家长姓名* </label>
                            <input type='text' style={{width:'85%'}} name='Parent Name' id='parentname' value={parentName} onChange={(e) => setParentName(e.target.value)}/> 
                        
                        </div>
                    </li>
                    <li>
                        <div className='input-container'>
                        
                            <label htmlFor='studentname'>学生姓名</label>
                            <input type='text' style={{width:'85%'}} name='Student Name' id='studentname' value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                        
                        </div>
                    </li>
                </ul>
                </div>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <div className='input-container'>
                        <li>
                            <label htmlFor="email"> 邮件地址*</label>
                            <input style={{width:'193%'}} type='email' name='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                        </li>
                    </div>
                </ul>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <div  className='input-container'>
                        <li>
                            <label htmlFor='phone'>电话*</label>
                            <input style={{width:'193%'}} type='text' name='Phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </li>
                    </div>
                </ul>
            </li>
            <li>
            <ul className='inputs-horizontal'>
                    <li>
                        <div className='input-container'>                           
                            <label htmlFor="grade"> 现在年级 </label>
                            <input type='text' style={{width:'85%'}} name='Grade' id='grade' value={grade} onChange={(e) => setGrade(e.target.value)}/> 
                        </div>
                    </li>
                    <li>
                        <div className='input-container'>
                            <label htmlFor='school'>当前学校</label>
                            <input type='text' style={{width:'85%'}} name='School' id='school' value={school} onChange={(e) => setSchool(e.target.value)}/>
                        </div>
                    </li>
                </ul>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <div className='input-container'>
                        <li>
                            <label htmlFor='more'>告诉我们更多关于学生的信息</label>
                            <textarea type="text" style={{width:'140%', height:'150px'}} name='More' id='more' value={more} onChange={(e)=> setMore(e.target.value)}></textarea>
                        </li>
                    </div>
                </ul>
            </li>
        </ul>
        <div className='error-msg'>{errorMsg}</div>
        <button  style={{alignSelf:'center'}} type='submit' className='submit-form-btn'> Submit </button>
        
            </form>
            </div>
          )
    }

  return (
    <>
        <div className='form-group'>
            
        <h2>SIGN UP FOR A FREE CONSULTATION TODAY</h2>
        <form ref={form} onSubmit={onSubmit}>
            
            <ul className='inputs-vertical'>
                <li>
                    <div className='in-line-form'>
                    <ul className='inputs-horizontal'>
                        <li>
                            <div className='input-container'>
                        
                                <label htmlFor="parentname"> Parent's Name* </label>
                                <input type='text' style={{width:'85%'}} name='Parent Name' id='parentname' value={parentName} onChange={(e) => setParentName(e.target.value)}/> 
                            
                            </div>
                        </li>
                        <li>
                            <div className='input-container'>
                            
                                <label htmlFor='studentname'>Student's Name*</label>
                                <input type='text' style={{width:'85%'}} name='Student Name' id='studentname' value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                            
                            </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li>
                    <ul className='inputs-horizontal'>
                        <div className='input-container'>
                            <li>
                                <label htmlFor="email"> Email* </label>
                                <input style={{width:'193%'}} type='email' name='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                            </li>
                        </div>
                    </ul>
                </li>
                <li>
                    <ul className='inputs-horizontal'>
                        <div  className='input-container'>
                            <li>
                                <label htmlFor='phone'>Phone*</label>
                                <input style={{width:'193%'}} type='text' name='Phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </li>
                        </div>
                    </ul>
                </li>
                <li>
                <ul className='inputs-horizontal'>
                        <li>
                            <div className='input-container'>
                                <label htmlFor="grade"> Grade </label>
                                <input type='text' style={{width:'85%'}} name='Grade' id='grade' value={grade} onChange={(e) => setGrade(e.target.value)}/> 
                            </div>
                        </li>
                        <li>
                            <div className='input-container'>
                                <label htmlFor='school'>School</label>
                                <input type='text' style={{width:'85%'}} name='School' id='school' value={school} onChange={(e) => setSchool(e.target.value)}/>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className='inputs-horizontal'>
                        <div className='input-container'>
                            <li>
                                <label htmlFor='more'>Tell us More</label>
                                <textarea type="text" style={{width:'100%', height:'170px'}} name='More' id='more' value={more} onChange={(e)=> setMore(e.target.value)}></textarea>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
            <div className='error-msg'>{errorMsg}</div>
            <button type='submit' className='submit-form-btn'> Submit </button>
            
        </form>
        </div>
    </>
  )
}


export default Form