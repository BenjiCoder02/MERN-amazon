import React, { useState, useEffect } from "react"
import Item from "./components/Item"
import Carousel from "./components/Carousel";
import "./App.css"

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
          <Item imgSrc="https://pngimg.com/uploads/iphone_12/iphone_12_PNG35.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="https://pngimg.com/uploads/iphone_12/iphone_12_PNG31.png" price="699" name="iPhone 7"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          <Item imgSrc="https://pngimg.com/uploads/iphone_12/iphone_12_PNG21.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="http://pngimg.com/uploads/skateboard/skateboard_PNG11748.png" price="699" name="Skateboard"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          
          <Item imgSrc="https://pngimg.com/uploads/iphone_12/iphone_12_PNG35.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="https://pngimg.com/uploads/iphone_12/iphone_12_PNG31.png" price="699" name="iPhone 7"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          <Item imgSrc="https://pngimg.com/uploads/iphone_12/iphone_12_PNG21.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="http://pngimg.com/uploads/skateboard/skateboard_PNG11748.png" price="699" name="Skateboard"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          
         </div>
      
        
  
      </div>
    );
  }
  
  export default Home;

