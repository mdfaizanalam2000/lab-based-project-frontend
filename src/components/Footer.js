import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid">
            <div className="row contactus">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Contact Us</h1>
                    <hr className="white-bar" />
                    <h1 className="text-center">
                        <a target="_blank" rel='noreferrer' href="https://www.facebook.com"><i style={{ color: "#fff" }} className="fab fa-facebook-square mx-2"></i></a>

                        <a target="_blank" rel='noreferrer' href="https://www.youtube.com"><i style={{ color: "#fff" }} className="fab fa-youtube-square mx-2"></i></a>
                    </h1>

                    <div className="details text-center">
                        <p><i className="fa fa-phone"></i> +91-8877188983</p>
                        <p><i className="fa fa-envelope"></i> alamf015@gmail.com</p>
                        <p>Made with ❤️ by Faizan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
