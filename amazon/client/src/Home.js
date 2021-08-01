import React, { useState, useEffect } from "react"
import Item from "./components/Item"
import Carousel from "./components/Carousel";
import "./App.css"

function Home() {
    const [data, setData] = React.useState(null);
  
  /*  React.useEffect(() => {
      fetch("/home")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    */
  
    return (
      <div className="home">

         {/*<p>{!data ? "Loading..." : data}</p> */}
         <Carousel />
         <div className="item-container">
          <Item imgSrc="https://www.pngfind.com/pngs/m/129-1290136_iphone-8-plus-apple-iphone-8-plus-hd.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="https://e7.pngegg.com/pngimages/674/742/png-clipart-iphone-x-front-iphone-x.png" price="699" name="iPhone 7"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          <Item imgSrc="https://www.pngfind.com/pngs/m/129-1290136_iphone-8-plus-apple-iphone-8-plus-hd.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="https://e7.pngegg.com/pngimages/674/742/png-clipart-iphone-x-front-iphone-x.png" price="699" name="iPhone 7"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          <Item imgSrc="https://www.pngfind.com/pngs/m/129-1290136_iphone-8-plus-apple-iphone-8-plus-hd.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="https://e7.pngegg.com/pngimages/674/742/png-clipart-iphone-x-front-iphone-x.png" price="699" name="iPhone 7"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
          <Item imgSrc="https://www.pngfind.com/pngs/m/129-1290136_iphone-8-plus-apple-iphone-8-plus-hd.png" price="699" name="iPhone 7"/>
          <Item imgSrc="http://pngimg.com/uploads/frisbee/frisbee_PNG63.png" price="6.99" name="Frisbee"/>
          <Item imgSrc="https://e7.pngegg.com/pngimages/674/742/png-clipart-iphone-x-front-iphone-x.png" price="699" name="iPhone 7"/>
          <Item imgSrc="https://cdn.vox-cdn.com/thumbor/Vgy3FfpWvBD32CYZrcNq6itGqnw=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/20034840/ishMfuW.png" price="1999" name="PS5"/>
         
         </div>
      
        
  
      </div>
    );
  }
  
  export default Home;

