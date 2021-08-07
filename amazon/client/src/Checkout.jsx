import React, { useState } from "react"
import "./components/component_styles/Checkout.css"
import Item from "./components/Item"

const Checkout = () => {
    const [ItemCount, setItemCount] = useState(0)

    return (
        <div>
            <h2>Checkout</h2>
            <div>
                <h3>{ItemCount}</h3>
            </div>
            <Item />
        </div>
    )
}

export default Checkout