import axios from 'axios'

const API_URL = 'http://localhost:5000/api/forms/'

const createForm = async(formData) => {
    try{
        console.log('trying createform')
        const response = await axios.post(API_URL, formData)
        console.log(response.data)
        return response.data
    }
    catch(e){
        console.log(e)
    }
}

const formService = {
    createForm
}

export default formService