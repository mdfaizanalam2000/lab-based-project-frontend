import React from 'react'
import target from "../images/target.png"
import goal from "../images/goal.png"

export default function About() {
    return (
        <>
            <div class="container-fluid red-background size">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h1 class="text-center">About Us</h1>
                        <hr class="white-bar" />
                    </div>
                </div>
            </div>
            <div class="container-fluid size">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6"><img src={goal} alt="Our Vission" class="rounded float-left img-fluid" /></div>
                        <div class="col-md-6">
                            <h2 class="text-center">Our Vission</h2>
                            <hr class="red-bar" />
                            <p>
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                            <p>
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid white size">
                <div class="container ">
                    <div class="container">
                        <div class="row ">
                            <div class="col-md-6">
                                <h2 class="text-center">Our Goal</h2>
                                <hr class="red-bar" />
                                <p>
                                    We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                                </p>
                                <p>
                                    We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                                </p>
                            </div>
                            <div ><img src={target} alt="Our Vission" class="rounded img-fluid float-right" /></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid size">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6"><img src={goal} alt="Our Vission" class="rounded float-left img-fluid" /></div>
                        <div class="col-md-6">
                            <h2 class="text-center">Our Mission</h2>
                            <hr class="red-bar" />
                            <p>
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                            <p>
                                We are a group of exceptional programmers; our aim is to promote education. If you are a student, then contact us to secure your future. We deliver free international standard video lectures and content. We are also providing services in Web & Software Development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
