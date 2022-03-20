import React, { useState } from 'react'
import Check from '../images/icon-check.svg'

export default function Task({text, task, tasks, setTask, setFilteredTasks}) {

    const [mutableTask, setMutableTask] = useState(task);

    const checked = mutableTask.status ? 'checked' : '';
    const checkIcon = mutableTask.status ? (<img src={Check} alt='checked'/>) : '';
    

    const markCompleted = () => {
        // console.log(mutableTask)
        //What should happen when  click?
        //Update CSS to marked
        //Switch the task status
        console.log(mutableTask)
        setMutableTask({...mutableTask, status: !mutableTask.status})
        const updatedTasks = tasks.map((item) => {
            return task.id === item.id ? {...item, status : !item.status} : item
        })
        console.log(updatedTasks)
        setTask(updatedTasks)
    }

  return (
    <div className='task-item'>
        <div className='check' onClick={markCompleted}>
            <div className={`check-mark ${checked}`}>
                {checkIcon}
            </div>
        </div>

        <div className={`task-text ${checked}`}>
            <p>{text}</p>
        </div>
        
    </div>
  )
}
