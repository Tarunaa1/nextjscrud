'use client'
import { editTodo } from '@/app/redux/slice';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UpdateTask = ({params}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const taskId = params.id;
    const tasks = useSelector((state)=>state.todolist.find(task=>task.id===taskId));
    const [title, setTitle] = useState(tasks? tasks.task:'');
    const handleUpdate = ()=>{
        dispatch(editTodo({id: taskId, task: title}));
        router.push('/');
    }

  return (
    <div className='update'>
        <h3 className='heading'>Update Task</h3>
      <input type='text' value={title}
                onChange={(e) => setTitle(e.target.value)} className='input'></input>
      <button onClick={handleUpdate} className='button'>Update</button>
    </div>
  )
}

export default UpdateTask
