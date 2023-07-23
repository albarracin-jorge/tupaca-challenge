import { useEffect, useState } from "react";
import { type ListOfTasks } from "../types";
import { getTaskByTitle, getTasks } from "../utils/fetch";

type Prop = {
    tasks: ListOfTasks,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>
}

export const SearchTasksInput: React.FC<Prop> = ({ tasks, setTasks }) => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        handleFilterByTitle(search);
    }, [search])

    const handleFilterByTitle = async (search: string) => {
        if (!search) {
            const result = await getTasks();
            setTasks(result as ListOfTasks || tasks);
        } else {
            const result = await getTaskByTitle(search);
            setTasks(result as ListOfTasks || tasks);
        }
    }

    return (
        <>
            <input
                className="flex mx-auto p-2 my-4 bg-transparent border-b-2 border-emerald-700 text-emerald-700"
                type="text"
                placeholder="Buscar..."
                onChange={event => setSearch(event.target.value)}
            />
        </>
    )
}