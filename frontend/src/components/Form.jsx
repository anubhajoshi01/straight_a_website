import React, {useState} from 'react'
import './Form.css'

const Form = () => {
    const [parentName, setParentName] = useState("");
    const [studentName, setStudentName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [grade, setGrade] = useState("")
    const [school, setSchool] = useState("")
    const [more, setMore] = useState("")

    const onSubmit = () => {}

  return (
    <section className='form-group'>
        <h1>SIGN UP FOR A FREE CONSULTATION TODAY</h1>
        <form onSubmit={onSubmit}>
            <ul className='form-vertical'>
                <ul className='form-horizontal'>
                    <li>
                    <ul className='form-vertical'>
                        <h6> Parent Name</h6>
                        <input className='form-in' type='text' name='Parent Name' id='parentname' value={parentName} onChange={(e) => setParentName(e.target.value)}/>
                    </ul>
                    </li>
                    <li>
                    <ul className='form-vertical'>
                        <h6>Student Name</h6>
                        <input type='text' name='Student Name' id='studentname' value={studentName} onChange={(e) => setStudentName(e.target.value)}/>
                    </ul>
                    </li>
                </ul>
                <ul className='form-horizontal'>
                <label htmlFor='email'>Email</label>
                <input type='text' name='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='Phone' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </ul>
                <ul className='form-horizontal'>
                <label htmlFor='grade'>Grade</label>
                <input type='text' name='Grade' id='grade' value={grade} onChange={(e) => setGrade(e.target.value)}/>
                <label htmlFor='grade'>School</label>
                <input type='text' name='School' id='school' value={school} onChange={(e) => setSchool(e.target.value)}/>
                </ul>
                <ul className='form-horizontal'>
                <label htmlFor='more'>Tell us More</label>
                <input type='text' name='Tell us More' id='more' value={more} onChange={(e) => setMore(e.target.value)}/>
                </ul>
                <ul>
                <button type='sumbit'>Submit</button>
                </ul>
               
            </ul>
        </form>
    </section>
    
  )
}

export default Form