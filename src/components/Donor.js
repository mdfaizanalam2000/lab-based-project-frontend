import React from 'react'

export default function Donor() {
    return (
        <>
            <div class="container-fluid red-background size">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h1 class="text-center">Donors</h1>
                        <hr class="white-bar" />
                    </div>
                </div>
            </div>

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Are you delete this record?</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <form target="" method="post">
                    <br />
                    <input type="hidden" name="delId" value="" />
                    <button type="submit" name="delete" class="btn btn-danger">Yes</button>
                    <button type="button" class="btn btn-info" data-dismiss="alert">
                        <span aria-hidden="true">Oops! No </span>
                    </button>
                </form>
            </div>

            <br />
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Message</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="container" style={{ padding: "60px 0" }}>
                <div class="row data">
                </div>
            </div>
            <div class="loader" id="wait">
                <i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
            </div>
        </>
    )
}