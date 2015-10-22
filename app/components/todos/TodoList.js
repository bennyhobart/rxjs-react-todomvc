import React, {Component} from 'react';
import Todo from './Todo';
import todoStore from '../../stores/todo';

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
    return (
      <div>
        {this.state.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
      </div>);
  }
};
