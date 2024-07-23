'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../redux/slice';
import { useRouter } from 'next/navigation';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const DisplayTask = () => {
    const todo = useSelector((data)=>data.todolist);
    const dispatch = useDispatch();
    const router = useRouter();
  return (
    <div>
      <h2 className='blue-head'>TODO LIST</h2>
      {
        todo.map((item)=>(
            <div className='task' key={item.id}>
                <span className='task-name'>{item.task}</span>
                <div className='buttons'>
                  <button onClick={()=>dispatch(removeTodo(item.id))} className='remove'><MdDelete className='x'/></button>
                  <button onClick={()=>router.push(`edit/${item.id}`)} className='edit'><FaRegEdit className='x'/></button>
                </div>
            </div>
            ))

      }
    </div>
  )
}

export default DisplayTask
