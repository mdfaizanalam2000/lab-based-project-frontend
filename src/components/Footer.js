import React from 'react'

export default function Footer() {
    return (
        <div class="container-fluid">
            <div class="row contactus">
                <div class="col-md-6 offset-md-3">
                    <h1 class="text-center">Contact Us</h1>
                    <hr class="white-bar" />
                    <h1 class="text-center">
                        <a target="_blank" href="https://www.facebook.com/exceptionalprogrammers"><i style={{ color: "#fff" }} class="fab fa-facebook-square"></i></a>

                        <a target="_blank" href="https://www.youtube.com/exceptionalprogrammers"><i style={{ color: "#fff" }} class="fab fa-youtube-square"></i></a>
                    </h1>

                    <div class="details">
                        <p> 92 300 1234567 <i class="fa fa-phone"></i>
                            exceptionalprogrammers@gmail.com <i class="fa fa-envelope"></i>  </p>
                    </div>

                </div>
            </div>
        </div>
    )
}