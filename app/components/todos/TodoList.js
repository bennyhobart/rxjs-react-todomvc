import React, {Component} from 'react';
import Todo from './Todo';
import todoStore from '../../stores/todo';

import styles from './todos.scss';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    todoStore.forEach(this.onChange);
  }

  onChange = (state) => this.setState({todos: state});

  render() {
    let todos = this.state.todos.map(todo => <Todo key={todo.id} todo={todo}/>);
    if (!todos.length) todos = <div>No todo items</div>

    return (
      <div className={styles.TodoList}>
        {todos}
      </div>);
  }
};
