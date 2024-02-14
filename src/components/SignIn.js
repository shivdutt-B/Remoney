//Build ins
import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"

//Context
import { globalContext } from '../Context/GlobalContext'
import Loading from './Loading'

function SignIn() {
    const globalContextItems = useContext(globalContext)
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [error, setError] = useState('')

    async function signIn(e) {
        console.log('sign')
        globalContextItems.setLoading(true)
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
        console.log('sign in', parsedResponse)
        if (parsedResponse.success == false) {
            console.log('WRONG STATUS', parsedResponse.success)
            setError(parsedResponse.reason)
            setTimeout(() => {
                setError('')
            }, 2000)
        }
        else {
            globalContextItems.setUser(parsedResponse.data)
            await sessionStorage.setItem('token', parsedResponse.token)
            navigate('/')
        }
        console.log('response', parsedResponse)
        globalContextItems.setUser(parsedResponse.data)
        globalContextItems.setLoading(false)
    }

    function handleChange(e) {
        data[e.target.name] = e.target.value
    }
    return (
        <div className="sign-container">
            {
                globalContextItems.loading ?
                    <Loading />
                    :
                    <div className="sign">
                        <h1>Sign In</h1>
                        <p>Continue with Remoney</p>
                        <form action="" className="sign-form" onSubmit={(e) => { signIn(e) }}>

                            <input id="email" type="email" placeholder="Email" name="email" className="email-input" required onChange={(e) => { handleChange(e) }} />

                            <input id="password" type="input" placeholder="Password" name="password" className="email-input" required onChange={(e) => { handleChange(e) }} />

                            <button type="submit" className="sign-submit-btn">Sign in</button>
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
                            Don't Have an Account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
            }

        </div>
    )
}

export default SignIn