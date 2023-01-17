import { IEmployee } from "../ts/Employee.type";
import EmployeeItem from "./EmployeeItem";
type Props = {
  list: IEmployee[];
  onDelete: (id: string) => void;
  onClickEdit(id: string): void;
  onAddNewEmployee: any;
}
export default function EmployeeList({ list, onDelete, onAddNewEmployee, onClickEdit }: Props) {
  return (
    <div>
      <header className='bg-white shadow-md p-3 text-center'>
        <p>Employee List</p>
      </header>
      <div className="w-9/12 mt-10 mx-auto flex justify-end">
        <button className="bg-gray-500 text-white rounded-md p-2" onClick={onAddNewEmployee}>New Employee</button>
      </div>
      <table className="w-9/12 mx-auto mt-5 shadow-sm">
        <thead className='bg-black text-white'>
          <tr className='border'>
            <th className='p-2'>First Name</th>
            <th className='p-2'>Last Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            list.map((employee: IEmployee) => {
              return (
                <EmployeeItem
                  id={employee.id}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  email={employee.email}
                  onClickEdit={onClickEdit}
                  onDelete={onDelete}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}