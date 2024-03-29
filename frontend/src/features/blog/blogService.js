import axios from 'axios'
//const dotenv = require('dotenv').config();

const port = process.env.PORT || 5001
//console.log(process.env.NODE_ENV)
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5001/api/blogs/' : `/api/blogs/`
//const API_URL = 'http://localhost:5001/api/blogs/'

//console.log(API_URL)


const createPost = async(data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try{
        //console.log(data.toString())
        const response = await axios.post(API_URL, data, config)
        return response.data
    }catch(e){
        //console.log(e)
        throw new Error('Unable to create post')
    }
}

const getPosts = async() => {
    try{
        const response = await axios.get(API_URL)
        //console.log(response.data)
        return response.data
    }catch(e){
        //console.log(e)
        throw new Error('Unable to get posts')
    }
}

const getPostById = async(id) => {
    try{
        const response = await axios.get(API_URL + id)
        return response.data
    }catch(e){
        //console.log(e)
        throw new Error('Unable to get post')
    }
}

const updatePost = async(id, data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    try{
        const response = await axios.put(API_URL + id, data, config)
        return response.data 
    }catch(e){
        //console.log(e)
        throw new Error('Unable to update')
    }
}

const deletePost = async(id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    try{
        const response = await axios.delete(API_URL + id, config)
        return response.data
    }catch(e){
        //console.log(e)
        throw new Error('Unable to delete')
    }
}

const blogService = {
    createPost, getPosts, updatePost, deletePost, getPostById
}

export default blogService