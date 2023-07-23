import { type ListOfTasks } from "../types"
import { Task } from "./Task"

interface Props {
    tasks: ListOfTasks,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>
}
export const ListTasks: React.FC<Props> = ({ tasks, setTasks }) => {
    return (
        <div className="m-8">
            {tasks.map((task) => (
                <Task
                    key={task._id}
                    task={task}
                    setTasks={setTasks}
                />
            ))}
        </div>
    )
}