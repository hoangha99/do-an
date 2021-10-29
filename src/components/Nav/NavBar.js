import React, { useEffect, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { ACCESS_TOKEN } from '../../constants';
import Alert from 'react-s-alert';
import './NavBar.css';

function NavBar(props) {
    const { authenticated, setAuthenticated } = props;
    const [profile, setShowButtonProfile] = useState(false);
    const history = useHistory();
    let user = useSelector(state => state.user.token)

    useEffect(() => {
        setAuthenticated(true)
        setShowButtonProfile(true)
    }, [user])

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        setAuthenticated(false);
        setShowButtonProfile(false);
        history.push("/");
        Alert.success("You're safely logged out!");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="">Vegefoods</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><NavLink className="nav-link" to="">Home</NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link" to="/all-product">All Products</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                        <li className="nav-item cta cta-colored"><NavLink className="nav-link" to="/cart"><span className="icon-shopping_cart" />[0]</NavLink></li>
                        {!authenticated ?
                            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li> :
                            <li className="nav-item"><NavLink className="nav-link" to="/login" onClick={handleLogout}>Logout</NavLink></li>
                        }
                        {
                            profile && <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default NavBar;