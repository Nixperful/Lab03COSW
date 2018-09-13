import React, {Component} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: "", priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (
            <div className="App">
                <br/>
                <br/>
                <Card onSubmit={this.handleSubmit} >
                    <CardContent>
                        <h3>New TODO</h3>
                        <label htmlFor="text" className="right-margin">
                            Task:
                        </label>

                    
                        
                        <TextField id="text" type="text" onChange={this.handleTextChange} value={this.state.text}/>

                        <br/>
                        <br/>
                        <label htmlFor="priority" className="right-margin">
                            Priority:
                        </label>
                        <TextField id="priority" type="number" onChange={this.handlePriorityChange} value={this.state.priority}/>
                        <br/>
                        <br/>
                        <TextField id="date" label="Delivery Date:" type="date" onChange={this.props.handleDateChange} value={this.state.date}/>

                    </CardContent> 
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                        
                        <Button variant="fab" aria-label="Add" color="primary" size="large" onClick={this.handleSubmit} >
                            Add task #{this.state.items.length + 1}
                        </Button>
                    </CardActions>
                    <TodoList todoList={this.state.items}/>
                </Card>
                <br/>
                <br/>
                
                
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        }); 
    }

    handleDateChange(e) {
        this.setState({
            dueDate: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;
        
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: "",
            priority: "",
            dueDate: ""})
        );
    }

}

export default TodoApp;
