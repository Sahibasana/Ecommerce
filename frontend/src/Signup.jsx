import React,{useEffect, useState} from 'react'
import './App.css';
import {  useNavigate } from 'react-router-dom';
function Signup() {
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")
    const [error,seterror]=useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
      const auth= localStorage.getItem("user")
      if(auth)
      {
        navigate('/')
      }

    })
    const submitdata = async () => {
      if (!name || !password || !email ){
        seterror(true);
        return false;
      }
      let result = await fetch("http://localhost:4500/register",{
      method: "post",
      body: JSON.stringify({ name,password,email}),
      headers:{ "Content-Type": "application/json"},
    });
    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result));
    if (result){
      navigate("/product");
    }
  };
  return (
    <div className='signup'>
      <h1>Register</h1>
      <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(event) => setname(event.target.value)}
      />
           {error && !name && <span>enter name</span> }
      <input
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={(event) => setpassword(event.target.value)}
      />
      {error && !password && <span>enter password</span>}
      <input
      type="text"
      placeholder="Enter email"
      value={email}
      onChange={(event) => setemail(event.target.value)}
      />
      {error && !name && <span>enter email</span>}
      <button type="button" onClick={submitdata}>
        Sign U
        p
      </button>

      

    </div>
  )
}

export default Signup;