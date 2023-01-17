import React from 'react'

type Props = {
  name: string;
  value: string;
  placeHolder: string;
  onHandleChange: any;
  label: string;
}

export default function InputField({ name, value, placeHolder, onHandleChange, label, ...inputProps }: Props) {
  return (
    <div className='grid grid-col-1'>
      <label>{label}</label>
      <input
        {...inputProps}
        name={name}
        value={value}
        placeholder={placeHolder}
        className='outline-none border border-gray-200 focus:border-blue-300 px-3 py-1'
        onChange={onHandleChange}
      />
    </div>
  )
}