import React, {Component} from 'react';
import todoActions from '../../actions/todo';

import styles from './TodoList.css';

export default class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  _addTodo(event) {
    event.preventDefault();
    todoActions.addTodo(this.state.todoText);
    this._updateTodoText("");
    this.refs.todoInput.focus();
  }

  _updateTodoText(newText) {
    this.setState({
      todoText: newText
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this._addTodo(event)}>
        <input type="text" value={this.state.todoText}
               onChange={(event) => {this._updateTodoText(event.target.value)}}
               ref="todoInput"/>
        <button className={styles.TodoButton}>Add Todo</button>
      </form>);
  }
}
