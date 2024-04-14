const tasks = [
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

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3>{task.text}</h3>))}
        </>
    )
}

export default Tasks
