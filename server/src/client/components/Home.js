import React from 'react';

const Home = () => {
    return(
        <div>
            <div>Server Side Rendering POC 1</div>
            <button onClick={() => console.log("Hi! there")}>Handle Event</button>
        </div>
    ) 
}

export default Home;