import FormResponseCard from "../../components/FormResponseCard"

function ViewForms() {
    console.log('in view forms')
    return (
        <div>
            <FormResponseCard timestamp={'00/00/0000 00:00'} studentName={'John Doe'} parentName={'Jane Doe'} phone={'000-000-0000'} email={'email@gmail.com'} school={'School A'} 
            grade={'00'} comments={'hujiwh hueiwl hui huwql nms,a hfju; qi; hjk hjkdl huiql ueil djkal hghjfkgrf hjk;fjkd.h jvkf,owptig uipew uifld hvjkfpwout ihfjuil huigtp whugi pwhvui uhwg'} resolved={false}/>
        </div>
    )
}

export default ViewForms