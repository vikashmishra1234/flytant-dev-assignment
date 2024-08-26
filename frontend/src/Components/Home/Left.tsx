"use client"
import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import TodoButton from '../clientComponent/TodoButton';
import Todo from '../clientComponent/Todo';
import Rigth from './Rigth';
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Left = () => {
  const [title,setTitle] = useState('')
  const [description,setDescrition] = useState('')
  const [todoId,setTodoId] = useState('');
  const [data,setData] = useState<any>([]);
  const [change,setChange] = useState(false)
  useEffect(()=>{
    const getTodos = async()=>{

      try {
         const res = await axios.get('http://localhost:5000/gettodo');
         if(res&&res.data.success){
          console.log(res.data)
          setData(res.data.todos);
         }
       } catch (error) {
         toast.error("Something went wrong");
       }
    }
    getTodos();
  },[change])
  return (
    <>
    <section className={`w-[90%] sm:w-[40%] ${todoId?'hidden':'block'} sm:block`} >
      
        <div className='flex justify-between items-center relative'>
          <TodoButton change={change} setChange = {setChange} />
            <div className='p-1.5 px-4 rounded-[10px] cursor-pointer bg-white'><BiSearch size={'28px'} /></div>
        </div>
        {
          data.map((item:any)=>(
            <Todo
            key={item._id}
            title={item.title}
            todoId={item._id}
            description={item.description}
            setTitle={setTitle}
            setDescription={setDescrition}
            setTodoId={setTodoId}
            />
          ))
        }
    </section>
    <div className={`w-[90%] sm:w-[50%] ${todoId ? 'block' : 'hidden'} sm:block`}>
  <button
    onClick={() => {
      setTodoId('');
    }}
    className="flex sm:hidden gap-[5px] items-center mb-[10px] font-bold"
  >
    <FaArrowLeftLong />
    Back
  </button>
  <Rigth change={change} setChange={setChange} todoId={todoId} title={title} description={description} />
  <ToastContainer/>
</div>

    </>
  )
}

export default Left