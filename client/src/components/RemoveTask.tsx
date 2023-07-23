import { deleteTask, getTasks } from "../utils/fetch"
import { type ListOfTasks } from "../types"

type Props = {
    id: string,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>
}

export const RemoveTaskButton: React.FC<Props> = ({ id, setTasks }) => {
    const handleRemoveTaskButton = async (id: string) => {
        await deleteTask(id);
        const updateTasks = await getTasks();
        setTasks(updateTasks as ListOfTasks)
    }

    return (
        <>
            <button
                className="bg-red-400 hover:bg-red-600 text-white font-bold rounded h-8 w-8"
                onClick={() => handleRemoveTaskButton(id)}
            >
                ✘
            </button>
        </>
    )
}