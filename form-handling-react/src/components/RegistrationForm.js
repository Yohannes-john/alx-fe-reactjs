import React, { useState } from 'react';
import {useFormik} from "formik";

function RegistrationForm() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit   
 = (event) => {
      const formik = useFormik({});
        event.preventDefault();
        console.log(userData);
        setUserData({
            name: '',
            email: '',
            password:   
 ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}   

                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>   
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}   

                    onChange={handleChange}
                />
            </div>
            <button type="submit">Register</button>   

        </form>
    );
}

export default RegistrationForm;
