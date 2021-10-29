import React, { useEffect, useState } from 'react';
import './Login.css';
import {  ACCESS_TOKEN } from '../../../constants';
import * as type from './../../../constants/actionType'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Alert from 'react-s-alert';
import { login } from '../../../api/user/user';
import {useDispatch} from 'react-redux'

function Login(props) {
    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm />
                <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
            </div>
        </div>
    );

}

function LoginForm() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory();


    const handleSubmit = async () => {

        const res = await login({
            email: email,
            password: password
        });
        if (res.data != null) {
            localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
            dispatch({type: type.SET_TOKEN, payload: res.data.accessToken})
            Alert.success("You're successfully logged in!");
            history.push("/");
        }
        else {
            Alert.error('Oops! Something went wrong. Please try again!');
        }
    }

    return (
        <div>
            <div className="form-item">
                <input type="email" name="email"
                    className="form-control" placeholder="Email"
                    onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-item">
                <input type="password" name="password"
                    className="form-control" placeholder="Password"
                    onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="form-item">
                <button onClick={handleSubmit} className="btn btn-block btn-primary">Login</button>
            </div>
        </div>
    );

}

export default Login
