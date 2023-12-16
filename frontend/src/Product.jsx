import React from "react"
import Card from "./Card";
import "./App.css"

function Product() {
    const caption =[
        {
            img:"white.jpeg",
            details: "white",
            price:"$4.5"
        },
        {
            img: "oranges.jpeg",
            details:"Orange",
            price:"$7.5"

        },
        {
            img: "th.jpeg",
            details:"black",
            price:"$6.5"
        },

        {
            img: "the.jpeg",
            details:"bule",
            price:"$9"
        },
        {
            img: "th (1).jpeg",
            details:"white1",
            price:"$8.5"
        },
    ];
  return (
    <div id="mm">
        {caption.map((items,key) => (
            <Card
            // img={items.img}
            details={items.details}
            price={items.price }
            key={key}
            
            />

        ))}

    </div>
  );
}

export default Product;