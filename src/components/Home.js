import React, { useEffect, useState } from 'react'
import binoculars from "../images/binoculars.png"
import target from "../images/target.png"
import goal from "../images/goal.png"
import { Link } from 'react-router-dom'
export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            setLoggedIn(false);
        }
        else {
            setLoggedIn(true);
        }
    }, [])
    return (
        <>
            <div class="container-fluid header-img d-flex flex-column justify-content-center">
                <div class="header">
                    {loggedIn ? <h1 class="text-center">Hello and welcome {localStorage.getItem("name")}</h1> : ""}
                    <h1 class="text-center">Donate the blood, Save the life</h1>
                    <p class="text-center">Donate the blood to help others.</p>
                    <p class="text-center">We are committed to ease the process of blood donation</p>
                </div>
            </div>

            <div class="container-fluid red-background">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center" style={{ color: "white", fontWeight: "700", padding: "10px 0 0" }}>Donate The Blood</h1>
                        <hr class="white-bar" />
                        <p class="text-center pera-text">
                            We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.

                            We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                        </p>
                        <Link to="/donate" class="btn btn-default btn-lg text-center center-aligned">Become a Life Saver!</Link>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h3 class="text-center red">Our Vission</h3>
                            <img src={binoculars} alt="Our Vission" class="img img-responsive" width="168" height="168" />
                            <p class="text-center">
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <h3 class="text-center red">Our Goal</h3>
                            <img src={target} alt="Our Vission" class="img img-responsive" width="168" height="168" />
                            <p class="text-center">
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <h3 class="text-center red">Our Mission</h3>
                            <img src={goal} alt="Our Vission" class="img img-responsive" width="168" height="168" />
                            <p class="text-center">
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}