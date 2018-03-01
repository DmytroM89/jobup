import React, { Component } from 'react';
import './taskboard.css'

class Taskboard extends Component {

    render () {
        return (
            <div className="task-board p-3">
                <button type="button" className="new-task-btn btn btn-light btn-block" onClick={this.props.newTaskActive}>+ New Task</button>
            </div>
        );
    }
}

export default Taskboard;