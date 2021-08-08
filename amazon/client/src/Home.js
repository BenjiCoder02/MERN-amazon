import React, { useState, useEffect } from "react";
import Item from "./components/Item";
import Carousel from "./components/Carousel";
import "./App.css";
import axios from 'axios';
import productData from "./Data";



function Home() {
    
  {/* 
    Home page component
    Passing props to Item component 
  */}
  
    return (
      <div className="home">

  {/* Carousel component for home page*/}
         <Carousel />
         <div className="item-container">
          
            {productData.map(data => {
              return(
              <Item imgSrc={data.imgSrc} price={data.price} name={data.name}/>
            )
            })}
            
           
         </div>
      
        
  
      </div>
    );
  }
  
  export default Home;

