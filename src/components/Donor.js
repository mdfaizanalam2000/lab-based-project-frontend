import React from 'react'

export default function Donor(props) {
    const { _id, name, email, phone, bloodGroup, gender, age, city } = props.donor;
    return (
        <div className="col-md-4">
            <div class="card" style={{ width: "20rem" }}>
                <div class="card-body">
                    <h5 class="card-title">Donor ID:{_id.substring(0, 10)}</h5>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Blood-Group: {bloodGroup}</p>
                    <p>Gender: {gender}</p>
                    <p>Age: {age}</p>
                    <p>City: {city}</p>
                    {localStorage.getItem("role") === "1" && <i class="fa-solid fa-trash" onClick={() => props.deleteDonor(_id)}></i>}
                </div>
            </div>
        </div>
    )
}
