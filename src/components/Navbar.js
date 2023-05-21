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
        <nav id="mainNav" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">DONATETHEBLOOD</Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                </ul>

                <ul class="navbar-nav form-inline my-2 my-lg-0">

                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/donors">Donors</Link>
                    </li>

                    {!loggedIn && <li class="nav-item">
                        <Link class="nav-link" to="/donate">Donate</Link>
                    </li>}

                    {!loggedIn && <li class="nav-item">
                        <Link class="nav-link" to="/signin">Signin</Link>
                    </li>}

                    {loggedIn && <li class="nav-item">
                        <Link class="nav-link" to="/dashboard">My Profile</Link>
                    </li>}

                    {loggedIn && <li class="nav-item">
                        <Link class="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                    </li>}

                </ul>
            </div>
        </nav>
    )
}
