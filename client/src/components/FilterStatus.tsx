import React from 'react'
import { handleFilterByStatus } from '../utils/handler'
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

    return (
        <button
            className='transition bg-emerald-500 hover:bg-emerald-600 text-gray-800 font-bold py-2 px-4 rounded-full m-auto w-3/4 lg:w-36'
            onClick={() => handleFilterByStatus(status as TaskStatus, tasks, setTasks)}
        >
            {status || 'Todos'}
        </button>
    )
}