import React from 'react'
import { Link } from "react-router-dom"
export default function ErrorPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center error">404</h1>
                    <div className="head-para">
                        <h3 className="text-center">OOPS, SORRY WE CAN'T FIND THAT PAGE!</h3>
                        <p className="text-center">Either something went wrong or that page dosent exist anymore.</p>
                    </div>

                    <Link to="/" className="btn btn-lg btn-danger center-aligned">Home</Link>
                </div>
            </div>
        </div>
    )
}
