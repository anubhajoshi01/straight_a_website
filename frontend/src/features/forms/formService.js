import { responsiveProperty } from '@mui/material/styles/cssUtils'
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

const deleteForm = async (id, token) => {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log('trying to delete form')
        const response = await axios.delete(API_URL+id, config)
        return response.data

    } catch (error) {
        console.log(error)
    }
}

const formService = {
    createForm,
    deleteForm
}

export default formService