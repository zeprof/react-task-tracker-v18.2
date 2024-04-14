const Tasks = ({tasks}) => {
    return (
        // tasks.push()  ne fonctionne pas puisque tasks est immuable
        // il faut plutot faire la ligne suivante
        // setTasks([...tasks, {}])  utilise le spread operator ...
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
