import React, { useEffect, useState } from 'react'
import Donor from "./Donor"
import { useNavigate } from 'react-router-dom';

export default function Donors() {
    const navigate = useNavigate();
    let [donors, setDonors] = useState([]);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signin");
        }
        else {
            getDonors();
        }
        // eslint-disable-next-line
    }, []);

    const getDonors = async () => {
        const response = await fetch("https://backend-ydhx.onrender.com/getDonors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "check-token": localStorage.getItem("token")
            }
        })

        const parsedData = await response.json();
        setDonors(parsedData);
    }

    let [select, setSelect] = useState("all");
    const handleFilter = (e) => {
        let keyword = e.target.value;
        setSelect(keyword);
    }

    const deleteDonor = async (id) => {
        await fetch("https://backend-ydhx.onrender.com/deleteDonor", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "check-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ id })
        })
        getDonors();
    }
    return (
        <>
            <div className="container-fluid red-background size">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">Donors</h1>
                        <hr className="white-bar" />
                    </div>
                    <div className="col-md-4">
                        <select name="filter" id="filter" onChange={handleFilter}>
                            <option value="all">Filter by blood group</option>
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
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {donors.filter((item) => {
                        if (select === "all") {
                            return item.role !== 1;
                        }
                        return item.bloodGroup === select && item.role !== 1;
                    }).map((item) => {
                        return <Donor key={item._id} donor={item} deleteDonor={deleteDonor} />
                    })}
                </div>
            </div>
        </>
    )
}