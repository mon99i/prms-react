import React from "react";

const MapTest = () => {
    const fruits = ['apple', 'banana', 'orange'];

    return(
        <div>
            <h2>과일</h2>
            <ul>
                {
                    fruits.map((fruit, index)=>(
                    <li key={index}>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MapTest;