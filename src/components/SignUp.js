import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className="sign-container">
            <div className="sign">
                <h1>Sign Up</h1>
                <p>Welcome with Remoney</p>
                <form action="" className="sign-form">

                    <input id="email" type="email" placeholder="Email" name="email" className="email-input" required />

                    <input id="password" type="input" placeholder="Password" name="password" className="email-input" />

                    <button type="submit" className="sign-submit-btn">Sign in</button>
                </form>
                <div className="sign-up-link">
                    Already Have an Account? <Link to="/signin">Sign in</Link>
                </div>
            </div>
        </div>
  )
}

export default SignUp