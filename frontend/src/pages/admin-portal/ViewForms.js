import FormResponseCard from "../../components/FormResponseCard"

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getForms, reset } from '../../features/forms/formSlice'


function ViewForms() {
    console.log('in view forms')

    const dispatch = useDispatch()

    const { forms, isLoading, isError, message } = useSelector(
    (state) => state.forms
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getForms())
    console.log(forms)
    
    return () => {
      dispatch(reset())
    }

    

  }, [forms, isError, message, dispatch])


    return (
        <div>
            <FormResponseCard timestamp={'00/00/0000 00:00'} studentName={'John Doe'} parentName={'Jane Doe'} phone={'000-000-0000'} email={'email@gmail.com'} school={'School A'} 
            grade={'00'} comments={'hujiwh hueiwl hui huwql nms,a hfju; qi; hjk hjkdl huiql ueil djkal hghjfkgrf hjk;fjkd.h jvkf,owptig uipew uifld hvjkfpwout ihfjuil huigtp whugi pwhvui uhwg'} resolved={false}/>
        </div>
    )
}

export default ViewForms