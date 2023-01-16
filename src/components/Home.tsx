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
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState('list');
  const [item, setItem] = useState<IEmployee>();

  const onDelete = (dataDelete: IEmployee): void => {
    const emIndex = employee.indexOf(dataDelete);
    setEmployee(employee.filter((data) => data.id !== employee[emIndex].id))
  }
  const onHandleAdd = (newEmployee: IEmployee): void => {
    if (isEdit) {
      const filterData = employee.filter((data)=> data.id === newEmployee.id)[0];
      const index = employee.indexOf(filterData);
      const em = employee;
      em[index] = newEmployee;
      setEmployee(em)
    } else {
      setEmployee([...employee, newEmployee])
    }
  }
  const handleCloseForm = (): void => {
    setCurrentPage('list');
    setIsEdit(false);
  }
  const onClickEditEmployee = (dataEdit: IEmployee): void => {
    setItem(dataEdit);
    setCurrentPage('new');
    setIsEdit(true);
  }
  return (
    <div>
      {
        currentPage === 'list' && (
          <EmployeeList
            list={employee}
            onDelete={onDelete}
            setCurrentPage={setCurrentPage}
            onClickEdit={onClickEditEmployee} />
        )
      }
      {
        currentPage === 'new' && (
          <NewEmployee
            onHandleAdd={onHandleAdd}
            setCurrentPage={setCurrentPage}
            data={item}
            handleCloseForm={handleCloseForm}
          />
        )
      }
    </div>
  )
}