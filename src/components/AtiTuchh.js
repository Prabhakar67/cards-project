import React from "react";
import Card from "./Card";

function AtiTuchh() {
    const AtiTuchhArray = ['Prabhakar', 'Hitesh', 'Alok', 'Sumit', 'Akshay', 'Rakesh', 'Vaibhav']
    return (
        <div>
             
            <h1 className="Title">Ati Tuchh Lok</h1>
            <Card myArray = {AtiTuchhArray}/>
            
        </div>
    );
}

export default AtiTuchh;