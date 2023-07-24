import {
    type setEnableStateType,
    type navbarBtnType,
    type ListOfTasks,
    type TaskStatus,
    type setTasksType
} from '../types'
import { getTaskByStatus, getTasks } from '../utils/fetch'


export const handlerNavbarButton = (
    state: string,
    navbarBtn: navbarBtnType,
    setEnableState: setEnableStateType
) => {
    if (state == 'Agregar') {
        if (navbarBtn.enableAdd) {
            setEnableState({
                enableAdd: false,
                enableSearch: false,
                enableFilter: false,
            })
        } else {
            setEnableState({
                enableAdd: true,
                enableSearch: false,
                enableFilter: false,
            })
        }
    }
    if (state == 'Buscar') {
        if (navbarBtn.enableSearch) {
            setEnableState({
                enableAdd: false,
                enableSearch: false,
                enableFilter: false,
            })
        } else {
            setEnableState({
                enableAdd: false,
                enableSearch: true,
                enableFilter: false,
            })
        }
    }
    if (state == 'Filtrar') {
        if (navbarBtn.enableFilter) {
            setEnableState({
                enableAdd: false,
                enableSearch: false,
                enableFilter: false,
            })
        } else {
            setEnableState({
                enableAdd: false,
                enableSearch: false,
                enableFilter: true,
            })
        }
    }
}

export const handleFilterByStatus = async (status: TaskStatus, tasks: ListOfTasks, setTasks: setTasksType) => {
    if (!status) {
        const result = await getTasks();
        setTasks(result as ListOfTasks || tasks);
    } else {
        const result = await getTaskByStatus(status);
        setTasks(result as ListOfTasks || tasks);
    }
}

export const handlerSort = (sortBy: string, tasks: ListOfTasks, setTasks: setTasksType) => {
    if (sortBy === 'title') {
        const tasksCopy = [...tasks];
        const tasksSorted = tasksCopy.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        setTasks(tasksSorted);
    }
    if (sortBy === 'date') {
        const tasksCopy = [...tasks];
        const tasksSorted = tasksCopy.sort((a, b) => {
            return a.date.localeCompare(b.date);
        });
        setTasks(tasksSorted);
    }
}