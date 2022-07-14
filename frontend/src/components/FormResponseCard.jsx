import React from 'react'
import { useState } from 'react'
import './FormResponseCard.css'
import { useDispatch } from 'react-redux'
import { deleteForm } from '../features/forms/formSlice'
const FormResponseCard = (form) => {
   // {timestamp, studentName, parentName, phone, email, school, grade, comments, resolved}
    const dispatch = useDispatch()
    const [containerColour, setContainerColour] = useState('white') 

    const checkboxChange = () => {
        if(containerColour === 'white'){
            setContainerColour('gray')
        }
        else{
            setContainerColour('white')
        }
        console.log('changed')
    }

    

  return (
    <div className='form-card-container' style={{backgroundColor:containerColour}}>
        <div className='form-content'>
        <ul className='form-horizontal-ul'>
            <li>
                <div className='right-side'>
                <div>
                    
                       <p> <b>timestamp:</b> {form.timestamps}</p>
                        <p> <b>Student:</b> {form.studentName} <b>Parent:</b> {form.parentName}</p>
                        <p> <b>Email:</b> {form.email} <b>Phone:</b> {form.phone} </p>
                        <p> <b>School: </b> {form.school} <b>Grade: </b> {form.grade}</p>
                
                        <ul className='form-horizontal-ul' style={{alignContent:'flex-start'}}>
                            <li>
                                <ul className='form-horizontal-ul'>
                                    <li>
                                        <label htmlFor="resolved" style={{fontSize:'60%'}}> Mark Resolved </label>
                                        <input type='checkbox' defaultChecked={form.resolved} id='resolved' onChange={checkboxChange}/>
                                    </li>
                                    <li>
                                        <div onClick={() => {
                                            dispatch(deleteForm(form.id))
                                        }}>
                                            Delete
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                
                

                </div>
                </div>
            </li>
            <li>
                <div className='left-side'>
                <ul className='form-vertical-ul'>
                    <li>
                        <b>Comments:</b>
                    </li>
                    <li>
                        <p> {form.comments} </p>
                    </li>
                </ul>
                </div>
            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default FormResponseCard