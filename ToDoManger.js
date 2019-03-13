import React, { Component } from 'react';
import ToDoActionBar from './ToDoActionBar';
import './App.css';
import TodoList from './TodoList';
class ToDoManager extends Component {
  constructor() {
    super();
    this.state = {
        todoListDetails : []
    }
    this.setToDoText = this.setToDoText.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.deleteSelected = this.deleteSelected.bind(this);
    this.markToDoComplete = this.markToDoComplete.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.selectToDo = this.selectToDo.bind(this);
  }   

  setToDoText(event) {
     this.setState({ todoText: event.target.value });
  }

  addToDo(event) {
    event.preventDefault();
    var todoDetails = {
        todoText : this.state.todoText,
        todoId : new Date().getTime(),
        todoStatus : false,
        todoChecked : false
    }
    let todoListDetails = this.state.todoListDetails.slice();
    todoListDetails.push(todoDetails);
    this.setState({
        todoText: "",
        todoListDetails : todoListDetails
    });
  }

  deleteAll() {
     this.setState({
     todoListDetails : []
     })
  }

  deleteSelected() {
      let toDoList = this.state.todoListDetails.slice();
      let  updateToDoList= [];
      toDoList.map((todo) => {
      if(!todo.todoChecked) {
        updateToDoList.push(todo);
      }
      })
      this.setState({todoListDetails : updateToDoList});
  }

  markToDoComplete(todoId) { 
      let toDoItems = this.state.todoListDetails.slice();
      let updateToDoList = toDoItems.filter((todo) => {
      if(todoId === todo.todoId){
        todo.todoStatus = !todo.todoStatus;
      }
      return true;
      })
      this.setState({todoListDetails : updateToDoList});
  }

  deleteToDo(todoId) {
      let toDoItems = this.state.todoListDetails.slice();
      let todoIndex;
      toDoItems.map((todo, index) => {
      if(todoId === todo.todoId){
        todoIndex = index;
      }
      })
      toDoItems.splice(todoIndex, 1);
      this.setState({todoListDetails : toDoItems});
  }

  updateToDo(todoId) {
      var updateFromPrompt = prompt("enter to update", " ");
      let toDoItems = this.state.todoListDetails.slice();
      let updateToDoList = toDoItems.filter((todo) => {
      if(todoId === todo.todoId){
        todo.todoText += updateFromPrompt;
      }
      return true;
      })
      this.setState({todoListDetails : updateToDoList});
  }

  selectToDo(todoId) { 
      let toDoItems = this.state.todoListDetails.slice();
      let updateToDoList = toDoItems.filter((todo) => {
      if(todoId === todo.todoId){
        todo.todoChecked = !todo.todoChecked;
      }
      return true;
      })
      this.setState({todoListDetails : updateToDoList});
  }

  render() {
    return (
    <div>
      <ToDoActionBar 
       todoText = {this.state.todoText}
       setToDoText = {this.setToDoText}
       addToDo = {this.addToDo}
       deleteAll = {this.deleteAll}
       deleteSelected = {this.deleteSelected} />
      <br/>

      <div className = "todo_container">
      <TodoList
       todoListDetails = {this.state.todoListDetails}
       markToDoComplete = {this.markToDoComplete}
       deleteToDo = {this.deleteToDo}
       updateToDo = {this.updateToDo}
       selectToDo = {this.selectToDo} />
      </div>
    </div>
    );
  }
}

export default ToDoManager;