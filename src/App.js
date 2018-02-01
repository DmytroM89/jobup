import React, { Component } from 'react';
import Header from './Header';
import GoogleMap from './GoogleMap';
import Dashboard from './Dashboard';
import './app.css';

class App extends Component {
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
            <div className="wrapper">
                <Header/>
                <Dashboard addr={this.state.address}/>
                <div className="map">
                    <GoogleMap getAddress={this.handleSentAddress}/>
                </div>

            </div>
        );
    }
}

export default App;