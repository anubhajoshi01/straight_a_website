import React from 'react'
import { useState } from 'react'
import './FormResponseCard.css'

const FormResponseCard = ({timestamp, studentName, parentName, phone, email, school, grade, comments, resolved}) => {

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

    const onDeleteForm = () => {

    }

  return (
    <div className='form-card-container' style={{backgroundColor:containerColour}}>
        <div className='form-content'>
        <ul className='form-horizontal-ul'>
            <li>
                <div className='right-side'>
                <div>
                    
                       <p> <b>timestamp:</b> {timestamp}</p>
                        <p> <b>Student:</b> {studentName} <b>Parent:</b> {parentName}</p>
                        <p> <b>Email:</b> {email} <b>Phone:</b> {phone} </p>
                        <p> <b>School: </b> {school} <b>Grade: </b> {grade}</p>
                
                        <ul className='form-horizontal-ul' style={{alignContent:'flex-start'}}>
                            <li>
                                <ul className='form-horizontal-ul'>
                                    <li>
                                        <label htmlFor="resolved" style={{fontSize:'60%'}}> Mark Resolved </label>
                                        <input type='checkbox' defaultChecked={resolved} id='resolved' onChange={checkboxChange}/>
                                    </li>
                                    <li>
                                        <div onClick={onDeleteForm}>
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
                        <p> {comments} </p>
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