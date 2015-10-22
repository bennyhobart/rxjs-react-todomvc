'use strict';
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default (props) => (<div>
    <h1>Todo List</h1>
    <TodoList />
    <AddTodo />
</div>);
