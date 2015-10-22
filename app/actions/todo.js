import todoConstants from '../constants/todo.js';
let id = 0;
export default {
    subject: new Rx.Subject(),
    addTodo: (name) => {
        this.subject.onNext({
            action: todoConstants.ADD_TODO,
            data: {
                name,
                id: id++
            }
        });
    },
    removeTodo: (id) => {
        this.subject.onNext({
            action: todoConstants.REMOVE_TODO,
            data: {
                id
            }
        });
    },
    updateTodo: ({name, id}) => {
        this.subject.onNext({
            action: todoConstants.UPDATE_TODO,
            data: {
                name,
                id
            }
        });
    }
}
