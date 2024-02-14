import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { globalContext } from '../Context/GlobalContext'
import Loading from './Loading'

function Navbar() {
    const globalContextItems = useContext(globalContext)
    const [searchCrossIcon, setSearchCrossIcon] = useState(<i class="fi fi-rr-search"></i>)
    const [searchValue, setSearchValue] = useState('')

    function changeSearchIcon(element) {
        setSearchValue(element.target.value)
        // if (element.target.value.length == 0) {
        //     setSearchCrossIcon(<i class="fi fi-rr-search"></i>)
        // }
        // else {
        // setSearchCrossIcon(<i class="fi fi-br-x nav-bar-cross-icon"></i>)
        // setSearchCrossIcon(< span class="material-symbols-outlined" >close</span >)
        // }
    }

    async function fetchUser() {

        const checkUser = globalContextItems.user

        if (checkUser) {
            console.log('USER ALREADY PRESENT')
        }
        else {
            globalContextItems.setLoading(true)
            const token = await sessionStorage.getItem('token');

            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: token })
            }

            const response = await fetch('http://localhost:8000/user/getuser', options)
            const parsedResponse = await response.json()
            console.log('here', parsedResponse)
            globalContextItems.setUser(parsedResponse.data)
            await sessionStorage.setItem('token', parsedResponse.token)
            globalContextItems.setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <>
            <div className="nav-bar-container">

                <div className="nav-bar-logo-container">
                    <Link to="/">
                        Remoney
                    </Link>
                </div>
                <div className="nav-bar-search-bar-container">
                    <i class="fi fi-rr-search"></i>
                    <input type="text" value={searchValue} placeholder="say it here" onChange={(element) => { changeSearchIcon(element) }}></input>
                    <span class="material-symbols-outlined" onClick={() => {setSearchValue("")}}>close</span>
                </div>
                {
                    globalContextItems.user ?
                        <div className="nav-bar-links-container nav-bar-user-logo">
                            <div className="circle-it">
                                <Link to="/profile" >
                                    {
                                        globalContextItems.user.userName[0]
                                    }
                                </Link>
                            </div>
                        </div>
                        :
                        <div className="nav-bar-links-container">
                            <ul className="nav-bar-links-list">
                                <li>
                                    <Link to="/signin" >Sign In</Link>
                                </li>
                                <li>
                                    <Link to="/signup" >Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                }
            </div>

        </>
    )
}

export default Navbar