import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
import TaskContainer from "./components/TaskContainer";
import PageLayout from "./components/PageLayout";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])  // Ajout de dependency array pour prevenir le 'useEffect' a chaque 'render()'
  // C'est comme le lifecycle event 'ComponentDidMount'

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/todos').catch((e) => setError(e))
    if (!res.ok) {
      setError({message: "Failed to fetch tasks", status: 500})
      throw {message: "Failed to fetch tasks", status: 500}
    }
    return res.json()
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/todos/${id}`)
    return res.json()
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:8080/todos',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })
    const data = await res.json()
    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const res = await fetch(`http://localhost:8080/todos/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

    setTasks(
      tasks.map(
        (task) => task.id === id ?
          {...task, reminder: updTask.reminder} : task
      )
    )
  }

  if (error) throw error
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<PageLayout showAddTask={showAddTask} setShowAddTask={setShowAddTask()}/>}>
          <Route index
                 element={<TaskContainer
                   showAddTask={showAddTask}
                   addTask={addTask}
                   tasks={tasks}
                   deleteTask={deleteTask}
                   toggleReminder={toggleReminder}/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>
    </div>

  )
    ;
}

export default App;
