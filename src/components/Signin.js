import React from 'react'

export default function Signin() {
    return (
        <>
            <div class="container-fluid red-background size">
                <div class="container size ">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 form-container">
                            <h3>SignIn</h3>
                            <hr class="red-bar w-100" />
                            <form action="" method="post" >
                                <div class="form-group">
                                    <label for="email">Email/Phone no.</label>
                                    <input type="text" name="email_phone" class="form-control" placeholder="Email Or Phone" required />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" placeholder="Password" required class="form-control" />
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-danger btn-lg center-aligned" type="submit" name="SignIn">SignIn</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
