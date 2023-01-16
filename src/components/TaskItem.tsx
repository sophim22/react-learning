import React from 'react'
import { InTask } from '../ts/Interface';

interface Props {
    task: InTask;
    handleDelete(taskDelete: string): void;
};

const TaskBoard = ({task, handleDelete}: Props) => {
  return (
    <div className='w-6/12 mx-auto'>
      <div className='flex bg-purple-300 w-full justify-between items-center rounded-lg text-white'>
        <p className='px-3'>{task.taskName}</p>
        <p className='px-3'>{task.deadline} days</p>
        <button className='bg-red-500 px-5 py-3 text-white rounded-r-md' onClick={()=>handleDelete(task.taskName)}>X</button>
      </div>
    </div>
  )
}

export default TaskBoard;