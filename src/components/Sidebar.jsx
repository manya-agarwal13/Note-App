import React from 'react'
import { FaPlus } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className='mt-5 mx-5'>
        <h1 className='fs-3 fw-bold'>LOGO</h1>
        <div className='rounded-circle mt-5 mx-2 d-flex justify-content-center align-items-center' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor:'black', width:"50px", height:"50px", cursor:'pointer'}}>
        <FaPlus size={30} className='rounded-circle fs-5 text-white'/>
        </div>
    </div>
  )
}
