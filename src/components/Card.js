import React from "react";

const Card = () => {
    const myArray = ['Vishal', 'Sanket', 'Hitesh', 'Pandurang', 'Abhijeet', 'Alok', 'Kuldeep', 'Prabhakar','Pragati'];

    return (
        <div className="container">
            {myArray.map((element, sn) => (<div className="card"><h3>{sn + 1 + '.'} {element}</h3><p className="designation">Software Engineer</p></div>))}
        </div>
    )
}


export default Card;  