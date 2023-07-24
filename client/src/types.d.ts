export interface TaskType {
    _id: string,
    title: string,
    description: string,
    status: string,
    date: string,
}

export type ListOfTasks = TaskType[];

export type TaskStatus = 'Por hacer' | 'En progreso' | 'Hecho';

export type TaskForm = {
    title: string,
    description: string,
}

export type setTasksType = React.Dispatch<React.SetStateAction<ListOfTasks>>

export type setEnableStateType = React.Dispatch<React.SetStateAction<navbarBtnType>>

export type navbarBtnType = {
    enableAdd: boolean,
    enableSearch: boolean,
    enableFilter: boolean,
}