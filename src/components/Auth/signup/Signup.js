import React, { useState } from 'react';
import './Signup.css';
import { Link, Redirect, useHistory } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from '../../../constants';
import googleLogo from '../../img/google-logo.png';
import fbLogo from '../../img/fb-logo.png';
import Alert from 'react-s-alert';
import { signup } from '../../../api/user/user';

function Signup(props) {
    if (props.authenticated) {
        return <Redirect
            to={{
                pathname: "/",
            }} />;
    }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-title">Signup with SpringSocial</h1>
                <SocialSignup />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <SignupForm />
                <span className="login-link">Already have an account? <Link to="/login">Login!</Link></span>
            </div>
        </div>
    );
}


function SocialSignup() {
    return (
        <div className="social-signup">
            <a className="btn-login btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google" /> Sign up with Google</a>
            <a className="btn-login btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                <img src={fbLogo} alt="Facebook" /> Sign up with Facebook</a>
        </div>
    );
}

function SignupForm() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        await signup({
            email: email,
            password: password,
            name: name
        })
            .then(response => {
                history.push("/login")
                Alert.success("You're successfully registered. Please login to continue!");
            })
            .catch(error => {
                Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    return (
        <div>
            <div className="form-item">
                <input type="text" name="name"
                    className="form-control" placeholder="Name"
                    onChange={e => setName(e.target.value)} required />
            </div>
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
                <button onClick={handleSubmit} className="btn btn-block btn-primary" >Sign Up</button>
            </div>
        </div>
    );
}

export default Signup