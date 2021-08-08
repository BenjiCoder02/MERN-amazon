import React from "react"
import { useParams } from "react-router"
import productData from "../Data";
import "./component_styles/PurchaseItem.css"
import { Redirect, Route, Switch, BrowserRouter} from "react-router-dom"
import NotFoundPage from "./NotFoundPage";

function PurchaseItem(){
    let currentItem = [];
    let { id } = useParams();
    for (let item of productData){
        if (item.name === id){
            currentItem.push(item)
            break;
        }
       
    }

    
  
    return (
       
        <div className="purchase">
            
            <div className="details">
                <img src={currentItem[0].imgSrc} alt="item img" />
                
                <h3>{currentItem[0].name}</h3>
                <h2>${currentItem[0].price}</h2>
            </div>
            <div className="add">
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>

           
        </div>
    )
}

export default PurchaseItem