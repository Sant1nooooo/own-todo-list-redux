import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import Todo from './Todo';



export default function TodoList(){
    const lists = useSelector(state => state.todos.todos);
    const todoListID = createSelector(
        state=> state.todos.todos,
        (todos) => todos.map(eachTodo => eachTodo.id)
    );
    console.log(todoListID);
    return (
        <div className='w-full h-[300px] border overflow-scroll my-[30px] p-[10px]'>
            {lists.map((eachTodo)=>{
                return <Todo key={eachTodo.id} todo={eachTodo}/>
            })}
            {/* <Todo/> */}
        </div>
    )
}