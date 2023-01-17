import React from 'react'
import { useState, ChangeEvent } from 'react';
import { IEmployee } from '../ts/Employee.type';
import InputField from './InputField';
type Props = {
  onHandleSubmit(data: IEmployee): void;
  setCurrentPage: any;
  data: any;
  handleClose: any;
}
// inisalize stat
const NewEmployee = ({ onHandleSubmit, data, handleClose }: Props) => {
  const [employee, setEmployee] = useState(data || {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const onHandleChange = (even: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = even.target;
    setEmployee({ ...employee, [name]: value });
  }
  const onSubmit = () => {
    onHandleSubmit(employee)
    setEmployee({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    })
  }
  return (
    <div className='w-4/12 mx-auto mt-10 bg-white shadow-md rounded-sm relative'>
      <div className='w-8 h-8 bg-red-400 text-white flex justify-center items-center absolute top-0 right-0 rounded-tr-sm hover:cursor-pointer hover:bg-red-300 transition duration-300 ease-in-out' onClick={handleClose}>X</div>
      <p className='text-2xl text-yellow-500 font-bold text-center'>New Employee</p>
      <form className='p-7 grid grid-cols-2 gap-3 justify-center items-center w-full bg-green'>
        <InputField
          name='firstName'
          value={employee.firstName}
          placeHolder="First Name..."
          onHandleChange={onHandleChange}
          label='First Name'
        />
        <InputField
          name='lastName'
          value={employee.lastName}
          placeHolder="Last Name..."
          onHandleChange={onHandleChange}
          label='Last Name'
        />
        <InputField
          name='email'
          value={employee.email}
          placeHolder="Email..."
          onHandleChange={onHandleChange}
          label='Email' />
        <InputField
          name='phone'
          value={employee.phone}
          placeHolder="Phone Number..."
          onHandleChange={onHandleChange}
          label='Phone Number'
        />

        <div></div>
        <div className='w-full flex justify-end'>
          <button type='button' className='bg-blue-500 text-white rounded-sm px-5 py-2' onClick={onSubmit}>Add</button>
        </div>
      </form>
    </div>
  )
}

export default NewEmployee;