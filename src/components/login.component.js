import React, { Component } from "react";
import { properties } from "../propertyfiles/properties";
const Login = () => {
    return (
        <form>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>{properties['first_name']}</label>
                <input type="email" className="form-control" placeholder={properties['enter_email']} />
            </div>
            <div className="form-group">
                <label>{properties['last_name']}</label>
                <input type="password" className="form-control" placeholder={properties['enter_password']} />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">{properties['remember_me']}</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">{properties['submit']}</button>
            <p className="forgot-password text-right">
            {properties['forgot']} <a href="#">{properties['password']}?</a>
            </p>
        </form>
    );
}
export default Login;