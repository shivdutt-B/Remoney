import React, {createContext, useState} from "react"

export const globalContext = createContext() // Only created a context the data is not yet passed. This will be used in components using useContext hook

const GlobalContextData = (props) => {
    //All the states comes here.
    const [user, setUser] = useState()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <globalContext.Provider value={{
            user, setUser, loading, setLoading
        }}>
            {props.children}
        </globalContext.Provider>
    )
}


export default GlobalContextData // Export context data by default then wrapping the enter app.js with this.