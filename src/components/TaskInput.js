import React, { useState } from 'react'
import TaskList from './TaskList'



export default function TaskInput({tasks, setTask, filteredTasks}) {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const generateId = (array) => {
      console.log(array)
      const taskIDs = array.map((item) => item.id)
      console.log(taskIDs)
      const newId = Math.max(...taskIDs) + 1
      return newId
  }
    const handleForm = (e) => {
        e.preventDefault()
        
        
        const newTask = {
            id: generateId(filteredTasks),
            text: input,
            status: false,
    
        }
        console.log(newTask.id)
        setTask([newTask, ...tasks])
        setInput('')
        
        // console.log("Entered")
        
    }
   

  return (
    <div className='task-input'>
          <div className='check'>
            <div className='check-mark'>

            </div>
          </div>
          <div className='new-todo-input'>
            <form onSubmit={handleForm}>
              <input value = {input} onChange={handleChange} id='todo-input' type='text' placeholder='Create a new todo...'/>
            </form>
          </div>
    </div>
  )
}
