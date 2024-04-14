import {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])  // Ajout de dependency array pour prevenir le 'useEffect' a chaquer 'render()'
  // C'est comme le lifecycle event 'ComponentDidMount'

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log("toggler reminder ", 1)
    setTasks(
      tasks.map(
        (task) => task.id === id ?
          {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
       <Tasks tasks={tasks}
       onDelete={deleteTask}
       onToggle={toggleReminder}/>
       : 'No tasks'}
    </div>
  );
}

export default App;
