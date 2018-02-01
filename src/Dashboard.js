import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import GoogleMap from './GoogleMap';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ''
        };
    }

    handleSentAddress = (value) => {
        this.setState({address: value});
    }

    render() {
        return (
            <div>
                <header className="header">
                    <Grid className="container-fluid">
                        <Row className="row middle-xs">
                            <a className="brand" href="#">JobUp</a>
                            <div className="navbar">
                                <ul className="navbar-menu">
                                    <li className="menu-item">
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">History</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">{this.state.address}</a>
                                    </li>
                                </ul>
                                <ul className="navbar-menu navbar-menu--left">
                                    <li className="menu-item">
                                        <a href="#">Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Grid>
                </header>
                <GoogleMap getAddress={this.handleSentAddress}/>
            </div>
        );
    }
}

export default Dashboard;