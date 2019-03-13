import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ToDoManger from './ToDoManger';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ToDoManger />, document.getElementById('root'));

serviceWorker.unregister();