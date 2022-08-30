import FormResponseCard from "../../components/FormResponseCard"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getForms, reset } from '../../features/forms/formSlice'
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";


function ViewForms() {
    //console.log('in view forms')

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [displayList, setDisplayList] = useState([])
    const [displayResolved, setDisplayResolved] = useState([])
    const { forms, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.forms
    )

    const {user} = useSelector((state) => state.auth)
    const [fetched, setFetched] = useState()

    useEffect(() => {
       // console.log('in use effect')

       if(!user){
        navigate('/login')
       }
        dispatch(getForms())

        if (isError) {
            console.log(message)
        }

        return() => {
            dispatch(reset())
        }


    }, [user, isError, message, dispatch])


    // <div onClick = {() => {
    //     displayResolved.map((item) => {
    //         <li>
    //         <FormResponseCard timestamp={""} studentName={item.name} parentName={item.parentName}
    //         phone={item.phone} email={item.email} school={item.school} id={item._id} />
    //         </li> 
    //     })}}>
    //     toggle
    // </div>

    if(isLoading) {
        return (<Spinner/>)
    }

    return (
            forms.length > 0 ?
            <div style={{width:'100%'}}>
            {
            forms.map((item) => (
            <li style={{width:'100%'}}>
                <FormResponseCard timestamp={item.createdAt} studentName={item.studentName} parentName={item.parentName}
                    phone={item.phone} email={item.email} school={item.school} id={item._id} resolved={item.resolved} more={item.more}/>
            </li>
            )
            )
}
            </div>
            :

            <div>
                <h1>
                There are no forms.
                </h1>
            </div>


    )



}



export default ViewForms