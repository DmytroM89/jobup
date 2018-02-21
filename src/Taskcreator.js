import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexboxgrid';
import './taskcreator.css'

class Taskcreator extends Component {
    render() {
        let electician = require('./icons/electician.svg');
        return (
            <div className="task-creator">
                <div className="task-creator-item new-task">
                    <p className="title">New task</p>
                    <p className="task-desc">I need ... to ...</p>
                    <p className="address">My address is {this.props.address}</p>
                    <button type="button" className="btn">Create Task</button>
                </div>
                <div className="task-creator-item location">
                    <p className="title">Location</p>
                    <div className="location-value">{this.props.address}</div>
                </div>
                <div className="task-creator-item service-type">
                    <p className="title">Service type</p>
                    <div className="service-icons">
                        <div className="icon middle-xs center-xs">
                            <img src={electician} alt="electician"/>
                        </div>
                    </div>
                </div>
                <div className="task-creator-item tasks">
                    <p className="title">Tasks</p>
                </div>
                <div className="task-creator-item description">
                    <p className="title">Task description</p>
                    <textarea className="description-text" name="description" rows="3"></textarea>
                </div>
            </div>
        );
    }
}

export default Taskcreator;