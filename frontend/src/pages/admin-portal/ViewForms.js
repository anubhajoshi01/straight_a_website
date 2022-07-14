import FormResponseCard from "../../components/FormResponseCard"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getForms, reset } from '../../features/forms/formSlice'


function ViewForms() {
    //console.log('in view forms')

    const dispatch = useDispatch()
    const [displayList, setDisplayList] = useState([])
    const [displayResolved, setDisplayResolved] = useState([])
    const { forms, isLoading, isError, message } = useSelector(
        (state) => state.forms
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getForms())


        let resolvedForms = []
        for (let i = 0; i < forms.length; i++) {
            if (forms[i].resolved === true) {
                resolvedForms.push(forms[i])
            }
        }
        setDisplayList(forms)
        setDisplayResolved(resolvedForms)


    }, [forms, isError, message, dispatch])


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
            displayList.length > 0 ?

            displayList.map((item) => (
            <li>
                <FormResponseCard timestamp={item.timestamps} studentName={item.studentName} parentName={item.parentName}
                    phone={item.phone} email={item.email} school={item.school} id={item._id} />
            </li>
            )
            ):

            <div>
                There is no forms unresolved.
            </div>


    )



}



export default ViewForms