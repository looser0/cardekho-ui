import React, { Component ,useState,useEffect} from "react";
import { properties } from "../propertyfiles/properties";
import axios from "axios";

const Login = () => {

   const [state,setState] = useState({});
   
    const handleSubmit = (event)=>{
        if(event) event.preventDefault();
       
        axios.post("http://ramakrishna:8082/login", state).then(res => {
            alert(123)
            console.log(res);
            console.log(res.data);
        });
    }

    const handleInputChange = (event)=>{
        const target = event && event.target || {};
        const name = target.name || '';
        const value = target.value || '';
        
        setState(prevState =>{
            return({
                ...prevState,
                [name]:value
            });
        });
    }

    return (
        <form> 
            <h3>Sign In</h3>
            <div className="form-group">
                <label>{properties['email']}</label>
                <input type="email" className="form-control" value={state['email'] || ''} onChange={(event)=>handleInputChange(event)} name="email" id="email" placeholder={properties['enter_email']} />
            </div>
            <div className="form-group">
                <label>{properties['password']}</label>
                <input type="password" className="form-control" value={state['password'] || ''} onChange={(event)=>handleInputChange(event)} name="password" id="password"  placeholder={properties['enter_password']} />
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">{properties['remember_me']}</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={(event)=>handleSubmit(event)}>{properties['submit']}</button>
            <p className="forgot-password text-right">
            {properties['forgot']} <a href="#">{properties['password']}?</a>
            </p>
        </form>
    );
}
export default Login;