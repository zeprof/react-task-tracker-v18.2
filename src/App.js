import {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Preparer mon cours de projet',
                day: '9 Septembre @ 14:25',
                reminder: true,
            },
            {
                id: 2,
                text: 'Partir le 1er Sprint',
                day: '10 Septembre @ 09:00',
                reminder: false,
            },
            {
                id: 3,
                text: 'Faire le Daily Standup Meeting',
                day: '10 Septembre @ 10:00',
                reminder: false,
            },
        ]
  )

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
      <Header/>
      {tasks.length > 0 ?
       <Tasks tasks={tasks}
       onDelete={deleteTask}
       onToggle={toggleReminder}/>
       : 'No tasks'}
    </div>
  );
}

export default App;
