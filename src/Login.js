import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login__signInButton">Sign In</button>
                </form>

                <p>By signing-in you agree to our Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>

                <button className="login__registerButton">Create an account</button>
            </div>
        </div>
    )
}

export default Login
