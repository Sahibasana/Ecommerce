import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function Productlist2() {
    const [products,setProducts]= useState([]);

    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:4500/products')
         result= await result.json();
         setProducts(result);
    };

    const deleteproduct = async(item)=>{
      let result = await fetch(`http://localhost:4500/products/${item}`,{method:"Delete"});
    result=await result.json();
    if(result){
        getProducts();
    }
}
     
    console.warn("Products",products)
    const searchHandle = async (event) =>{
        let key = event.target.value;
        if (key){
            let result = await fetch(`http://localhost:4500/search/${key}`);
        result = await result.json();
        if(result){
            setProducts(result)
        }
        }
        else{
            getProducts()
        }
        
    }
    
     


  return (
    <>
    <h3 style={{"textAlign":"center"}}>PRODUCT LIST</h3>
    <input 
       type="text"
       className="search-input"
       placeholder="Enter For Search"
       onChange={searchHandle}
    />
<div className="Productlist">
    <table border="1" height="200px" width="400px">
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Caregory</th>
            <th>Company</th>
            <th>Operation</th>
            
        </tr>
        {products.length>0?products.map((item,index) => {
            return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.company}</td>
                    <td><button onClick={()=>deleteproduct(item._id)}> Delete </button>
                    <button><Link style={{"textDecoration":"none"}} to={`/updateproduct/${item._id}`}>Update </Link></button>

                    </td>

                </tr>
           );
        }):<td colSpan="6">no result found</td>}



    </table>

    </div> 
    </>
     )
}

export default Productlist2