import React from 'react'
import { FilterControl } from './FilterControl'
import Task from './Task'
import { useState } from 'react'

export default function TaskList({tasks, setTask, filterStatus, setFilterStatus, filteredTasks, setFilteredTasks, theme}) {


    const clearCompleted = ()=> {
    //Clear's Tasks by filtering out
      setTask(tasks.filter((task)=> !task.status))
    //With Firebase we can delete a document
    
    
    // Reset the filterStatus to all
      setFilterStatus("all")
  }
  return (
    <div className='task-list-wrapper'>
        <div className='task-list'>
            {filteredTasks.map((task) => {
                // console.log(task)
                return <Task 
                    // id = {task.id} 
                    key = {task.id}
                    text = {task.text} 
                    status = {task.status}
                    task = {task}
                    tasks = {tasks}
                    setTask = {setTask}
                    setFilteredTasks = {setFilteredTasks}/>
            })}
        </div>

        <div className={`task-items-info ${theme}`}>
            <p>{`${filteredTasks.length} Tasks`}</p>
            <FilterControl
            filterStatus = {filterStatus}
            setFilterStatus = {setFilterStatus}/>
            <div className='items-clear'>
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
        </div>
        
       

    </div>
  )
}

