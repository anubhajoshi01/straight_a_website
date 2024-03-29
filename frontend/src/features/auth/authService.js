import axios from "axios"

const port = process.env.PORT || 5001
//const API_URL = `/api/login/`
const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5001/api/login/' : '/api/login'

const loginUser = async(userData) => {
    try{
       // console.log(`user data is ${JSON.stringify(userData)}`)
        const response = await axios.post(API_URL, userData)

        //console.log(response.data)
        if(response.data){
            localStorage.setItem('user', JSON.stringify(response.data))
            var now = new Date()
            var hourLater = now.setHours(now.getHours()+1)
            //console.log(now)
            
            localStorage.setItem('setupTime', hourLater);
            //console.log(new Date(parseInt(localStorage.getItem('setupTime'))))
            //console.log(response.data)
        }
        else{
            //console.log('no response data')
        }
        return response.data
    }catch(e){
        //console.log(e)
        throw new Error('unable to log in')
    }
}

const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('setupTime')
}

const authSerivce = {
    loginUser,
    logout
}

export default authSerivce;