import React from 'react'
import EmployeeList from './EmployeeList';
import { IEmployee } from '../ts/Employee.type';
import { useState } from 'react';
import { dummyEmployeeList } from '../ts/Employee.type';
import NewEmployee from './NewEmployee';
export default function Home() {
  const [employee, setEmployee] = useState(
    dummyEmployeeList as IEmployee[]
  );
  const [currentPage, setCurrentPage] = useState('list');
  const [item, setItem] = useState<IEmployee>();

  const onDeleteEmployee = (id: string): void => {
    setEmployee(employee.filter((data) => data.id !== id))
  }
  const onHandleSubmit = (newEmployee: IEmployee): void => {
    if (newEmployee.id){
      employee.map((data, index)=> {
        if (data.id === newEmployee.id){
          employee[index] = newEmployee;
          setItem(undefined);
        }else {
          return employee;
        }
      })
      
    }else {
      const newDAta = {id: new Date().toJSON().toString(), firstName: newEmployee.firstName, lastName: newEmployee.lastName, email: newEmployee.email, phone: newEmployee.phone}
      setEmployee([...employee, newDAta])
    }
    setCurrentPage('list')
  }
  const handleClose = (): void => {
    setCurrentPage('list');
  }
  const onClickEditEmployee = (id: string): void => {
    setItem(employee.find((data)=>data.id === id));
    setCurrentPage('new');
  }
  const onAddNewEmployee=():void=>{
    setCurrentPage('new');
  }
  return (
    <div>
      {
        currentPage === 'list' && (
          <EmployeeList
            list={employee}
            onDelete={onDeleteEmployee}
            onAddNewEmployee={onAddNewEmployee}
            onClickEdit={onClickEditEmployee} />
        )
      }
      {
        currentPage === 'new' && (
          <NewEmployee
            onHandleSubmit={onHandleSubmit}
            setCurrentPage={setCurrentPage}
            data={item}
            handleClose={handleClose}
          />
        )
      }
    </div>
  )
}