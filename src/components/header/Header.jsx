import { useForm } from "react-hook-form";
import { handleAddTodo } from "../../utils/actions";
import { useDispatch } from 'react-redux';

export default function Header(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    return(
        <div className="w-full mt-[10px]">
            <form onSubmit={handleSubmit((data)=>{handleAddTodo(data, dispatch)})} className="flex items-center justify-between">
                <input type="text" placeholder="Todo for today!"  {...register('text')} required 
                className="flex-grow outline-none border text-[25px] font-thin mr-[5px]"/>
                <button type="submit" className='border h-[40px] w-[50px]'>ADD</button>
            </form>
        </div>
    );
}