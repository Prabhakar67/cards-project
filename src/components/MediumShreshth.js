import React from 'react';
import Card from './Card';

function MediumShreshth() {
    let shreshthArray = ['Sanket Sir', 'Vishal Sir', 'Pandurang Sir', 'Abhijeet Sir','Pragati Madam']
    return (
        <div>
             
            <h1 className="Title">Mediam Shreshth Lok</h1>
            <Card myArray = {shreshthArray}/>
    
        </div>
    );
}

export default MediumShreshth;