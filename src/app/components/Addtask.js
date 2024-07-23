'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/slice';

const Addtask = () => {
    const [todotask, setTodoTask] = useState('');
    const dispatch = useDispatch()
    const listDispatch = ()=>{
        dispatch(addTodo(todotask))
    }
  return (
    <div>
      <h1 className='heading'>Add Task</h1>
      <input type='text' placeholder='Add task..' onChange={(e)=>{setTodoTask(e.target.value)}} className='input'></input>
      <button onClick={listDispatch} className='button'>Add task</button>
    </div>
  )
}

export default Addtask
