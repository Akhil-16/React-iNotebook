import React, { useContext, useState } from 'react'
import axios from 'axios'
import noteContext from '../Context/notes/noteContext'



const Login=()=>{
    const context=useContext(noteContext)
    const {checkLogin}=context



  async function Login(event){
    event.preventDefault()
    console.log("credentials are",credentials)
    checkLogin(credentials)

  }
  const handleOnchange=(e)=>{
   setcredentials( {...credentials,[e.target.name]:e.target.value})

  }
  const [credentials,setcredentials]=useState({email:"",password:""})
 
  return (
    <form>
    <label className='mx-3'>
      email:
      <input type="text" name="email" value={credentials.email} onChange={handleOnchange}/>
    </label>
    <label>
      password:
      <input type="password" name='password' value={credentials.password} onChange={handleOnchange}/>
    
    </label>
     <button type="submit" className="btn btn-primary mx-3" onClick={Login}>Submit</button>
  </form>
  )
}

export default Login