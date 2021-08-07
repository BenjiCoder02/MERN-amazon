import React from "react"
import { useParams } from "react-router"

function PurchaseItem(){
    let { id } = useParams();
    console.log({ id })
    return (
       
        <div>
            <h3>{id}</h3>
        </div>
    )
}

export default PurchaseItem