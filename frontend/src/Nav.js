import React,{useEffect} from 'react'
import {Link, Navigate, useNavigate}from 'react-router-dom';
const Nav=()=>{
  const auth= localStorage.getItem("user")
  const navigate=useNavigate()
  const clearuser = () => {
    localStorage.clear();
    navigate("/signup")
  }
  
  return (
    <div className='nav-ul'>
      <div><img src="logo.jpeg" style={{"height":"40px","width":"40px"}}/> </div>
      
      <ul>
        
        {auth ? (
          <>
          {/* <li><Link className='ll' to="/">Products</Link></li> */}

          <li><Link className='ll' to="/">ProductsList</Link></li>
          
          <li><Link className='ll'to="/addproduct">Add Products</Link></li>
          <li><Link className='ll'to ="/">Update Product</Link></li>
          {/* <li><Link className='ll'to="/profile">Profile</Link></li> */}
          <li><Link className="ll" onClick={clearuser} to="/signup">
            Logout

          </Link></li>
          </>

        ) : (
          <>
          <li>
            <Link className="ll" to="/signup">
              signup

            </Link>
          </li>
          <li>
            <Link className="ll" to="/Signin">
              Signin

            </Link>
          </li>
          </>
        )}
        </ul>
        </div>


      
  )
}

export default Nav