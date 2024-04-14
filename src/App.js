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
    console.log('delete', id)
  }

  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
