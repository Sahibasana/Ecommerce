import Nav from "./Nav";
import  "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Footer from "./Footer";
import Signin from "./Signin";
// import Product from "./Product";
import Addproduct from './Addproduct';
import PrivateComponent from "./PrivateComponent";
import Productlist2 from "./Productlist2";
import Update from "./Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Footer/>
        <Routes>
          <Route element={<PrivateComponent/>}>
          {/* <Route path="/" element={<Product/>} /> */}

          <Route path="/" element={<Productlist2/>} />
          <Route path="/addproduct" element={<Addproduct/>} />
          <Route path="/updateproduct/:id" element={<Update/>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/logout" element={<h1>logout</h1>} />
          </Route>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Signin" element={<Signin/>} />
        
        </Routes>
      </BrowserRouter>
    </div>

















  );
}

export default App;