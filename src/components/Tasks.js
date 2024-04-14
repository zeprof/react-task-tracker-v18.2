import Task from './Task'
const Tasks = ({tasks, onDelete}) => {
    return (
        // tasks.push()  ne fonctionne pas puisque tasks est immuable
        // il faut plutot faire la ligne suivante
        // setTasks([...tasks, {}])  utilise le spread operator ...
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks