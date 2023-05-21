import React from 'react'

export default function Footer() {
    return (
        <div class="container-fluid">
            <div class="row contactus">
                <div class="col-md-6 offset-md-3">
                    <h1 class="text-center">Contact Us</h1>
                    <hr class="white-bar" />
                    <h1 class="text-center">
                        <a target="_blank" rel='noreferrer' href="https://www.facebook.com"><i style={{ color: "#fff" }} class="fab fa-facebook-square mx-2"></i></a>

                        <a target="_blank" rel='noreferrer' href="https://www.youtube.com"><i style={{ color: "#fff" }} class="fab fa-youtube-square mx-2"></i></a>
                    </h1>

                    <div class="details text-center">
                        <p><i class="fa fa-phone"></i> +91-8877188983</p>
                        <p><i class="fa fa-envelope"></i> alamf015@gmail.com</p>
                        <p>Made with ❤️ by Faizan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
