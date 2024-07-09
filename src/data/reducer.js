import { combineReducers } from 'redux';
import todoReducer from './slices/todoSlice';
import fliterReducer from './slices/filterSlice';

const rootRedcer = combineReducers({
    todos: todoReducer,
    filters: fliterReducer
})

export default rootRedcer;