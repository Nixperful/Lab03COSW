import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-datepicker/dist/react-datepicker.css';

import {Login} from './component/Login.js';
import TodoApp from './TodoApp';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";


localStorage.setItem("user", "nicolas.osorio@mail.escuelaing.edu.co");
localStorage.setItem("passw", "12345");



class App extends Component {

    
    state = {isLoggedIn: false, email:"", password:""};

    constructor(props){
        super(props)
        localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
    }

    LoginView = () => (
        <Login 
        handleUserChange={this.handleUserChange}
        handlePasswChange={this.handlePasswChange}
        handleLoginSubmit={this.handleLoginSubmit} />
    );
    
    TodoView = () => (
        <TodoApp />
    );



    render() {
        

        if(this.state.isLoggedIn){

            return(
                <Router>
                    <div>
                        
                        <Route exact path="/" component={this.TodoView} />
                        
                    </div>
                </Router>     
            );
        }
        else{

            return (

                <Router>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h1 className="App-title">TODO React App</h1>
                        </header>

                        <br/>
                        <br/>

                        <div>
                            <Route exact path="/" component={this.LoginView}/>
                        </div>
                    </div>
                </Router>
            );
        }   
            
    }


    handleUserChange = event => {
        this.setState({
            email: event.target.value
        });
    }
    
    handlePasswChange = event => {
        this.setState({
            password: event.target.value
        });
    }

    handleLoginSubmit= event => {

        event.preventDefault();
        
        let self = this;
        axios.post('http://localhost:8080/user/login', {
            user: this.state.email,
            pass: this.state.password
        })
            .then(function (response) {
                localStorage.setItem("token", response.data.accessToken);
                if (localStorage.getItem("token")!= null) {
                    self.setState({
                        isLoggedIn: true,
                    });
                    localStorage.setItem("isLoggedIn", true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        



                
    }

}

export default App;
