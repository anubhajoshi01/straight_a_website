import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { createForm } from '../features/forms/formSlice';
import './Form.css';
import emailjs from '@emailjs/browser'

const Form = () => {
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
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            emailjs.sendForm('service_kggikeu', 'template_spoaqm7', form.current, '27KtUw9_4Sazxt3vn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

    const onSubmit = (e) => {
            sendEmail(e);
            e.preventDefault()
            try{
                console.log('trying..')
    
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
                console.log(e)
            }
    
            setParentName('')
            setStudentName('')
            setEmail('')
            setPhone('')
            setGrade('')
            setSchool('')
            setMore('')
        }
      


  return (
    
    <div className='form-container'>
    <form  ref={form} onSubmit={onSubmit}>
        
        <ul className='inputs-vertical'>
            <li>
                <div className='in-line-form'>
                <ul className='inputs-horizontal'>
                    <li>
                        <div className='input-container'>
                    
                            <label htmlFor="parentname"> Parent's Name </label>
                            <input type='text' name='Parent Name' id='parentname' value={parentName} onChange={(e) => setParentName(e.target.value)}/> 
                        
                        </div>
                    </li>
                    <li>
                        <div className='input-container'>
                        
                            <label htmlFor='studentname'>Student's Name*</label>
                            <input type='text' name='Student Name' id='studentname' value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                        
                        </div>
                    </li>
                </ul>
                </div>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <li>
                    <div className='input-container'>
                        
                            <label htmlFor="email"> Email (*) </label>
                            <input type='email' name='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                        
                    </div>
                    </li>
                    <li>
                    <div  className='input-container'>
                    
                            <label htmlFor='phone'>Phone (*)</label>
                            <input type='tel' name='Phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        
                    </div>
                    </li>
                </ul>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <li>
                    <div className='input-container'>
                        
                            <label htmlFor="grade"> Grade </label>
                            <input type='text' name='Grade' id='grade' value={grade} onChange={(e) => setGrade(e.target.value)}/> 
                        
                    </div>
                    </li>
                    <li>
                    <div  className='input-container'>
                        
                            <label htmlFor='school'>School</label>
                            <input type='text' name='School' id='school' value={school} onChange={(e) => setSchool(e.target.value)}/>
                        
                    </div>
                    </li>
                </ul>
            </li>
            <li>
                <div className='input-container-long'>
                <label htmlFor='more'>Tell us More</label>
                <input style={{width:'100%'}} type='text' name='More' id='more' value={more} onChange={(e)=> setMore(e.target.value)}/>
                </div>
            </li>
        </ul>
        <div className='error-msg'>{errorMsg}</div>
        <button type='submit' className='submit-form-btn'> Submit </button>
        
    </form>
    </div>
  )
}


export default Form