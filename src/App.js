
import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import ProductDetail from './components/product/ProductDetail';
import Admin from './Admin';
import AdminAdd from './components/admin/AdminAdd';
import AdminUpdate from './components/admin/AdminUpdate';
import ShoppingCart from './components/cart/ShoppingCart';
import Checkout from './Checkout';
import Favorite from './Favorite';
import Account from './Account';

function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about"  component={About}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/shop/:id" component={ProductDetail}/>
                <Route path="/favorite" component={Favorite}/>
                <Route path="/account" component={Account}/>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/admin/add" component={AdminAdd}/>
                <Route path="/admin/update/:id" component={AdminUpdate}/>
                <Route path="/shopping-cart" component={ShoppingCart}/>
                <Route path="/checkout" component={Checkout}/>
            </Switch>
        </Router>
    );
}

export default App;
