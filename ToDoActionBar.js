import React, { Component } from 'react';
import './App.css';
class ToDoActionBar extends Component {
    render() {
        return (
            <>
                <h1>TODOLIST</h1>
                <div className = "todo-actionbar">
                    ADD DESCRIPTION: <input value={this.props.todoText} onChange = {this.props.setToDoText} />
                    <button onClick = {this.props.addToDo}> ADD </button>
                    <button onClick = {this.props.deleteSelected}> DELETE </button>
                    <button onClick = {this.props.deleteAll}> DELETEALL </button>
                </div>
            </>
        );
    }
}

export default ToDoActionBar;