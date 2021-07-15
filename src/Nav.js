import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <header className="header">
            <div className="container">

                <nav className="nav">
                    <div className="nav__left">
                        <NavLink to="/" activeClassName="active">Logo</NavLink>
                    </div>
                    <div className="nav__right">
                        <ul className="nav__menu">
                            <li className="nav__item">
                                <NavLink to="/about" 
                                    className="nav__link"
                                    activeClassName="active">About</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/shop"
                                    className="nav__link"
                                    activeClassName="active">Shop</NavLink>
                            </li>
                        </ul>
                        <ul className="nav__menu">
                            <li className="nav__item">
                                <NavLink to="/favorite" 
                                    className="nav__link"
                                    activeClassName="active">
                                    <i className="fas fa-heart"></i>
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/shopping-cart" 
                                    className="nav__link"
                                    activeClassName="active">
                                    <i className="fas fa-shopping-cart"></i>
                                </NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/account" 
                                    className="nav__link"
                                    activeClassName="active">
                                    <i className="fas fa-user"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Nav;