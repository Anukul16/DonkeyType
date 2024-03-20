import React from 'react';
import '../styles/nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand navbar-light">
            <a className="navbar-brand brand" href="#">
                <h3>donkeytype</h3>
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <i className="far fa-keyboard"></i>
                </li>
                <li className="nav-item">
                    <i className="fas fa-crown"></i>
                </li>
            </ul>

            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <i className="fas fa-user"></i>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
