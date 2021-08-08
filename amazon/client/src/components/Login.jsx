import React from 'react'
import "./component_styles/Login.css"

function Login(){
    return (
        <div className="login">
            <h2>Sign-in</h2>
            <form>
                <label for="email">E-mail address
                    <input type="text" />
                </label>
                <label for="password">Password
                    <input type="password" />
                </label>
                <label for="confirm">Confirm Password
                    <input type="password" />
                </label>
                <button type="submit">Login</button>
                
                <div className="sign-up">
                    <div>
                        <hr/>
                        <p>Not a member?</p>
                        <hr/>
                    </div>
                    <a href="/sign-up">Create an Amazon account</a>
                </div>
            </form>
        </div>
    )
}

export default Login