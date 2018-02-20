import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <a className="brand" href="#">JobUp</a>
                <ul className="navbar-menu navbar-menu--right">
                    <li className="menu-item active">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">History</a>
                    </li>
                </ul>
                <ul className="navbar-menu navbar-menu--left">
                    <li className="menu-item">
                        <a href="#">Profile</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;