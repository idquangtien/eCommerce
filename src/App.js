
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import ProductDetail from './components/product/ProductDetail';
import Admin from './Admin';
import AdminAdd from './components/admin/AdminAdd';
import AdminUpdate from './components/admin/AdminUpdate';

function App() {
    return (
        <Router>
            <Nav/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about"  component={About}/>
                <Route path="/shop" exact component={Shop}/>
                <Route path="/shop/:id"  component={ProductDetail}/>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/admin/add" component={AdminAdd}/>
                <Route path="/admin/update/:id" component={AdminUpdate}/>
            </Switch>
        </Router>
    );
}

export default App;
