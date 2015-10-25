import React from 'react';
import todoActions from '../../actions/todo';

export default (props) => (<div>
    {props.todo.name}
    <button onClick={() => todoActions.removeTodo(props.todo.id)}>x</button>
</div>);
