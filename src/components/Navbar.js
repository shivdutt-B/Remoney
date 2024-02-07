import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [searchCrossIcon, setSearchCrossIcon] = useState(<i class="fi fi-rr-search"></i>)
    const [searchValue, setSearchValue] = useState('')
    function changeSearchIcon(element) {
        setSearchValue(element.target.value)
        if (element.target.value.length == 0){
            setSearchCrossIcon(<i class="fi fi-rr-search"></i>)
        }
        else{
            setSearchCrossIcon(<i class="fi fi-br-x nav-bar-cross-icon"></i>)
        }
    }
  return (
    <div className="nav-bar-container">
        <div className="nav-bar-logo-container">
            <Link to="/">
                Remoney
            </Link>
        </div>
        <div className="nav-bar-search-bar-container">
            <input type="text" value={searchValue} onChange={(element) => {changeSearchIcon(element)}}></input>{searchCrossIcon}
        </div>
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
    </div>
  )
}

export default Navbar