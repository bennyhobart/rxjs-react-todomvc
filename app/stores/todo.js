import dispatcher from '../dispatcher';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../constants/todo';

export default dispatcher.scan((acc, payload) => {
    switch(payload.action) {
        case ADD_TODO:
            acc.push(payload.data);
            break;
        case REMOVE_TODO:
            acc.remove(payload.data.id);
            break;
        case UPDATE_TODO:
            acc.find((todo) => todo.id === payload.data.id).name = payload.data.name;
            break;
    }
    return acc;
}, []);
