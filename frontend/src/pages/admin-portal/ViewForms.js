import FormResponseCard from "../../components/FormResponseCard"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getForms, reset } from '../../features/forms/formSlice'


function ViewForms() {
    //console.log('in view forms')

    const dispatch = useDispatch()
    const [displayList, setDisplayList] = useState([])
    const [displayResolved, setDisplayResolved] = useState([])
    const { forms, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.forms
    )

    useEffect(() => {
       // console.log('in use effect')
        dispatch(getForms())

        if (isError) {
            console.log(message)
        }

        if(isSuccess){
        


            let resolvedForms = []
            for (let i = 0; i < forms.length; i++) {
                if (forms[i].resolved === true) {
                    resolvedForms.push(forms[i])
                }
            }
           
        }


    }, [forms, isError, isSuccess, message, dispatch])


    // <div onClick = {() => {
    //     displayResolved.map((item) => {
    //         <li>
    //         <FormResponseCard timestamp={""} studentName={item.name} parentName={item.parentName}
    //         phone={item.phone} email={item.email} school={item.school} id={item._id} />
    //         </li> 
    //     })}}>
    //     toggle
    // </div>

    return (
            forms.length > 0 ?

            forms.map((item) => (
            <li>
                <FormResponseCard timestamp={item.createdAt} studentName={item.studentName} parentName={item.parentName}
                    phone={item.phone} email={item.email} school={item.school} id={item._id} resolved={item.resolved} more={item.more}/>
            </li>
            )
            ):

            <div>
                <h1>
                There are no unresolved forms.
                </h1>
            </div>


    )



}



export default ViewForms