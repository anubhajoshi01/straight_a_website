//rfce
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { login, reset } from '../../features/auth/authSlice';
import './Login.css'

function Login() {
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [showError, setShowError] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
      console.log("error w login")
      setShowError(true)
    }

    if(isLoading){
      console.log('loading...')
    }

    if(isSuccess || user){
      console.log("success")
      navigate('/me')
    }

    dispatch(reset())
  }, [user, isError, isLoading, isSuccess, dispatch])


  const onSubmit= (e) =>{
    e.preventDefault()

    const loginData = {name, password}
    dispatch(login(loginData))
  }

  if(isLoading) {
    return (<Spinner/>)
  }
  return (<>

      <h1>
      Login
      </h1>
      <p>Please login with given account</p>



      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" 
          className="form-control" 
          id="username" 
          name = 'username' 
          value = {name} 
          placeholder = 'Enter your username' 
          onChange={(e) => {setName(e.target.value)}} />
        </div>
   
        <div className="form-group">
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          password = 'password' 
          value = {password} 
          placeholder = 'Enter your password' 
          onChange={(e) => {setPassword(e.target.value)}} />
        </div>

        <div className="form-group">
          <button type='submit' className='btn btn-block' onSubmit={onSubmit}>
            Submit
          </button>
        </div>

        <div>{showError ? "Invalid Credentials" : ""}</div>
      </form>

  
  </>
    
  )
}

export default Login