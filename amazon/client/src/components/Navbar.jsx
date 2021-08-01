import React, { useState } from 'react'
import "./component_styles/Navbar.css"
import SearchIcon from '@material-ui/icons/Search';




const Navbar = () => {
   
    return (
        <div className="navbar">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" style={{height: '35px'}} alt="amazon logo"/>
            <div className="input" >
                <input type="text" />
                <button type='submit'><SearchIcon /></button>
            </div>
            <a href="#">Hello, Sign in</a>
            <a href="#" className="returns">Returns & Orders</a>
            <a href='#' className="cart">Cart</a>
            
        </div>
    )
}

export default Navbar