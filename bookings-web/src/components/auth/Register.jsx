import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Register() {
    const currentHistory = useHistory();
    const [userData, setUserData] = useState(
        {
            username: null,
            email: null,
            password: null,
        }
    );

    const handleUserData = (e) => {
        const id = e.target.id
        const newValue = e.target.value

        setUserData(prevState => ({ ...prevState, [id] : newValue }) )
    }

    const handleSubmission = async (e) => {
        e.preventDefault()

        if(userData.username && userData.email && userData.password){

            const submission = await fetch(`${process.env.BASE_URL}/users/create`,
                {
                  method: 'POST',
                  body: JSON.stringify(userData),
                  headers: {
                      'Content-Type': 'application/json'
                  }
                }   
            )
            const response = await submission.json()
    
            if(response){
                currentHistory.push('/login', {fromRegistration: true})
            }
        }
    }


    return (
        <div>
            <h2>Register for Bookings.js!</h2>
            
            <section>

                <label htmlFor="username">Username:  </label>
                <input required type="text" id="username"  onChange={handleUserData}/>
                <br />
                <label htmlFor="email">Email:  </label>
                <input required type="text" id="email" onChange={handleUserData}/>
                <br />
                <label htmlFor="password">Password:  </label>
                <input required type="text" id="password" onChange={handleUserData}/>
                <br />
                <button onClick={handleSubmission}>SUBMIT</button>

            </section>
        </div>
    )
}

export default Register
