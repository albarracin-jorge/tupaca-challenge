import React from 'react'
import { getTaskByStatus, getTasks } from '../utils/fetch'
import { type TaskStatus, type ListOfTasks } from '../types'

type Props = {
    status?: TaskStatus,
    tasks: ListOfTasks,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>
}

export const FilterStatusButton: React.FC<Props> = ({
    status = false,
    tasks,
    setTasks
}) => {
    const handleFilterByStatus = async (status: TaskStatus) => {
        if (!status) {
            const result = await getTasks();
            setTasks(result as ListOfTasks || tasks);
        } else {
            const result = await getTaskByStatus(status);
            setTasks(result as ListOfTasks || tasks);
        }
    }
    return (
        <button
            className='transition bg-emerald-500 hover:bg-emerald-600 text-gray-800 font-bold py-2 px-4 rounded-full m-auto w-2/3'
            onClick={() => handleFilterByStatus(status as TaskStatus)}
        >
            {status || 'Todos'}
        </button>
    )
}