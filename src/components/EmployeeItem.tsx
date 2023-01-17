import React from 'react'
type Props = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  onClickEdit(id: string): void;
  onDelete(id: string): void;
}

export default function EmployeeItem({firstName, lastName, email, id, onClickEdit, onDelete}: Props){
  return (
    <tr key={id} className='border hover:bg-gray-50 hover:cursor-pointer'>
      <td className='p-2'>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td className="flex justify-evenly items-center">
        <button className="px-2 p-1 text-white rounded-sm bg-blue-500" onClick={() => onClickEdit(id)}>Edit</button>
        <button className="px-2 p-1 text-white rounded-sm bg-red-500" onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  )
}
