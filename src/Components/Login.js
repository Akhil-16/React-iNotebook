import React from 'react'
import axios from "axios"

function Login() {
  return (
    <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}

export default Login