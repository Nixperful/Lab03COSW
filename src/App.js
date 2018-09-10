import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import 'react-datepicker/dist/react-datepicker.css';

import {Login} from './component/Login.js';
import TodoApp from './TodoApp';
import {BrowserRouter as Router, Route} from 'react-router-dom';


localStorage.setItem("user", "nicolas.osorio@mail.escuelaing.edu.co");
localStorage.setItem("passw", "12345");

class App extends Component {

    state = {isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")), email:"", password:""};
    

    constructor(props){
        super(props)
        localStorage.setItem("isLoggedIn", false);
        this.state = { isLoggedIn : localStorage.getItem("isLoggedIn"), email:"", password:""};

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
        
               
        if(this.state.email===localStorage.getItem("user") && this.state.password===localStorage.getItem("passw")){
            localStorage.setItem("isLoggedIn", true);
            this.setState({
                isLoggedIn: true,
            });
        }
        else{
            localStorage.setItem("isLoggedIn", false);
            this.setState({
                isLoggedIn: false,
            });
        }


        
    }




}

export default App;
