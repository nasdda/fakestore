import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'

// pages
import Home from '../components/pages/home/home'
import About from '../components/pages/about/about'
import Cart from '../components/pages/cart/cart'
import Account from '../components/pages/account/account'
import Balance from '../components/pages/balance/balance'
import Electronics from '../components/pages/electronics/electronics'

export default function App() {
    return (
        <Router>
            <Navbar position="fixed" />
            <Sidebar />
            <br /><br /><br />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Account} />
                <Route path="/balance" component={Balance} />
                <Route path="/electronics" component={Electronics} />
            </Switch>
        </Router>
    );
}