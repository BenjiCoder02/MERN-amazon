import React, { useState } from 'react'
import "./component_styles/Navbar.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Navbar = () => {
    
   

   const [cartCount, setCartCount] = useState(0)
    return (
        <div className="navbar">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" style={{height: '35px'}} alt="amazon logo"/>
            <div className="input" >
                <input type="text" />
               
                <button type='submit'><SearchIcon /></button>
               
            </div>
            <a href="#">Hello, Sign in</a>
            <a href="#" className="returns">Returns & Orders</a>
            <a href='#' className="cart"><ShoppingCartIcon /> <p> {cartCount}</p></a>
            
        </div>
    )
}

export default Navbar