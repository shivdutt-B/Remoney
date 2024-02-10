//Build ins
import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"

//Context
import { globalContext } from '../Context/GlobalContext'

function SignIn() {
    const globalContextItems = useContext(globalContext)
    const [data, setData] = useState({})

    async function signIn(e) {
        e.preventDefault()

        // Creating options for post request using fetch.
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('http://localhost:8000/user/signin', options) // sending request with all necessary parameters.
        const parsedResponse = await response.json() // parsing request result into valid json object.
        globalContextItems.setUser(parsedResponse.data)
    }

    function handleChange(e) {
        data[e.target.name] = e.target.value
    }
    return (
        <div className="sign-container">
            <div className="sign">
                <h1>Sign In</h1>
                <p>Continue with Remoney</p>
                <form action="" className="sign-form" onSubmit={(e) => { signIn(e) }}>

                    <input id="email" type="email" placeholder="Email" name="email" className="email-input" required onChange={(e) => { handleChange(e) }} />

                    <input id="password" type="input" placeholder="Password" name="password" className="email-input" required onChange={(e) => { handleChange(e) }} />

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