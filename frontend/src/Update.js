import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function Update() {
    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [category,setcategory]=useState("");
    const [company,setcompany]=useState("");
    const navigate = useNavigate();
    const params=useParams();

    useEffect(()=>{
      getdata();

    },[])

    const getdata=async()=>{
      let result=await fetch(`http://localhost:4500/products/${params.id}`);
      result=await result.json();
      setname(result.name);
      setprice(result.price);
      setcategory(result.category);
      setcompany(result.company)
      
      
    }

    const submitdata = async () => {
      if (!name || !price || !category || !company){
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
      <h1>Update Product</h1>
      <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(event) => setname(event.target.value)}
      />
      <input
      type="text"
      placeholder="Enter price"
      value={price}
      onChange={(event) => setprice(event.target.value)}
      />
      <input
      type="text"
      placeholder="Enter Category"
      value={category}
      onChange={(event) => setcategory(event.target.value)}
      />
      <input
      type="text"
      placeholder="Enter company"
      value={company}
      onChange={(event) => setcompany(event.target.value)}
      />
      <button type="button" onClick={submitdata}>
       Update Product
      </button>

      

    </div>
  )
}

export default Update