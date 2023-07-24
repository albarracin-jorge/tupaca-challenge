import { AddTaskButton } from '../components/AddTask'
import { SearchTasksInput } from '../components/Search'
import { FilterStatusButton } from '../components/FilterStatus'
import { STATUS } from "../utils/const"
import { ListOfTasks, type TaskStatus } from '../types'

type Props = {
    tasks: ListOfTasks,
    setTasks: React.Dispatch<React.SetStateAction<ListOfTasks>>,
    navbarBtn: {
        enableAdd: boolean,
        enableSearch: boolean,
        enableFilter: boolean
    },
}
export const NavbarComponents: React.FC<Props> = ({ tasks, setTasks, navbarBtn }) => {
    return (
        <>
            <div className={navbarBtn.enableAdd ? 'block p-4 bg-slate-300 shadow-lg transition' : 'hidden'}>
                <AddTaskButton setTasks={setTasks} />
            </div>
            <div className={navbarBtn.enableSearch ? 'block p-4 bg-slate-300 shadow-lg' : 'hidden'}>
                <SearchTasksInput tasks={tasks} setTasks={setTasks} />
            </div>
            <div className={navbarBtn.enableFilter ? 'block px-10 py-4 bg-slate-300 shadow-lg' : 'hidden'}>
                <div className='grid grid-cols-2 gap-2 gap-x-0 lg:mx-[620px]'>
                    <FilterStatusButton
                        tasks={tasks} setTasks={setTasks}
                    />
                    {STATUS.map((status) => (
                        <FilterStatusButton
                            key={status}
                            status={status as TaskStatus}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    )
}