import { responsiveProperty } from '@mui/material/styles/cssUtils'
import axios from 'axios'

const API_URL = 'http://localhost:5001/api/forms/'

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

const updateForm = async (id,token) => {
    console.log(id)
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log('trying to update form')
        const response = await axios.put(API_URL+id, null, config)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

const getForms = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }

const formService = {
    createForm,
    deleteForm,
    updateForm,
    getForms
}

export default formService