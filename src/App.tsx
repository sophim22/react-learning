import {ChangeEvent, FC, useState} from 'react';
import { InTask } from './ts/Interface';
import TaskItem from './components/TaskItem';
const App: FC=()=> {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [taskList, setTaskList] = useState<InTask[]>([]);
  const handleChange=(event: ChangeEvent<HTMLInputElement>): void =>{
    if (event.target.name === 'task'){
      setTask(event.target.value);
    }else{
      setDeadline(Number(event.target.value));
    }
  }
  const handleSubmit=(): void=>{
    if (task && deadline){
      const newTask = {taskName: task, deadline: deadline}
      setTaskList([...taskList, newTask])
      setTask("");
      setDeadline(0);
    }else {
      alert("All field required!")
    }
  }
  const handleDelete =(taskDelete: string) : void=>{
    setTaskList(taskList.filter((task)=>{
      return task.taskName !== taskDelete;
    }))
  }
  return (
    <div className='App bg-lime-50 h-screen'>
      <div className='bg-white shadow-sm flex justify-center items-center p-5'>
        <p className='text-2xl font-bold text-yellow-500'>To do List</p>
      </div>
      <div className='mt-12 w-6/12 mx-auto bg-white shadow-md rounded-md'>
        <div className='p-5 flex items-center justify-between'>
          <input type="text" name='task' value={task} placeholder='Task name...' className='outline-none border-2 border-gray-300 px-3 py-2 rounded-md focus:border-blue-300 focus:shadow-sm' onChange={handleChange} />
          <input type='number' name='deadline' value={deadline} placeholder='Deadline(days)...' className='outline-none border-2 border-gray-300 px-3 py-2 rounded-md focus:border-blue-300 focus:shadow-sm' onChange={handleChange} />
          <button className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-400 transition duration-500 ease-in-out' onClick={handleSubmit}>Add Task</button>
        </div>
      </div>
      <div className='mt-12 grid grid-col-1 gap-5'>
        {
          taskList.map((task: InTask, key: number)=>{
            return (
              <TaskItem task={task} key={key} handleDelete={handleDelete} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
