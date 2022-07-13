import FormResponseCard from "../../components/FormResponseCard"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getForms, reset } from '../../features/forms/formSlice'


function ViewForms() {
    //console.log('in view forms')

    const dispatch = useDispatch()
    //const [displayList, setDisplayList] = useState([])

    const { forms, isLoading, isError, message } = useSelector(
        (state) => state.forms
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getForms())
        console.log(forms[0])
        //setDisplayList(forms)
        return () => {
            dispatch(reset())
        }


    }, [forms, isError, message, dispatch])

    // forms.map((item) => (
    //     <li>
    //         <FormResponseCard timestamp={""} studentName={item.name} parentName={item.parentName}
    //         phone={item.phone} email={item.email} school={item.school}  />
    //     </li>
    // ))

    return (
        /*
        <div>
            <ul>
            {
                <li>
                       <FormResponseCard timestamp={""} studentName={forms[0].studentName} parentName={forms[0].parentName} grade = {forms[0].grade} comments = {forms[0].more}
                       phone={forms[0].phone} email={forms[0].email} school={forms[0].school} />
                </li>
            }
            </ul>
        </div>
        */
        
        
        <div>
            <FormResponseCard timestamp={'00/00/0000 00:00'} studentName={'John Doe'} parentName={'Jane Doe'} phone={'000-000-0000'} email={'email@gmail.com'} school={'School A'} 
            grade={'00'} comments={'hujiwh hueiwl hui huwql nms,a hfju; qi; hjk hjkdl huiql ueil djkal hghjfkgrf hjk;fjkd.h jvkf,owptig uipew uifld hvjkfpwout ihfjuil huigtp whugi pwhvui uhwg'} resolved={false}/>
        </div>
        
    )
}

export default ViewForms