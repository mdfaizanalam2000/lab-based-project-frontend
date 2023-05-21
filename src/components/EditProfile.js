import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EditProfile() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        gender: "",
        age: "",
        city: ""
    })

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signin");
        }
        else {
            loadDashboard();
        }
        // eslint-disable-next-line
    }, [])

    const loadDashboard = async () => {
        const response = await fetch("http://localhost/getUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "check-token": localStorage.getItem("token")
            }
        })
        const data = await response.json()
        setUserInfo(data);
    }

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        updateDatabase();
        navigate("/dashboard");
        window.location.reload();
    }

    const updateDatabase = async () => {
        await fetch("http://localhost/editUser", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "check-token": localStorage.getItem("token")
            },
            body: JSON.stringify({
                name: userInfo.name,
                email: userInfo.email,
                phone: userInfo.phone,
                bloodGroup: userInfo.bloodGroup,
                gender: userInfo.gender,
                age: userInfo.age,
                city: userInfo.city
            })
        })
    }

    return (
        <div className="edit-patron-profile">
            <div className="text-center text-danger mt-5">
                EDIT YOUR PROFILE
            </div>
            <div className="container patron-center">
                <div style={{ borderWidth: "1px" }}>
                    <div className="card-body ">
                        <form
                            style={{ marginLeft: "20px" }}
                            onSubmit={handleSubmitEdit}
                            method="patch"
                        >
                            <div className="row">
                                <div
                                    className="row container edit-patron-profile-input-rows"
                                    id="inputs"
                                    style={{ marginBottom: " 10px" }}
                                >
                                    <div className="col-12 text-end" style={{ margin: "2%" }}>
                                        <Link
                                            to=""
                                            style={{ color: "black", textDecoration: "none" }}
                                        >
                                            <i className="bi bi-pen-fill "></i>
                                        </Link>
                                    </div>

                                    <div className="col space">
                                        <label
                                            htmlFor="validationCustom01"
                                            className="form-label edit-patron-profile-input-lable"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            type="text"

                                            //onBlur={(e)=> checkName(e.target.value)}
                                            className="form-control"
                                            id="name"
                                            required
                                            pattern="[A-Za-z ]+"
                                            title="Only alphabet should be present"
                                            value={userInfo.name}
                                            onChange={onChange}
                                            name="name"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="row container edit-patron-profile-input-rows"
                                    style={{ marginBottom: "10px" }}
                                >
                                    <div className="col space">
                                        <label
                                            htmlFor="validationCustom02"
                                            className="form-label edit-patron-profile-input-lable"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"

                                            className="form-control"
                                            pattern="[1-9]{1}[0-9]{9}"
                                            id="phone"
                                            required
                                            title="10 digits should be present"
                                            value={userInfo.phone}
                                            onChange={onChange}
                                            name="phone"
                                        />
                                    </div>
                                    <div className="col space">
                                        <label
                                            htmlFor="validationCustomUsername"
                                            className="form-label edit-patron-profile-input-lable"
                                        >
                                            Email
                                        </label>
                                        <div className="input-group has-validation">
                                            <span
                                                className="input-group-text"
                                                id="inputGroupPrepend"
                                            >
                                                @
                                            </span>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                aria-describedby="inputGroupPrepend"
                                                value={userInfo.email}
                                                onChange={onChange}
                                                name="email"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="row container edit-patron-profile-input-rows"
                                    style={{ marginBottom: "10px" }}
                                >
                                    <div className="col space">
                                        <label
                                            htmlFor="validationCustom02"
                                            className="form-label edit-patron-profile-input-lable"
                                        >
                                            Age

                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="age"
                                            value={userInfo.age}
                                            onChange={onChange}
                                            name="age"
                                        />
                                    </div>
                                    <div className="col space">
                                        <label
                                            htmlFor="validationCustom02"
                                            className="form-label edit-patron-profile-input-lable"
                                        >
                                            City

                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            value={userInfo.city}
                                            onChange={onChange}
                                            name="city"
                                        />
                                    </div>

                                </div>

                                <div
                                    className="row container edit-patron-profile-input-rows"
                                    style={{ marginBottom: "10px" }}
                                >



                                </div>
                                <div className="col space">
                                    <label
                                        htmlFor="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable"
                                    >
                                        Gender

                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="gender"
                                        value={userInfo.gender}
                                        onChange={onChange}
                                        name="gender"
                                    />
                                </div>
                                <div className="col space">
                                    <label
                                        htmlFor="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable"
                                    >
                                        Blood-Group

                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="bloodGroup"
                                        value={userInfo.bloodGroup}
                                        onChange={onChange}
                                        name="bloodGroup"
                                    />
                                </div>
                                <div
                                    className="position-relative edit-patron-profile-save-changes"
                                    style={{ marginTop: "40px" }}
                                >

                                    <input
                                        className="btn btn-danger btn-new"
                                        type="submit"
                                    ></input>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}