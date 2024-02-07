import React from 'react'
import {Link} from "react-router-dom"

function SignIn() {
  return (
    <div className="sign-container">
            <div className="sign">
                <h1>Sign In</h1>
                <p>Continue with Remoney</p>
                <form action="" className="sign-form">

                    <input id="email" type="email" placeholder="Email" name="email" className="email-input" required />

                    <input id="password" type="input" placeholder="Password" name="password" className="email-input" />

                    <button type="submit" className="sign-submit-btn">Sign in</button>
                </form>
                <div className="sign-up-link">
                    Don't Have an Account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
  )
}

export default SignIn