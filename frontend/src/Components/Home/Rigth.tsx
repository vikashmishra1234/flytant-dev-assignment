import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});
import 'react-quill/dist/quill.snow.css';
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-toastify';

interface RigthProps {
  title: string;
  description: string;
  todoId:string;
  setChange:(change:boolean)=>void;
  change:boolean;
}

const Rigth: React.FC<RigthProps> = ({ title,todoId,change,setChange, description }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  useEffect(()=>{
    setNewTitle(title)
    setNewDescription(description)
  },[title,description])

  const updateTodo = async () => {
    try {
      
      const strippedDescription = newDescription.replace(/<\/?p>/g, '');
  
      const res = await axios.put(`http://localhost:5000/updatetodo?id=${todoId}`, {
        newTitle,
        newDescription: strippedDescription,
      });
      if (res && res.data.success) {
        toast.success('Updated successfully');
        setChange(!change)
      }
    } catch (error:any) {
      toast.error('Something went wrong');
      console.log(error.message);
    }
  };
 const deleteTodo = async()=>{
    try {
     const res:any = await axios.delete(`http://localhost:5000/deletetodo?id=${todoId}`);
     if(res&&res.data.success){
      toast.success("deleted successfully")
      setChange(!change);
     }

    } catch (error:any) {
      console.log(error.message);
      toast.error("Something went wrong")
    }
 }

  return (
    <section className="bg-white h-[93%] flex flex-col w-[100%] p-4">
      
      <div className='flex w-full  justify-between items-center'>

      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="s mb-4 p-2  xs:text-[17px] sm:text-[19px] w-[60%] font-bold outline-none border-none capitalize"
        placeholder="Title"
      />
      <button onClick={updateTodo} disabled={todoId?false:true} className='bg-black text-[16px] w-[70px] sm:w-[100px] h-[30px] sm:h-[40px] rounded-[8px] text-white'>Update</button>
      <RiDeleteBinLine onClick={deleteTodo} cursor={'pointer'} size={'25px'} />
      </div>
      {/* Editable description using ReactQuill */}
      {editorLoaded?<ReactQuill
        value={newDescription}
        onChange={setNewDescription}
      />:''}
    </section>
  );
};

export default Rigth;
