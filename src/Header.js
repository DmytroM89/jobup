import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <span className="logo navbar-brand mb-0 h1">JobUp</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/dashboard" to="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/history">History</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;