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
        const response = await fetch("http://localhost/signin", {
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
            <div class="container-fluid red-background size">
                <div class="container my-5 ">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 form-container">
                            <h3>SignIn</h3>
                            <hr class="red-bar" />
                            <form onSubmit={handleLogin}>
                                <input type="email" name="email" class="form-control my-2" placeholder="Email" required value={userInfo.email} onChange={handleOnchange} />
                                <input type="password" name="password" placeholder="Password" required class="form-control my-2" value={userInfo.password} onChange={handleOnchange} />
                                <div class="form-group">
                                    <button class="btn btn-danger btn-lg center-aligned" type="submit" name="signin">SignIn</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
