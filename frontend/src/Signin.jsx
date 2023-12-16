import React,{useState,useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Signin() {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
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
      // if (email || !password || !email ){
      //   seterror(true);
      //   return false;
      // }
    let result = await fetch("http://localhost:4500/login",{
      method: "post",
      body: JSON.stringify({ email,password,}),
      headers:{ "Content-Type": "application/json"},
    });
    result = await result.json();
    console.log(result)
    if (result){
      localStorage.setItem("user",JSON.stringify(result));

      navigate("/");
    }
  };
  return (
    <div className='signup'>
      <h1>Signin</h1>
      <input
      type="text"
      placeholder="Enter email"
      value={email}
      onChange={(event) => setemail(event.target.value)}
      />
      {error && !email && <span>enter email</span>}
      <input
      type="text"
      placeholder="Enter password"
      value={password}
      onChange={(event) => setpassword(event.target.value)}
      />
      {error && !password && <span>enter password</span>}
      
      <button type="button" onClick={submitdata}> signin</button>

      </div>
  )
}

export default Signin;