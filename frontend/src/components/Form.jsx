import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { createForm } from '../features/forms/formSlice';
import './Form.css'

const Form = () => {
    const [parentName, setParentName] = useState("");
    const [studentName, setStudentName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [grade, setGrade] = useState("")
    const [school, setSchool] = useState("")
    const [more, setMore] = useState("")
    const [showError, setShowError] = useState(false)

    const dispatch = useDispatch()

    const onSubmit = (e) => {

        e.preventDefault()
        try{
            console.log('trying..')
            if(studentName.length > 0 && email.length > 0 && phone.length > 0){
                setShowError(false)
                dispatch(createForm({parentName, studentName, email, phone, grade, school, more}))
            }
            else{
                setShowError(true);
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
    <section className='form-group'>
    <h1>SIGN UP FOR A FREE CONSULTATION TODAY</h1>
    <form onSubmit={onSubmit}>
        <ul className='inputs-vertical'>
            <li>
                <ul className='inputs-horizontal'>
                    <div className='input-container'>
                        <li>
                            <label htmlFor="parentname"> Parent's Name </label>
                            <input type='text' name='Parent Name' id='parentname' value={parentName} onChange={(e) => setParentName(e.target.value)}/> 
                        </li>
                    </div>
                    <div  className='inputs-container'>
                        <li>
                            <label htmlFor='studentname'>Student's Name</label>
                            <input type='text' name='Student Name' id='studentname' value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                        </li>
                    </div>
                </ul>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <div className='input-container'>
                        <li>
                            <label htmlFor="email"> Email </label>
                            <input type='email' name='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                        </li>
                    </div>
                    <div  className='inputs-container'>
                        <li>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' name='Phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </li>
                    </div>
                </ul>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <div className='input-container'>
                        <li>
                            <label htmlFor="grade"> Grade </label>
                            <input type='text' name='Grade' id='grade' value={grade} onChange={(e) => setGrade(e.target.value)}/> 
                        </li>
                    </div>
                    <div  className='inputs-container'>
                        <li>
                            <label htmlFor='school'>School</label>
                            <input type='text' name='School' id='school' value={school} onChange={(e) => setSchool(e.target.value)}/>
                        </li>
                    </div>
                </ul>
            </li>
            <li>
                <ul className='inputs-horizontal'>
                    <div className='input-container'>
                        <li>
                            <label htmlFor='more'>Tell us More</label>
                            <input style={{width:'240%'}} type='text' name='More' id='more' value={more} onChange={(e)=> setMore(e.target.value)}/>
                        </li>
                    </div>
                </ul>
            </li>
        </ul>
        <div className='error-msg'>{showError ? "Please fill in all the required fields" : ""}</div>
        <button type='submit' className='submit-form-btn'> Submit </button>
    </form>
</section>
    
  )
}

export default Form