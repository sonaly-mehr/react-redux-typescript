import React from 'react';
import { ITask } from './interface';
import '../ToDoList/Todo.css'

interface Props {
    task: ITask;
    completeTask(DeleteTaskName: string): void
}
const Task = ({ task, completeTask }: Props) => {

    return (
        <div className='task-section'>
            <div className="task-content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={()=> completeTask(task.taskName)} className="delete-btn">X</button>
        </div>
    );
};

export default Task;