import FormResponseCard from "../../components/FormResponseCard"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getForms, reset } from '../../features/forms/formSlice'


function ViewForms() {
    //console.log('in view forms')

    const dispatch = useDispatch()
    const [displayList, setDisplayList] = useState([])

    const { forms, isLoading, isError, message } = useSelector(
        (state) => state.forms
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getForms())
        console.log(forms[0])
        setDisplayList(forms)


    }, [forms, isError, message, dispatch])

   

    return (
        displayList.map((item) => (
        <li>
            <FormResponseCard timestamp={""} studentName={item.name} parentName={item.parentName}
            phone={item.phone} email={item.email} school={item.school}  />
        </li>
    ))
        
    )
}

export default ViewForms