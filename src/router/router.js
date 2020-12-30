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
import ClothingAndFashion from '../components/pages/clothing_and_fashion/clothing_and_fashion'
import Product from '../components/pages/product/product'
import { ToastContainer } from 'react-toastify'

export default function App() {
    return (
        <Router>
            <Navbar position="relative" />
            <Navbar position="fixed" />
            <Sidebar />
            <ToastContainer
                position="bottom-right"
                pauseOnHover={false}
                autoClose={3000}
            />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
                <Route path="/cart" component={Cart} />
                <Route path="/account" component={Account} />
                <Route path="/balance" component={Balance} />
                <Route path="/electronics" component={Electronics} />
                <Route path="/clothing-and-fashion" component={ClothingAndFashion} />
                <Route path="/product" component={Product} />
            </Switch>
        </Router>
    );
}