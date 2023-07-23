import { useEffect, useState } from 'react'
import './App.css'
import { ListTasks } from './components/ListTasks'
import { getTasks } from './utils/fetch'
import { AddTaskButton } from './components/AddTask'
import { SearchTasksInput } from './components/Search'
import { FilterStatusButton } from './components/FilterStatus'
import { NavbarButton } from './components/NavbarButton'
import {
  type TaskStatus,
  type ListOfTasks,
} from './types'
import {
  MOCK,
  STATUS,
  NAVBAR_BTN_STATUS
} from './utils/const'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ListOfTasks>(MOCK)
  const [navbarBtn, setNavbarBtn] = useState(NAVBAR_BTN_STATUS)

  useEffect(() => {
    getTasks().then((response) => setTasks(response || MOCK));
  }, [])

  return (
    <>
      <main className='container w-auto flex flex-col'>
        <header className='bg-slate-300 py-4'>
          <h1
            className='text-emerald-700 font-bold text-center text-3xl m-4 mb-6'
          >
            TUPACA CHALLENGE
          </h1>
          <nav className='flex mx-20'>
            <NavbarButton componentName={'Add'} setNavbarBtn={setNavbarBtn} />
            <NavbarButton componentName={'Search'} setNavbarBtn={setNavbarBtn} />
            <NavbarButton componentName={'Filter'} setNavbarBtn={setNavbarBtn} />
          </nav>

          <div className={navbarBtn.enableAdd ? 'block p-4' : 'hidden'}>
            <AddTaskButton setTasks={setTasks} />
          </div>
          <div className={navbarBtn.enableSearch ? 'block p-4' : 'hidden'}>
            <SearchTasksInput tasks={tasks} setTasks={setTasks} />
          </div>
          <div className={navbarBtn.enableFilter ? 'block px-10 py-4' : 'hidden'}>
            <div className='grid grid-cols-2 gap-2 gap-x-0 mx-5'>
              <FilterStatusButton
                tasks={tasks} setTasks={setTasks}
              />
              <FilterStatusButton
                status={STATUS.nostarted as TaskStatus}
                tasks={tasks}
                setTasks={setTasks}
              />
              <FilterStatusButton
                status={STATUS.started as TaskStatus}
                tasks={tasks}
                setTasks={setTasks}
              />
              <FilterStatusButton
                status={STATUS.done as TaskStatus}
                tasks={tasks}
                setTasks={setTasks}
              />
            </div>
          </div>
        </header>
        <ListTasks tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  )
}

export default App
