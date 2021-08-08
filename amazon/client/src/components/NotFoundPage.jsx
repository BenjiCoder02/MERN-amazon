import React from 'react'
import "./component_styles/NotFoundPage.css"

function NotFoundPage(){
    return (
        <div className="error-page">
            <h1>404 Error</h1>
            <h2>Oops! Looks like the page you are looking for does not exist.</h2>
            <h2>Please go back <a href="/"> Home</a></h2>
        </div>
    )
}

export default NotFoundPage