import React from "react";
import Card from "./Card";

function Contact() {
    const tuchhArray = ['Prabhakar', 'Hitesh', 'Alok', 'Sumit', 'Akshay', 'Rakesh', 'Vaibhav']
    return (
        <div>
             
            <h1 className="Title">Ati Tuchh Lok</h1>
            <Card myArray = {tuchhArray}/>
            
        </div>
    );
}

export default Contact;