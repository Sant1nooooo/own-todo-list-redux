const initialData = {
    status: 'idle', //idle, submitting,
    todos:[
        {id: 0, text: 'Assignment 1', isCompleted: false, color: ''},
        {id: 1, text: 'Assignment 2', isCompleted: false, color: ''},
    ]
}


export default function todoReducer(state=initialData, action)
{
    switch(action.type){
        case 'todos/add':
            return { ...state, 
                todos: [ ...state.todos, 
                    {id: state.todos.length, text: action.payload.text, isCompleted: false}
                    ]
                }

        case 'todos/toggle':
            return {...state, todos:
                state.todos.map(eachTodo => {
                    if(eachTodo.id === action.payload.todoID) return {...eachTodo, isCompleted: !eachTodo.isCompleted}
                    return eachTodo;
                })
            };

        case 'todos/delete':
            return {...state, todos: state.todos.filter(eachTodo=> eachTodo.id !== action.payload.todoID)};

        case 'todos/edit':
            return {...state, todos:
                state.todos.map( eachTodo => {
                        if(eachTodo.id === action.payload.todoID) return {...eachTodo, text: action.payload.text};
                        return eachTodo;
                    }
                )
            }     
        case 'todos/changeColor':
            return {...state, todos: 
                state.todos.map(eachTodo=>{
                    if(eachTodo.id === action.payload.id) return {...eachTodo, color: action.payload.color}
                    return eachTodo;
                })
            }
        case 'todos/markAllTodo':
            return {...state, todos: 
                state.todos.map(eachTodo => {
                    return {...eachTodo, isCompleted: !eachTodo.isCompleted}
                })
            }
        case 'todos/removeAllTodo':
            return {...state, todos: 
                state.todos.filter(eachTodo => !eachTodo.isCompleted)
            };
        default:
            return state;
    }
}
