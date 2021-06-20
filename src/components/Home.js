import React, { useState } from 'react';
import ElonIronman from './../images/elon-ironman.jpg';




const Home = () => {


  return (
    <div>
     <h1 className="home-title">Elon Musk</h1> 
     <div align="center">

     <img src={ElonIronman} alt="Elon musk" width="40%" height="45%" />
     <p><i>"Si algo es lo suficientemente importante, incluso si las probabilidades están en tu contra, debes seguir intentándolo".
    </i></p>
     </div>
    
    </div>
  );
};


export default Home;
