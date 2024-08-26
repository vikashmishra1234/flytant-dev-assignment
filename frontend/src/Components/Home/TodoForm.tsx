import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface TodoFormProps {
  setFormOpen: (value: boolean) => void;
  setChange:(change:boolean)=>void;
  change:boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({setFormOpen,change,setChange}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
   try {
     const res:any = await axios.post('http://localhost:5000/addtodo',{title,description});
     if(res&&res.data.success){
       toast.success(res.data.message);
       setChange(!change)
       setFormOpen(false); 
     }
   } catch (error:any) {
    toast.success("something went wrong");
    console.log(error.message);
   }
  };

  return (
    <div className="bg-white p-4 rounded absolute top-[26px] left-[11%] w-[80%] shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add a New Todo</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter description"
            rows={4}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Add Todo
          </button>
          <button
            type="button"
            onClick={() => setFormOpen(false)} // Close the form without submitting
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
