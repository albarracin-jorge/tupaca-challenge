import { useState, type SyntheticEvent } from "react";
import { addTask, getTasks } from "../utils/fetch";
import { ListOfTasks } from "../types";

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>
}
export const AddTaskButton: React.FC<Props> = ({ setTasks }) => {
    const [title, setTitle] = useState('Agrega una tarea!');
    const [description, setDescription] = useState('Describe tu tarea!');

    const handlerForm = async (event: SyntheticEvent) => {
        event.preventDefault();

        await addTask({ title, description });
        const updateTasks = await getTasks();
        setTasks(updateTasks as ListOfTasks);
    }
    return (
        <form onSubmit={handlerForm} className="flex flex-col mx-auto">
            <input
                className="mx-auto p-2 my-4 bg-transparent border-b-2 border-emerald-700 text-emerald-700"
                type="text"
                placeholder={title}
                onChange={event => setTitle(event.target.value)}
            />
            < input
                className="mx-auto p-2 my-4 bg-transparent border-b-2 border-emerald-700 text-emerald-700"
                type="text"
                placeholder={description}
                onChange={event => setDescription(event.target.value)}
            />
            <button
                className='transition bg-emerald-500 hover:bg-emerald-600 text-gray-800 font-bold py-2 px-8 rounded-full m-auto'
            >
                Agregar
            </button>
        </form >
    )
}