import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function UserDashboard() {
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
        const response = await fetch("https://backend-ydhx.onrender.com/getUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "check-token": localStorage.getItem("token")
            }
        })
        const data = await response.json()
        setUserInfo(data);
    }

    let [size, setSize] = useState(window.screen.width);
    window.onresize = () => {
        setSize(window.innerWidth);
    };

    return (
        <div className="dashboard-top">
            <div className="patron-profile-details">
                <h1>Your Information</h1>
                <table className="patron-detail-table">
                    <tbody>
                        {size > 996 ? (
                            <tr>
                                <td>Full Name: </td>
                                <td>
                                    <input readOnly value={userInfo.name} />
                                </td>
                            </tr>
                        ) : (
                            <>
                                <tr>
                                    <td>Full Name: </td>
                                    <td>
                                        <input readOnly contentEditable="false" value={userInfo.name} />
                                    </td>
                                </tr>
                            </>
                        )}
                        {size > 996 ? (
                            <tr>
                                <td>Email: </td>
                                <td>
                                    <input readOnly value={userInfo.email} />
                                </td>
                                <td>Phone Number: </td>
                                <td>
                                    <input readOnly value={userInfo.phone} />
                                </td>
                            </tr>
                        ) : (
                            <>
                                <tr>
                                    <td>Email: </td>
                                    <td>
                                        <input readOnly value={userInfo.email} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phone Number: </td>
                                    <td>
                                        <input readOnly value={userInfo.phone} />
                                    </td>
                                </tr>
                            </>
                        )}
                        {size > 996 ? (
                            <tr>
                                <td>Blood-Group: </td>
                                <td>
                                    <input readOnly value={userInfo.bloodGroup} />
                                </td>
                                <td>Gender: </td>
                                <td>
                                    <input readOnly value={userInfo.gender} />
                                </td>
                            </tr>
                        ) : (
                            <>
                                <tr>
                                    <td>Blood-Group: </td>
                                    <td>
                                        <input readOnly value={userInfo.bloodGroup} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gender: </td>
                                    <td>
                                        <input readOnly value={userInfo.gender} />
                                    </td>
                                </tr>
                            </>
                        )}
                        {size > 996 ? (
                            <tr>
                                <td>Age: </td>
                                <td>
                                    <input readOnly value={userInfo.age} />
                                </td>
                                <td>City: </td>
                                <td>
                                    <input readOnly value={userInfo.city} />
                                </td>
                            </tr>
                        ) : (
                            <>
                                <tr>
                                    <td>Age: </td>
                                    <td>
                                        <input readOnly value={userInfo.age} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>City: </td>
                                    <td>
                                        <input readOnly value={userInfo.city} />
                                    </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
                <div className="table-btns">
                    <Link to="/editDashboard">Edit Profie</Link>
                </div>
            </div>
        </div>
    )
}