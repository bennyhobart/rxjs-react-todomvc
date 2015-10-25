import Rx from 'rx';
import todoConstants from '../constants/todo.js';
import dispatcher from '../dispatcher.js';

let id = 0;
const subject = new Rx.Subject();
dispatcher.registerActions(subject);
export default {
    addTodo: (name) => {
        subject.onNext({
            action: todoConstants.ADD_TODO,
            data: {
                name,
                id: id++
            }
        });
    },
    removeTodo: (id) => {
        subject.onNext({
            action: todoConstants.REMOVE_TODO,
            data: {
                id
            }
        });
    },
    updateTodo: ({name, id}) => {
        subject.onNext({
            action: todoConstants.UPDATE_TODO,
            data: {
                name,
                id
            }
        });
    }
}

