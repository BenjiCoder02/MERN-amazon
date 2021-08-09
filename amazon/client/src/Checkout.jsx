import React, { useState } from "react"
import "./components/component_styles/Checkout.css"
import Item from "./components/Item"

const Checkout = () => {
    {/*                 
        NOTE
    Replace this state variable with a redux global variable
*/}
    const [ItemCount, setItemCount] = useState(0)
    const [shipFee, setShipFee] = useState(ItemCount * 0.15)

    return (
        <div className="checkout">
            <div className="order-items">
               
            </div>
            <div className="summary">
                <h4>Order Summary</h4>
                <div>
                    <p>Items ({ItemCount}): <h5>{ItemCount}</h5></p>
                    <p>Shipping & handling: <h5>$ {(shipFee)}</h5></p>
                    <hr />
                    <p><p className="total">Order total:</p> <h5 className="total">$ {ItemCount + shipFee}</h5></p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Checkout