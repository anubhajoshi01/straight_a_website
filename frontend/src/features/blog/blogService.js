const { axios } = require("axios")

const API_URL = 'http://localhost:5000/api/blogs/'

const createPost = async(data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try{
        const response = await axios.post(API_URL, goalData, config)
        return response.data
    }catch(e){
        console.log(e)
        throw new Error('Unable to create post')
    }
}

const getPosts = async() => {
    try{
        const response = await axios.get(API_URL, config)
        return response.data
    }catch(e){
        console.log(e)
        throw new Error('Unable to get posts')
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
        console.log(e)
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
        console.log(e)
        throw new Error('Unable to delete')
    }
}

const blogService = {
    createPost, getPosts, updatePost, deletePost
}

export default blogService