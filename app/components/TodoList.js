import React, {Component} from 'react';
import Todo from './Todo';
import todoStore from '../stores/todo';
import styles from './TodoList.css';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.onChange = (state) => this.setState({todos: state});
    todoStore.forEach(this.onChange);
  }

  render() {
    let todos = this.state.todos.map(todo => <Todo key={todo.id} todo={todo} class={styles.TodoItem} />);
    if(!todos.length) todos = <div>No todo items</div>

    return (
      <div className={styles.TodoList}>
        {todos}
      </div>);
  }
};
