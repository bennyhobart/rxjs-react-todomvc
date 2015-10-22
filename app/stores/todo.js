import dispatcher from '../dispatcher';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../constants/todo';

export default dispatcher.scan((acc, payload) => {
    switch(payload.action) {
        case ADD_TODO:
            return acc.concat(payload.data);
        case REMOVE_TODO:
            return acc.filter((todo) => todo.id !== payload.data.id);
        case UPDATE_TODO:
            acc.find((todo) => todo.id === payload.data.id).name = payload.data.name;
            return acc;
    }
}, []);

