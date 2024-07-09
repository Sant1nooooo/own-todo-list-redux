import { handleChangeColor, handleToggleTodo, handleDeleteTodo, handleEditTodo } from "../../utils/actions";
import { useDispatch } from "react-redux";
import { memo } from "react";
import { useState, useRef } from "react";
function  Todo ({todo})
{
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(todo.text);
    const dispatch = useDispatch();
    // console.log('Data of ',todo.id,'changed.');
    return(
        <div className='w-full h-[100px] flex items-center justify-between mb-[10px] p-[5px bg-gray-100'>
            <div className='flex items-center'>
                <input type="checkbox" checked={todo.isCompleted} className='mr-[10px] h-[20px] w-[20px]' onChange={()=>{handleToggleTodo(dispatch, todo.id) }}/>
                <input type="text" value={text} readOnly={!isEditing} onChange={(e)=>{setText(e.target.value)}}
                className='outline-none bg-transparent text-[30px] font-thin'/>
                {/* <p className='text-[30px] font-thin'>{todo.text}</p> */}
            </div>
            <div>
                <select className='bg-transparent border px-[12px] py-[8px] mr-[5px] cursor-pointer' value={todo.color} onChange={(e)=>{handleChangeColor(e, dispatch, todo.id)}}>
                    <option value="">Select color</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
                <button className='cursor-pointer bg-red-500 text-white border px-[12px] py-[8px]' onClick={()=>{ handleDeleteTodo(dispatch, todo.id)}}>DELETE</button>
                <button className='cursor-pointer bg-blue-500 text-white border px-[12px] py-[8px]' onClick={()=>{
                    setIsEditing(prevValue => !prevValue)
                    if(isEditing)
                    {
                        handleEditTodo(dispatch, todo.id, text);
                    }
                }}> {isEditing ? 'SAVE' : 'EDIT'} </button>
            </div>
        </div>
    );
}

export default memo(Todo);