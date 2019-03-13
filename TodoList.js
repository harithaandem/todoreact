import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
class TodoList extends Component{
    render(){
        return(
            <div>
            {
            this.props.todoListDetails.map((todo) =>{
              return(
                  <ToDoItem
                     key = {todo.todoId}
                     todoitem = {todo} 
                     markToDoComplete = {this.props.markToDoComplete}
                     deleteToDo = {this.props.deleteToDo}
                     updateToDo =  {this.props.updateToDo}
                     selectToDo = {this.props.selectToDo}
                    />
                )})
            }
            </div>     
        ); 
    }     
}
export default TodoList;