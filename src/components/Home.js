import React from 'react';
import Card from './Card';

function Home() {
    const AtiShreshthArray = ['Siddhesh Saheb', 'Yogesh Saheb', 'Aditya Saheb', 'Nikhil Saheb']
    return (
        <div> 
                <h1 className="Title">Ati Shreshth Lok</h1>
                <Card myArray = {AtiShreshthArray}/>

        </div>
    );
}

export default Home;