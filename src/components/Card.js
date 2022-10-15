import React from "react";

const Card = (props) => {
    // const myArray = ['Vishal', 'Sanket', 'Hitesh', 'Pandurang', 'Abhijeet', 'Alok', 'Kuldeep', 'Prabhakar','Pragati'];

    return (
        <div className="container">
            {props.myArray.map((element, sn) => (<div className="card"><h3>{sn + 1 + '.'} {element}</h3></div>))}
        </div>
    )
}


export default Card;  