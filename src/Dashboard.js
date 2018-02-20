import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import './dashboard.css';
import Taskcreator from './Taskcreator'
import Taskboard from './Taskboard'

class Dashboard extends Component {
    render() {
        return (
            <section className="dashboard">
                <Grid className="container-fluid">
                    <Row className="row middle-xs">
                        <span className="address-box">{this.props.addr}</span>
                    </Row>
                    <Taskboard/>
                    <Taskcreator/>
                </Grid>

            </section>
        );
    }
}

export default Dashboard;