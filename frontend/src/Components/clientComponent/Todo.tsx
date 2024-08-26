"use client"
import React from 'react'

interface TodoProps {
    setTitle: (title: string) => void;
    setTodoId: (todoId: string) => void;
    setDescription: (description: string) => void;
    title:string;
    description:string;
    todoId:string;
  }
  

const Todo:React.FC<TodoProps> = ({setTitle,description,title,todoId,setTodoId,setDescription}) => {
    const handleTodo = (title:string,id:string,description:string)=>{
        setTodoId(id);
        setTitle(title)
        setDescription(description)
    }
  return (
    <div onClick={()=>handleTodo(title,todoId,description)} className='bg-white cursor-pointer mt-3 rounded-lg p-[10px] capitalize'>
            <h1 className='text-[17px] sm:text-[19px]  font-bold'>{title}</h1>
            <div className='flex text-[15px] sm:text-[16px] gap-2'>
            <p className='w-[70%]'>{description}</p>
            <div className='whitespace-nowrap text-sm'>27 july 2023</div>
            </div>
        </div>
  )
}

export default Todo