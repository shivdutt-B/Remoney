import React from 'react'
import LoadingElement from "../Assets/loading.gif"

function Loading() {
    return (
        <div className="loading-screen-container">
            {
                <img src={LoadingElement} />
            }
            <p>Loading...</p>
        </div>
    )
}

export default Loading