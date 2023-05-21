import React from 'react'
import { Link } from "react-router-dom"
export default function ErrorPage() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h1 class="text-center error">404</h1>
                    <div class="head-para">
                        <h3 class="text-center">OOPS, SORRY WE CAN'T FIND THAT PAGE!</h3>
                        <p class="text-center">Either something went wrong or that page dosent exist anymore.</p>
                    </div>

                    <Link to="/" class="btn btn-lg btn-danger center-aligned">Home</Link>
                </div>
            </div>
        </div>
    )
}
