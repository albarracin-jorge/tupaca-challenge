import { ListOfTasks, TaskStatus, type TaskType } from "../types"
import { useState } from "react"
import { RemoveTaskButton } from "./RemoveTask"
import { updateTaskStatus } from "../utils/fetch"
import { STATUS } from "../utils/const"

interface Props {
    task: TaskType,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>
}

export const Task: React.FC<Props> = ({ task, setTasks }) => {
    const [status, setStatus] = useState(task.status);

    const [nostarted, started, done] = STATUS;

    let statusClass = 'bg-gray-200 hover:bg-gray-300 shadow-gray-400';
    if (status == started) statusClass = 'bg-blue-300 hover:bg-blue-400 shadow-blue-400 hover:shadow-blue-500';
    if (status == done) statusClass = 'bg-green-300 shadow-green-400';

    const handlerUpdateTaskStatus = () => {

        if (status == nostarted) {
            updateTaskStatus(task._id, started as TaskStatus)
                .then((response) => console.log(response));
            setStatus(started)
        }
        if (status == started) {
            updateTaskStatus(task._id, done as TaskStatus)
                .then((response) => console.log(response));
            setStatus(done)
        }
    }
    return (
        <>
            <div className={`my-4 p-4 w-full flex justify-between items-center rounded shadow-lg transition duration-300 ${statusClass} hover:cursor-pointer`} onClick={handlerUpdateTaskStatus}>
                <div className="">
                    <h3 className="text-lg">{task.title}</h3>
                    <p className="text-xs w-60">{task.description}</p>
                </div>
                <RemoveTaskButton id={task._id} setTasks={setTasks} />
            </div >
        </>
    )
}