import axios from "axios"

const API_URL = 'http://localhost:5001/api/login/'

const loginUser = async(userData) => {
    try{
        console.log(`user data is ${JSON.stringify(userData)}`)
        const response = await axios.post(API_URL, userData)
        if(response.data){
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(response.data)
        }
        else{
            console.log('no response data')
        }
        return response.data
    }catch(e){
        console.log(e)
        throw new Error('unable to log in')
    }
}

const logout = () => {
    localStorage.removeItem('user')
}

const authSerivce = {
    loginUser,
    logout
}

export default authSerivce;