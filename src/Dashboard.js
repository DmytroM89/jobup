import React, { Component } from 'react';
import $ from 'jquery';
import * as firebase from 'firebase';
import './dashboard.css';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAKZ-BxVKAuURkxQHhb5oHa9VatXEqqBJc",
    authDomain: "jobup-d0133.firebaseapp.com",
    databaseURL: "https://jobup-d0133.firebaseio.com",
    projectId: "jobup-d0133",
    storageBucket: "jobup-d0133.appspot.com",
    messagingSenderId: "154532691632"
};
firebase.initializeApp(config);


const arrService = [
    {
        id: 1,
        name: 'Electician',
        img: require('./icons/electician.svg')
    },
    {
        id: 2,
        name: 'Plumber',
        img: require('./icons/plumber.svg')
    },
    {
        id: 3,
        name: 'Gardener',
        img: require('./icons/gardener.svg')
    },
    {
        id: 4,
        name: 'Housekeeper',
        img: require('./icons/housekeeper.svg')
    },
    {
        id: 5,
        name: 'Cook',
        img: require('./icons/cook.svg')
    }
];

const electicianTasks = [
    {
        id: 1,
        name: 'Install a bulb'
    },
    {
        id: 2,
        name: 'Install a rosette'
    },
    {
        id: 3,
        name: 'Fix a wiring'
    },
    {
        id: 4,
        name: 'Install a chandelier'
    },
    {
        id: 5,
        name: 'Install a transformer'
    },
    {
        id: 6,
        name: 'Fix a rosette'
    }
];

const plumberTasks = [
    {
        id: 1,
        name: 'Unblock a toilet'
    },
    {
        id: 2,
        name: 'Unblock a sink'
    },
    {
        id: 3,
        name: 'Fix a water leak'
    },
    {
        id: 4,
        name: 'Install a sink'
    },
    {
        id: 5,
        name: 'Install a shower'
    },
    {
        id: 6,
        name: 'Install a toilet'
    }
];

const gardenerTasks = [
    {
        id: 1,
        name: 'Cut a tree'
    },
    {
        id: 2,
        name: 'Dig a big hole'
    },
    {
        id: 3,
        name: 'Mow the lawn'
    },
    {
        id: 4,
        name: 'Harvest hard'
    },
    {
        id: 5,
        name: 'Pull weeds'
    },
    {
        id: 6,
        name: 'Burn down'
    }
];

const housekeeperTasks = [
    {
        id: 1,
        name: 'Clean the house'
    },
    {
        id: 2,
        name: 'Do the laundry'
    },
    {
        id: 3,
        name: 'Vacuum'
    },
    {
        id: 4,
        name: 'Iron shirts'
    },
    {
        id: 5,
        name: 'Wash dishes'
    },
    {
        id: 6,
        name: 'Wash the floors'
    }
];

const cookTasks = [
    {
        id: 1,
        name: 'Make breakfast'
    },
    {
        id: 2,
        name: 'Make dinner'
    },
    {
        id: 3,
        name: 'Buy groceries'
    },
    {
        id: 4,
        name: 'Bake a cake'
    },
    {
        id: 5,
        name: 'Make fries'
    },
    {
        id: 6,
        name: 'Slicing meat'
    }
];


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            tasks: plumberTasks,
            serviceName: '...',
            taskName: '...',
            desc: '',
            date: ''
        };

        this.serviceClick = this.serviceClick.bind(this);
        this.taskClick = this.taskClick.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    serviceClick = (e) => {
        $('.icon-img').removeClass('icon-img-active');
        $('.task').removeClass('task-active');
        $('.tasks').addClass('show');
        e.target.parentNode.classList.add('icon-img-active');

        let serviceName = e.target.getAttribute('alt');
        this.setState({
            serviceName: serviceName,
            taskName: ''
        });

        switch (serviceName) {
            case 'Plumber':
                this.setState({tasks: plumberTasks});
                break;
            case 'Electician':
                this.setState({tasks: electicianTasks});
                break;
            case 'Gardener':
                this.setState({tasks: gardenerTasks});
                break;
            case 'Housekeeper':
                this.setState({tasks: housekeeperTasks});
                break;
            case 'Cook':
                this.setState({tasks: cookTasks});
                break;
            default:
                return false;
        }
    }

    taskClick = (e) => {
        $('.task').removeClass('task-active');

        let taskName = e.target.textContent;
        e.target.classList.add('task-active');
        this.setState({taskName: taskName});
    }

    getText = (e) => {
        this.setState({desc: ', ' + e.target.value + '.'});

    }

    currentDate = () => {
        var today = new Date(),
            options = { weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };

        this.setState({date: today.toLocaleString('en-US', options)});
    }

    newTaskActive = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }

    createTask = () => {
        var newPostKey = firebase.database().ref().child('tasks').push().key;

        firebase.database().ref('tasks/' + newPostKey).set({
            service: this.state.serviceName,
            name: this.state.taskName,
            date: this.state.date,
            description: this.state.desc,
            address: this.props.address
        });

        this.props.toggleTaskActive();

        this.setState({serviceName: '...', taskName: '...',});
        $('.task').removeClass('task-active');
        $('.icon-img').removeClass('icon-img-active');
    }

    /*getTaskObj = () => {
        let taskRefObj = firebase.database().ref().child('tasks/');
        //this.props.getTaskObj(taskRefObj);
        //this.setState({taskObj: taskRefObj});
    }*/

    componentWillMount() {
        this.currentDate();
        //this.getTaskObj();
    }

    render() {
        let className = 'task-creator';
        if (this.state.isActive) {
            className += ' task-creator-active';
        }

        return (
            <section className="dashboard">
                <div className="container-fluid">
                    {/*Taskboard*/}
                    <div className="task-board p-3">
                        <button type="button" className="new-task-btn btn btn-light btn-block" onClick={this.newTaskActive}>+ New Task</button>
                        <div className="task-list">
                            {
                                //console.log(this.props.taskObj)
                            }
                        </div>
                    </div>

                    {/*Taskcreator*/}
                    <div className={className}>
                        <div className="task-creator-item new-task">
                            <p className="title">New task</p>
                            <p className="task-desc" id="object">I need <span className="service-name">{'a ' + this.state.serviceName}</span> to <span className="task-name">{this.state.taskName}</span><span className="desc-text">{this.state.desc}</span></p>
                            <p className="address">My address is {this.props.addr}</p>
                            <button type="button" className="btn btn-primary" onClick={this.createTask}>Create Task</button>
                        </div>
                        <div className="task-creator-item location">
                            <p className="title">Location</p>
                            <div className="location-value">{this.props.addr}</div>
                        </div>
                        <div className="task-creator-item service-type">
                            <p className="title">Service type</p>
                            <div className="service-icons d-flex justify-content-between">
                                {
                                    arrService.map((el) => {
                                        return (
                                            <div className="icon d-flex flex-column align-items-center" key={el.id}>
                                                <div className="icon-img d-flex align-items-center justify-content-center">
                                                    <img src={el.img} alt={el.name} onClick={this.serviceClick}/>
                                                </div>
                                                <p className="icon-text text-center">{el.name}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="task-creator-item tasks hide">
                            <p className="title">{this.state.serviceName} tasks</p>
                            <div className="service-tasks d-flex">
                                <div className="container">
                                    <div className="row justify-content-between">
                                        {
                                            this.state.tasks.map((el) => {
                                                return (
                                                    <div className="task px-3 py-2 mr-2 mb-2" onClick={this.taskClick} key={el.id}>{el.name}</div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="task-creator-item description">
                            <p className="title">Task description</p>
                            <textarea className="description-text" name="description" rows="3" onChange={this.getText}></textarea>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;