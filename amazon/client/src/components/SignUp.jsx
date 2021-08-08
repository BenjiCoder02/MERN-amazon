import React from "react"
import "./component_styles/Login.css"

function SignUp(){
    return (
        <div className="signup">
        <h2>Sign-Up</h2>
        <form>
            <label for="FirstName">First Name
                <input type="text" />
            </label>
            <label for="LastName">Last Name
                <input type="text" />
            </label>
            <label for="email">E-mail address
                <input type="text" />
            </label>
            <label for="password">Password
                <input type="password" />
            </label>
            <label for="confirm">Confirm Password
                <input type="password" />
            </label>
            <button type="submit">Register</button>
            
            <div className="sign-up">
                
                <a href="/login">Already have an Amazon account?</a>
            </div>
        </form>
    </div>
    )
}

export default SignUp