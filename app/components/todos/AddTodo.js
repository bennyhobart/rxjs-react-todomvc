import React, {Component} from 'react';
import todoActions from '../actions/todo';
export default class AddTodo extends Component {
  render() {
    return (<button onClick={() => todoActions.addTodo('SOME TODO')}>Add Todo</button>);
  }
}
