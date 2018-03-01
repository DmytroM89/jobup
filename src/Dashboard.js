import React, { Component } from 'react';
import './dashboard.css';
import Taskcreator from './Taskcreator'
import Taskboard from './Taskboard'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: false
        };
    }

    toggleTaskActive = () => {
        this.setState({newTask: !this.state.newTask});
    }

    render() {
        return (
            <section className="dashboard">
                <div className="container-fluid">
                    <Taskboard newTaskActive={this.toggleTaskActive}/>
                    <Taskcreator address={this.props.addr} isActive={this.state.newTask} toggleTaskActive={this.toggleTaskActive}/>
                </div>
            </section>
        );
    }
}

export default Dashboard;