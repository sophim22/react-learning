import React from 'react'
import { useState, ChangeEvent } from 'react';
import { IEmployee } from '../ts/Employee.type';
type Props = {
  onHandleAdd(data: IEmployee): void;
  setCurrentPage: any;
  data: any;
  handleCloseForm: any;
}

const NewEmployee = ({ onHandleAdd, setCurrentPage, data,handleCloseForm }: Props) => {
  const [formData, setFormData] = useState({
    id: new Date().toJSON().toString(),
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [employee, setEmployee] = useState(data || formData);
  const onHandleChange=(even : ChangeEvent<HTMLInputElement>): void =>{
    const fieldName = even.target.name;
    const value = even.target.value;
    setEmployee({...employee,[fieldName]: value});
  }
  const onHandleSubmit=(e: React.FormEvent<InnerHTML>):void =>{
    e.preventDefault();
    onHandleAdd(employee);
    setCurrentPage('list')
  }
  return (
    <div className='w-4/12 mx-auto mt-10 bg-white shadow-md rounded-sm relative'>
      <div className='w-8 h-8 bg-red-400 text-white flex justify-center items-center absolute top-0 right-0 rounded-tr-sm hover:cursor-pointer hover:bg-red-300 transition duration-300 ease-in-out' onClick={handleCloseForm}>X</div>
      <p className='text-2xl text-yellow-500 font-bold text-center'>New Employee</p>
      <form onSubmit={onHandleSubmit} className='p-7 grid grid-cols-2 gap-3 justify-center items-center w-full bg-green'>
        <div className='grid grid-col-1'>
          <label>First Name</label>
          <input name='firstName' value={employee.firstName} placeholder='First Name...' className='outline-none border border-gray-200 focus:border-blue-300 px-3 py-1' onChange={onHandleChange} />
        </div>
        <div className='grid grid-col-1'>
          <label>Last Name</label>
          <input name='lastName' value={employee.lastName} placeholder='Last Name...' className='outline-none border border-gray-200 focus:border-blue-300 px-3 py-1' onChange={onHandleChange} />
        </div>
        <div className='grid grid-col-1'>
          <label>Email</label>
          <input name='email' value={employee.email} placeholder='Emaill...' className='outline-none border border-gray-200 focus:border-blue-300 px-3 py-1' onChange={onHandleChange} />
        </div>
        <div className='grid grid-col-1'>
          <label>Phone Number</label>
          <input name='phone' value={employee.phone} placeholder='Phone Number...' className='outline-none border border-gray-200 focus:border-blue-300 px-3 py-1' onChange={onHandleChange} />
        </div>
        <div></div>
        <div className='w-full flex justify-end'>
          <button type='submit' className='bg-blue-500 text-white rounded-sm px-5 py-2'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default NewEmployee;