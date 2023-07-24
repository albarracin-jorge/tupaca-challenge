import { type ListOfTasks } from "../types";
import { handlerSort } from "../utils/handler";
type Props = {
    tasks: ListOfTasks,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>,
    name: string,
    sortBy: string
}
export const SortButton: React.FC<Props> = ({ tasks, setTasks, name, sortBy }) => {
    return (
        <button
            className='rounded-full bg-slate-400 text-white px-4 py-2 mt-4 ml-8 opacity-70 hover:bg-slate-500'
            onClick={() => handlerSort(sortBy, tasks, setTasks)}
        >
            {name}
        </button>
    )
}