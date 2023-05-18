import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav id="mainNav" class="navbar fixed-top navbar-default navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">DONATETHEBLOOD</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
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
                        <Link class="nav-link" to="/donate">Donate</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/donors">Donors</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/search">Search</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/signin">Signin</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About Us</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
