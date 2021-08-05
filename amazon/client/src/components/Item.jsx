import React from 'react'
import "./component_styles/Item.css"

function Item(props){
    {/* receiving props from parent and rendering as an item*/}
    return (
        <div className="item">
            <a href="#">
                <img src={props.imgSrc} alt="item" />
           </a>
             <div className="description">
                <h4>$ {props.price}</h4>
                <h5>{props.name}</h5>
            </div>
        </div>
    )
}

export default Item