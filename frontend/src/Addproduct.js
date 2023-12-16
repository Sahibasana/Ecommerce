import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Addproduct() {
    const [name,setname]=useState("")
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("")
    const [company,setcompany]=useState("")
    const [error,seterror]=useState(false)
    const navigate = useNavigate();

    // useEffect(()=>{
    //   const auth= localStorage.getItem("user")
    //   if(auth)
    //   {
    //     navigate('/')
    //   }

    // })

  

    const submitdata = async () => {
      if (!name || !price || !category || !company){
        seterror(true);
        return false;
      }
        const userid=JSON.parse(localStorage.getItem('user'))._id
    let result = await fetch("http://localhost:4500/Addproduct",{
      method: "post",
      body: JSON.stringify({ name,price,category,userid,company}),
      headers:{ "Content-Type": "application/json"},
    });
    result = await result.json();
    // localStorage.setItem("user",JSON.stringify(result));
    if (result){
      navigate("/");
    }
  };
  return (
    <div className='signup'>
      <h1>Addproduct</h1>
      <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(event) => setname(event.target.value)}
      />
     {error && !name && <span>enter name</span> }
      <input
      type="text"
      placeholder="Enter price"
      value={price}
      onChange={(event) => setprice(event.target.value)}
      />
      {error && !price && <span>enter price</span>}
      <input
      type="text"
      placeholder="Enter Category"
      value={category}
      onChange={(event) => setcategory(event.target.value)}
      />
      {error && !category && <span>enter category</span>}
      <input
      type="text"
      placeholder="Enter company"
      value={company}
      onChange={(event) => setcompany(event.target.value)}
      />
      {error && !company && <span>enter company</span>}
      <button type="button" onClick={submitdata}>
        Add product
      </button>

      

    </div>
  )
}

export default Addproduct