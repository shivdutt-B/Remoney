import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { globalContext } from '../Context/GlobalContext'

function SignUp() {
    const globalContextItems = useContext(globalContext)
    const [error, setError] = useState('')
    const [data, setData] = useState({})

    async function signUp(e) {
        console.log('signUp', data)
        e.preventDefault()

        // Creating options for post request using fetch.
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('http://localhost:8000/user/signup', options) // sending request with all necessary parameters.
        const parsedResponse = await response.json() // parsing request result into valid json object.
        console.log('response', parsedResponse)

        if (parsedResponse.success == false) {
            console.log('WRONG STATUS', parsedResponse.success)
            setError(parsedResponse.reason)
            setTimeout(() => {
                setError('')
            }, 2000)
        }
        else {
            globalContextItems.setUser(parsedResponse.data)
        }
    }

    function handleChange(e) {
        data[e.target.name] = e.target.value
    }

    return (
        <div className="sign-container">
            <div className="sign">
                <h1>Sign Up</h1>
                <p>Welcome to Remoney</p>
                <form action="" className="sign-form" onSubmit={(e) => signUp(e)}>
                    <input id="userName" type="text" placeholder="user name" name="userName" className="username-input" onChange={(e) => { handleChange(e) }} required />

                    <input id="email" type="email" placeholder="Email" name="email" className="email-input" onChange={(e) => { handleChange(e) }} required />

                    <input id="password" type="password" placeholder="Password" name="password" className="password-input" onChange={(e) => { handleChange(e) }} required />

                    <button type="submit" className="sign-submit-btn">Sign up</button>
                </form>
                {
                    error.length > 0 ?
                        <div className="credential-error">
                            {error}
                        </div>
                        :
                        <div className="credential-error">
                            {error}
                        </div>
                }
                <div className="sign-up-link">
                    Already Have an Account? <Link to="/signin">Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp