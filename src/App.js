import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from './component/Login.js';
import TodoApp from './TodoApp';

class App extends Component {

    
    render() {

        return (
            <TodoApp/>);
    }

}

export default App;
