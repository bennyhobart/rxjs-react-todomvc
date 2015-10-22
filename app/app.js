'use strict';
import React, {Component} from 'react';
import TodoList from './components/todos/TodoList';
import AddTodo from './components/todos/AddTodo';

export default (props) => (<div>
    <h1>Todo List</h1>
    <TodoList />
    <AddTodo />
</div>);
