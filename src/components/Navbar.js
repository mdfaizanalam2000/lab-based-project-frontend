import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <nav id="mainNav" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">DONATETHEBLOOD</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                </ul>

                <ul className="navbar-nav form-inline my-2 my-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/donors">Donors</Link>
                    </li>

                    {!loggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/donate">Donate</Link>
                    </li>}

                    {!loggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/signin">Signin</Link>
                    </li>}

                    {loggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">My Profile</Link>
                    </li>}

                    {loggedIn && <li className="nav-item">
                        <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                    </li>}

                </ul>
            </div>
        </nav>
    )
}
