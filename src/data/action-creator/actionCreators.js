export function addTodo(text)
{
    return {type:'todos/add', payload: {text: text}}
}

export function changeColor(color, todoID)
{
    return{ type: 'todos/changeColor', payload:{color: color, id: todoID}};
}

export function todoToggle(todoID)
{
    return { type:'todos/toggle', payload: {todoID: todoID}};
}

export function deleteTodo(todoID)
{
    return {type:'todos/delete', payload: {todoID: todoID}}
}
export function changeTodo(todoID, text)
{
    return {type:'todos/edit', payload:{text: text, todoID: todoID}};
}

export function markAllTodo()
{
    return { type:'todos/markAllTodo' };
}
export function removeAllTodo()
{
    return { type:'todos/removeAllTodo' };
}