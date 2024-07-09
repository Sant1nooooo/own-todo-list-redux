import { handleMarkAllTodo, handleRemoveAllTodo } from '../../utils/actions';
import { useSelector, useDispatch } from 'react-redux';

function selectRemainingTods(state)
{
    const todos = state.todos.todos.filter(eachTodo => !eachTodo.isCompleted);
    return todos.length;
}
export default function Footer(){
    const status = useSelector(state => state.filters.status);
    const remainingTodos = useSelector(selectRemainingTods);
    const dispatch = useDispatch();
    // console.log(remainingTodos)
    return(
        <div className='w-full flex items-start justify-between'>
            <div className="flex items-center justify-center flex-col">
                <p>Actions</p>
                <button className='border border-black rounded py-[8px] px-[10px] mb-[5px] font-thin text-sm' onClick={()=>{handleMarkAllTodo(dispatch)}}> Mark All Completed </button>
                <button className='border border-black rounded py-[8px] px-[10px] font-thin text-sm'  onClick={()=>{handleRemoveAllTodo(dispatch)}}>Remove  Completed</button>

            </div>
            <div className="flex items-center justify-center flex-col">
                <p>Remaining Todo{remainingTodos > 1 ? 's' : ''} </p>
                <p className='font-thin'>{remainingTodos}</p>
            </div>
            <div className="flex items-start justify-center flex-col">
                <p>Filter by Status</p>
                <ul className='pl-[10px]'>
                    <li className={`cursor-pointer p-[2px] ` + (status === 'all' ? 'border border-black' : '')}>All</li>
                    <li className={`cursor-pointer p-[2px] ` + (status === 'active' ? 'border border-black' : '')}>Active</li>
                    <li className={`cursor-pointer p-[2px] ` + (status === 'completed' ? 'border border-black' : '')}>Completed</li>
                </ul>
            </div>
            <div className="flex items-start justify-center flex-col">
                <p>Filter by Color: </p>
                <ul>
                    <li className='flex items-center mb-[10px]'>
                        <input type="checkbox" name='color' className='mr-[5px]'/>
                        <div className='h-[15px] w-[30px] bg-blue-500 mr-[5px]'></div>
                        <p>Blue</p>
                    </li>
                    <li className='flex items-center mb-[10px]'>
                        <input type="checkbox" name='color' className='mr-[5px]'/>
                        <div className='h-[15px] w-[30px] bg-red-500 mr-[5px]'></div>
                        <p>Red</p>
                    </li>
                    <li className='flex items-center'>
                        <input type="checkbox" name='color' className='mr-[5px]'/>
                        <div className='h-[15px] w-[30px] bg-green-500 mr-[5px]'></div>
                        <p>Green</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
