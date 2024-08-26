"use client"; // Ensure the component is a client component

import React, { useState } from 'react';
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import TodoForm from '../Home/TodoForm';

interface props {
  setChange:(change:boolean)=>void;
  change:boolean;
}

const TodoButton:React.FC<props> = ({change,setChange}) => {
    const [openForm,setOpenform] = useState(false);
    
  return (
    <>
    <button
     onClick={()=>setOpenform(!openForm)}
      className="bg-black w-[113px] h-[46px] rounded-[8px] flex items-center justify-center gap-2 text-white"
    >
      <HiOutlineDocumentPlus size="23px" /> TODO
    </button>
    {
        openForm?<TodoForm change={change} setChange={setChange} setFormOpen={setOpenform}/>:''
    }
   
    </>
  );
};

export default TodoButton;
