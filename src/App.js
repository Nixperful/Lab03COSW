import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from './component/Login.js';
import TodoApp from './TodoApp';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {

    constructor(props){
        super(props)
        this.state = { isLoggedIn : false};
    }
    
    render() {
        
        const LoginView = () => (
            <Login/>
        );
        
        const TodoView = () => (
            <div>
                <TodoApp/>
            </div>
        );


        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoView}/>
                    </div>
                </div>
            </Router>);
    }

}

export default App;
