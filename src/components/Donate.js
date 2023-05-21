import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Donate() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        bloodGroup: "",
        gender: "",
        age: "",
        email: "",
        phone: "",
        city: "",
        role: "",
        password: "",
        cpassword: ""
    })

    const handleOnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        if (userData.password !== userData.cpassword) {
            alert("Passwords are not matching")
        }
        else {
            const response = await fetch("http://localhost/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            if (response.status === 409) {
                alert("Email already registered, Please login to continue");
                navigate("/signin");
            }
            else if (response.status === 201) {
                alert("Email registered, Please login to continue");
                navigate("/signin");
            }
            else {
                alert("Some error occured");
            }
        }
    }

    return (
        <>
            <div class="container-fluid red-background">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h1 class="text-center">Donate</h1>
                        <hr class="white-bar" />
                    </div>
                </div>
            </div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6 offset-md-3 form-container">
                        <h3>SignUp</h3>
                        <hr class="red-bar" />
                        <form class="form-group" onSubmit={handleSignup} method="post">
                            <div class="form-group">
                                <input type="text" name="name" id="name" placeholder="Full Name" required pattern="[A-Za-z/\s]+" title="Only lower and upper case and space" class="form-control" onChange={handleOnChange} value={userData.name} />
                            </div>
                            <div class="form-group">
                                <select class="form-control demo-default" id="bloodGroup" name="bloodGroup" required onChange={handleOnChange} value={userData.bloodGroup}>
                                    <option value="">Select Your Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <select class="form-control demo-default" id="gender" name="gender" required onChange={handleOnChange} value={userData.gender}>
                                    <option value="">Select Your Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder='Age' class="form-control" onChange={handleOnChange} name='age' value={userData.age} />
                            </div>
                            <div class="form-group">
                                <input type="text" name="email" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Please write correct email" class="form-control" onChange={handleOnChange} value={userData.email} />
                            </div>
                            <div class="form-group">
                                <input type="number" name="phone" value={userData.phone} placeholder="+91**********" class="form-control" required pattern="^\d{11}$" title="11 numeric characters only" maxlength="11" onChange={handleOnChange} />
                            </div>
                            <div class="form-group">
                                <input type="text" name='city' placeholder='City' class="form-control" onChange={handleOnChange} value={userData.city} />
                            </div>
                            <div class="form-group">
                                <select class="form-control demo-default" id="role" name="role" required onChange={handleOnChange} value={userData.role}>
                                    <option value="">Select Your Role</option>
                                    <option value="1">Admin</option>
                                    <option value="2">User</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" value={userData.password} placeholder="Password" class="form-control" required pattern="{6,}" onChange={handleOnChange} />
                            </div>
                            <div class="form-group">
                                <input type="password" name="cpassword" value={userData.cpassword} placeholder="Confirm Password" class="form-control" required pattern="{6,}" onChange={handleOnChange} />
                            </div>

                            <div class="form-group">
                                <button id="submit" name="submit" type="submit" class="btn btn-lg btn-danger center-aligned" style={{ marginTop: "20px" }}>SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}