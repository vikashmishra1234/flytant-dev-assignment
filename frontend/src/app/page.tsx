import TodoButton from '@/Components/clientComponent/TodoButton'
import Home from '@/Components/Home/Home'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div>
     
      <Home/>
      <ToastContainer/>
    </div>
  )
}

export default page