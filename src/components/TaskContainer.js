import AddTask from "./AddTask";
import Tasks from "./Tasks";

const TaskContainer = (props) => (
  <>
    {props.showAddTask && <AddTask onAdd={props.addTask}/>}
    {props.tasks.length > 0 ?
      <Tasks tasks={props.tasks}
             onDelete={props.deleteTask}
             onToggle={props.toggleReminder}/>
      : 'No tasks'}
  </>
)

export default TaskContainer