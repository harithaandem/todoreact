import React, { Component } from 'react';
 class ToDoItem extends Component{
    render(){
        let activeToDo = "todo_item";
        if(this.props.todoitem.todoStatus){
            activeToDo += "_completed";
        }
        return(
            <div key = {this.props.todoitem.todoid} className = "todo_items">
                <input type = "checkbox" onClick = {()=>this.props.selectToDo(this.props.todoitem.todoId)} />
                <li className = {activeToDo}>{this.props.todoitem.todoText}</li>
                <button onClick = {()=>this.props.markToDoComplete(this.props.todoitem.todoId)}>DONE</button>
                <button onClick = {()=>this.props.deleteToDo(this.props.todoitem.todoId)}>REMOVE</button>
                <button onClick = {()=>this.props.updateToDo(this.props.todoitem.todoId)} >UPDATE</button>
            </div>
        );
    }
 }

export default ToDoItem;