'use strict';
import React, {Component} from 'react';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/todos/AddTodo';

export default (props) => (
  <div style={{maxWidth: '900px', margin: '0 auto'}}>
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
  </div>);
