import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const handleOnchange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("https://backend-ydhx.onrender.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userInfo.email,
                password: userInfo.password
            })
        })
        const parsedData = await response.json();
        if (response.status === 404) {
            alert("Email not registered");
            navigate("/donate");
        }
        else if (response.status === 401) {
            alert("Invalid Credentials");
        }
        else {
            localStorage.setItem("token", parsedData.jwtToken);
            localStorage.setItem("name", parsedData.name);
            localStorage.setItem("role", parsedData.role);
            navigate("/");
            window.location.reload();
        }
    }

    return (
        <>
            <div className="container-fluid red-background size">
                <div className="container my-5 ">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 form-container">
                            <h3>SignIn</h3>
                            <hr className="red-bar" />
                            <form onSubmit={handleLogin}>
                                <input type="email" name="email" className="form-control my-2" placeholder="Email" required value={userInfo.email} onChange={handleOnchange} />
                                <input type="password" name="password" placeholder="Password" required className="form-control my-2" value={userInfo.password} onChange={handleOnchange} />
                                <div className="form-group">
                                    <button className="btn btn-danger btn-lg center-aligned" type="submit" name="signin">SignIn</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
