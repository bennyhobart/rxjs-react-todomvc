import React, {Component} from 'react';
import todoActions from '../../actions/todo';

import styles from './todos.scss';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <button onClick={() => todoActions.addTodo('SOME TODO')}
                className={styles.TodoButton}>Add Todo
        </button>
      </div>);
  }
}
