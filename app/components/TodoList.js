import React, {Component} from 'react';
import Todo from './Todo';
import todoStore from '../stores/todo';
export default class TodoList extends Component {
    constructor() {
        super();
        this.state ={
            todos: []
        };
        this.onChange = (state) => this.setState({todos: state});
        todoStore.forEach(this.onChange);
    }
    render() {
        return (<div>
            {this.state.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>);
    }
};
