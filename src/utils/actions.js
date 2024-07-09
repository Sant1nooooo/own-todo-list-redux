import { addTodo, changeColor, todoToggle, deleteTodo, changeTodo, markAllTodo, removeAllTodo } from "../data/action-creator/actionCreators";
export function handleAddTodo(data, dispatch){
    dispatch(addTodo(data.text));
}

export function handleChangeColor(e, dispatch, todoID){
    dispatch(changeColor(e.target.value, todoID))
}

export function handleToggleTodo(dispatch, todoID)
{
    dispatch(todoToggle(todoID))
}

export function handleDeleteTodo(dispatch, todoID)
{
    dispatch(deleteTodo(todoID))
}

export function handleEditTodo(dispatch, id, text)
{
    console.log('Changing the todo with id of', id, 'to', text);
    dispatch(changeTodo(id, text));
}
export function handleMarkAllTodo(dispatch)
{
    dispatch(markAllTodo());
}

export function handleRemoveAllTodo(dispatch){
    dispatch(removeAllTodo());
}