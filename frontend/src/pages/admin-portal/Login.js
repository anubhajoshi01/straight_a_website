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
    <div className='lgcontainer'>
      <ul>
        <h1>
        Login
        </h1>
        <p>Please login with given account</p>

        <form className='lgform-container' onSubmit={onSubmit}>
            <div className='userpass'>  
              <div className="lgform-group">
                <p>Username: </p>
                <input type="text" 
                className="form-control" 
                style={{width:'85%'}}
                id="username" 
                name = 'username' 
                value = {name} 
                placeholder = 'Enter your username' 
                onChange={(e) => {setName(e.target.value)}} />
              </div>
        
              <div className="lgform-group">
                <p>Password:</p>
                <input 
                type="password" 
                className="form-control" 
                style={{width:'85%'}}
                id="password" 
                password = 'password' 
                value = {password} 
                placeholder = 'Enter your password' 
                onChange={(e) => {setPassword(e.target.value)}} />
              </div>
            </div>

          <div className='error'>{showError ? "Invalid Credentials" : ""}</div>
          
          <div className="lgform-group">
            <button type='submit' className='btn-block' onSubmit={onSubmit}>
              Submit
            </button>
          </div>

        </form>
      </ul>
    </div>
  </>
    
  )
}

export default Login