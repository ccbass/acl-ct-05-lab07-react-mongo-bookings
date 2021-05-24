import React from 'react'
import { useHistory } from "react-router-dom";

function Login() {
    const currentHistory = useHistory()

    function moveHistory() {
        currentHistory.push('/test')
    }

    return (
        <div>
            <button onClick={moveHistory} type="button">hello</button>
        </div>
    )
}

export default Login
