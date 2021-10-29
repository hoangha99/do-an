import React from 'react';
import Login from '../Auth/login/Login';
import Adminn from '../Home';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../Home';

function Admin(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/admin/hello" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Admin;