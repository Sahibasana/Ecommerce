import React from "react"
import "./App.css";

function Card(props) {
  return (
    <div className="card" style={{"width": "18rem"}}>
        <img src={props.img} className="kk"/>
        <div className="card-body">
            <p className="card-text">{props.details}</p>
            <div className="btn">
                <button>Add Cart</button>

            </div>
            </div>
         </div>
  );
}

export default Card;