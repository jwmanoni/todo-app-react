import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import { useState, useEffect} from 'react';

// Todos for Todo App
// Part 1:
// - Finish up minor css
// - Create a data array of objects (todos)
// - Create a state that holds that tasks data
// - Pass that data to Tasklist and map through to create Task component for each task
// - Destrcture props and make Task dynamic
// Part 2:
// - Pass tasks and setTasks state to TaskInput
// - Create input state
// - Set up handleChange function to update input state
// - set value of input to input
// - Create handleForm function to create new Task

const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];


function App() {

  const [tasks, setTask] = useState(data)
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const [filterStatus, setFilterStatus] = useState('all')
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const handleFilter = () => {
      if(filterStatus === 'active') {
        // console.log('hello')
        setFilteredTasks(tasks.filter((task) => task.status === false))
      }
      else if (filterStatus === 'completed') {
        setFilteredTasks(tasks.filter((task) => task.status === true))
      } 
      else {
        setFilteredTasks(tasks)
      }
    }
    handleFilter()
  },[tasks, filterStatus])

  const changeTheme = () => {
    if(theme === ''){
      setTheme('light')
    } else {
      setTheme('')
    }
  }

  const lightDarkIcon = theme == 'light' ? (<img onClick={changeTheme} src='./images/icon-moon.svg' alt = 'sun'/>) : (<img onClick={changeTheme} src='./images/icon-sun.svg' alt = 'sun'/>)
 

  

  



  return (
    <div className={`App ${theme}`}>
      <div className='container'>
        <div className='header'>
          <h1>TODO</h1>
          {/* <img onClick={changeTheme} src='./images/icon-sun.svg' alt = 'sun'/> */}
          {lightDarkIcon}
        </div>
        <TaskInput tasks = {tasks} setTask = {setTask} filteredTasks = {filteredTasks}/>
        <TaskList 
        theme = {theme}
        tasks = {tasks}
        setTask = {setTask}
        filterStatus = {filterStatus}
        setFilterStatus = {setFilterStatus}
        filteredTasks = {filteredTasks}
        setFilteredTasks = {setFilteredTasks}/>
      </div> 
    </div>
  );
}

export default App;
