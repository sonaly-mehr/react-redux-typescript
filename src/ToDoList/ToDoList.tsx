import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { ITask } from './interface';
import Task from './Task';
import '../ToDoList/Todo.css'

const ToDoList = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline]= useState<number>(0)
    const [todoList, setToDoList] = useState<ITask[]>([])


    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
          setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
      };

      const addTask = (event: MouseEvent<HTMLButtonElement>): void => {
          event.preventDefault();
        const newTask = { taskName: task, deadline: deadline };
        setToDoList([...todoList, newTask]);
        setTask("");
        setDeadline(0);
        console.log("list",todoList)
      };

      const completeTask = (DeleteTaskName: string): void=> {
          setToDoList(todoList.filter((task)=> {
              return task.taskName !== DeleteTaskName;
          }))
      }
    return (
        <div className='todo_list'>
            <div className="container">
                <form action="" className='todo-container'>
                    <input type="text" placeholder='Enter task' name='task' value={task} onChange={handleChange}/>
                    <input type="number" placeholder='Deadline(in days)' name='deadline' value={deadline} onChange={handleChange}/>
                    <button onClick={addTask}>Add To Do</button>
                </form>
                <div className='todo-list'>
                        {
                            todoList.map((task: ITask, key: number)=> {
                                return <Task key={key} task={task} completeTask={completeTask}/>
                            })
                        }
                    </div>
            </div>
        </div>
    );
};

export default ToDoList;