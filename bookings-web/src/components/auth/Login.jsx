import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Login(props) {
    const currentHistory = useHistory()
    const fromReg = props.history.location.state === undefined ? 
        null :
        props.history.location.state['fromRegistration']

    const [userData, setUserData] = useState(
        {
            "email-login": null,
            "password-login": null,
        }
    );

    const handleUserData = (e) => {
        const id = e.target.id
        const newValue = e.target.value

        setUserData(prevState => ({ ...prevState, [id] : newValue }) )
    }

    const handleSubmission = async (e) => {
        e.preventDefault()

        if(userData['email-login'] && userData['password-login']){
            const submission = await fetch(`${process.env.BASE_URL}/users/login`,
                {
                  method: 'POST',
                  body: JSON.stringify({
                      email: userData['email-login'],
                      password: userData['password-login']
                  }),
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  credentials: 'include'
                }   
            )
            const response = await submission.json()
    
            if(response){
                console.log(response)
            }
        }
    }

    return (
        <div>
            {fromReg ? 'Thanks for registering!  Login Below!' : null}

            <h2>Login to Bookings.js!</h2>
            
            <section>
                <label htmlFor="email-login">Email:  </label>
                <input required type="text" id="email-login" onChange={handleUserData}/>
                <br />
                <label htmlFor="password-login">Password:  </label>
                <input required type="text" id="password-login" onChange={handleUserData}/>
                <br />
                <button onClick={handleSubmission}>SUBMIT</button>

            </section>
        </div>
    )
}

export default Login
