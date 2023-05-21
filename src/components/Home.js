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
                    <h2 class="text-center">Donate the blood, Save the life!</h2>
                    <p class="text-center">Donate your blood to help others.</p>
                    <p class="text-center">We are committed to ease the process of blood donation.</p>
                </div>
            </div>

            <div class="container-fluid red-background">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center" style={{ color: "white", fontWeight: "700", padding: "10px 0 0" }}>Donate The Blood</h1>
                        <hr class="white-bar" />
                        <p class="text-center pera-text">
                            We are a group of exceptional programmers; our aim is to promote education. If you truly believe in mankind, take your first step to donate blood. Your one small step can save one life. Also inform others about our campaign so that we can reach every single human who is in need of blood and fighting for his/her life.
                        </p>
                        <Link to="/donate" class="btn btn-default btn-lg text-center center-aligned">Become a Life Saver!</Link>
                    </div>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h3 class="text-center red">Our Vision</h3>
                            <img src={binoculars} alt="Our Vission" class="img img-responsive" width="168" height="168" />
                            <p class="text-center">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, sit labore molestias eos assumenda quia voluptatibus iste voluptas quod itaque quo rerum a dolorum sed explicabo quas vitae dignissimos? Totam, nesciunt hic deleniti modi odit minima iusto reprehenderit laudantium officiis quibusdam sed labore! Doloremque, unde excepturi consequuntur dicta molestiae odit!
                            </p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <h3 class="text-center red">Our Goal</h3>
                            <img src={target} alt="Our Vission" class="img img-responsive" width="168" height="168" />
                            <p class="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis suscipit dolorem sint sunt culpa vitae quod, accusamus quidem, iure corrupti illum. Cum nihil exercitationem eos ex totam quas ullam labore excepturi, cupiditate expedita quam eveniet tempora culpa sint quae dicta neque, possimus nostrum pariatur dolores mollitia necessitatibus sunt. Possimus.
                            </p>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <h3 class="text-center red">Our Mission</h3>
                            <img src={goal} alt="Our Vission" class="img img-responsive" width="168" height="168" />
                            <p class="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, alias maiores est possimus soluta numquam ipsam molestias delectus fugit quisquam, cum libero quibusdam nostrum. Delectus qui voluptas asperiores dolore magnam, reprehenderit rem molestias architecto ab doloremque! Beatae, atque. Fugiat laudantium aperiam cumque neque aspernatur, aut iusto consequuntur?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}