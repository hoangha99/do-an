import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/Nav/NavBar';
import Home from '../components/Home/Home';
import Login from '../components/Auth/login/Login';
import Signup from '../components/Auth/signup/Signup';
import Profile from '../components/Auth/profile/Profile';
import OAuth2RedirectHandler from '../components/Auth/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import { getInfo } from '../api/user/user';
import Footer from '../components/Footer/Footer';
import Contact from '../pages/contact/Contact';
import AllProduct from '../pages/AllProduct/AllProduct';
import Cart from '../pages/Cart/Cart';
import Product from '../components/Product';
import About from '../pages/About';

function Customer(props) {
    const [authenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // const [loading, setLoading] = useState(true);

    const getUser = async () => {
        const res = await getInfo();
        if (res.data) {
            setCurrentUser(res.data)
            setAuthenticated(true);
        }
    }
    useEffect(() => {
        getUser();
    }, [])
    return (
        <BrowserRouter>

            <div className="app-top-box">
                <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </div>
            <div className="app-body">
                <Switch>
                    <Route exact path="/home" component={Home}></Route>
                    <PrivateRoute path="/home/profile" authenticated={authenticated} currentUser={currentUser} component={Profile}>
                    </PrivateRoute>
                    <Route path="/home/login" render={(props) => <Login authenticated={authenticated} {...props} />}></Route>
                    <Route path="/home/signup" render={(props) => <Signup authenticated={authenticated} {...props} />}></Route>
                    <Route path="/home/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                    <Route path="/home/contact" component={Contact}></Route>
                    <Route path="/home/about" component={About}></Route>
                    <Route path="/home/cart" component={Cart}></Route>
                    <Route path="/home/item" component={Product}></Route>
                    <Route path="/home/all-product" component={AllProduct}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
            <Footer />
            <Alert stack={{ limit: 3 }}
                position='top-right' effect='slide' offset={65} />

        </BrowserRouter>
    );
}

export default Customer;