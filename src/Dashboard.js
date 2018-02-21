import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import './dashboard.css';
import Taskcreator from './Taskcreator'
import Taskboard from './Taskboard'

class Dashboard extends Component {
    render() {
        return (
            <section className="dashboard">
                <div className="container-fluid">
                    <Taskboard/>
                    <Taskcreator address={this.props.addr}/>
                </div>
            </section>
        );
    }
}

export default Dashboard;