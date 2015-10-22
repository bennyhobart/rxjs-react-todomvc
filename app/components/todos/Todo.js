import React from 'react';
import todoActions from '../../actions/todo';
import { TodoItem, TodoItem_Delete, TodoItem_Content } from './todos.scss';

export default (props) => (
  <div className={TodoItem}>
    <p className={TodoItem_Content}>{props.todo.name}</p>
    <button onClick={() => todoActions.removeTodo(props.todo.id)}
            className={TodoItem_Delete}>x</button>
  </div>);
