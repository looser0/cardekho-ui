import React, { Component } from "react";
import { properties } from "../propertyfiles/properties";
const SignUp = () => {
    return (
        <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder={properties['first_name']} />
            </div>
            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder={properties['last_name']} />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder={properties['enter_email']} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder={properties['enter_password']} />
            </div>
            <button type="submit" className="btn btn-primary btn-block">{properties['signup']}</button>
            <p className="forgot-password text-right">
            {properties['already_registered']} <a href="#">{properties['signin']}?</a>
            </p>
        </form>
    );
}
export default SignUp;