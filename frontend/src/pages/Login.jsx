//rfce
import { useState } from 'react';


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password:'',
  })

  const {username, password} = formData
  const onChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit= (e) =>{
    e.preventDefault()
  }

  return (<>
    <section className="heading">
      <h1>
      Login
      </h1>
      <p>Please login with given account</p>
    </section>

    <section className = "form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" 
          className="form-control" 
          id="username" 
          name = 'username' 
          value = {username} 
          placeholder = 'Enter your username' 
          onChange={onChange} />
        </div>
   
        <div className="form-group">
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          password = 'password' 
          value = {password} 
          placeholder = 'Enter your password' 
          onChange={onChange} />
        </div>

        <div className="form-group">
          <button type='submit' className='btn btn-block'>
            Submit
          </button>
        </div>
      </form>
    </section>
  
  </>
    
  )
}

export default Login