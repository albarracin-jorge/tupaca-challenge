import { useEffect, useState } from 'react'
import './App.css'
import { ListTasks } from './components/ListTasks'
import { getTasks } from './utils/fetch'
import { NavbarButton } from './components/NavbarButton'
import { NavbarComponents } from './components/NavbarComponents'
import { SortButton } from './components/SortButton'
import {
  type ListOfTasks,
} from './types'
import {
  MOCK,
  NAVBAR_BTN_STATUS,
  NAVBAR_OPTIONS
} from './utils/const'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ListOfTasks>(MOCK)
  const [navbarBtn, setNavbarBtn] = useState(NAVBAR_BTN_STATUS)
  const [showNavbarComponent, setHiddeNavbarComponent] = useState(true)

  useEffect(() => {
    getTasks().then((response) => setTasks(response || MOCK));
  }, [])

  return (
    <>
      <main className='w-auto flex flex-col'>
        <header className='bg-slate-300 py-4 pb-0'>
          <h1
            className='text-emerald-500 text-center text-3xl m-4 mb-10'
          >
            TUPACA CHALLENGE
          </h1>
          <nav className='flex px-20 pb-5 shadow-lg w-full lg:px-96'>
            {NAVBAR_OPTIONS.map((componentName) => (
              <NavbarButton
                key={componentName}
                componentName={componentName}
                navbarBtn={navbarBtn}
                setNavbarBtn={setNavbarBtn}
                showNavbarComponent={showNavbarComponent}
                setHiddeNavbarComponent={setHiddeNavbarComponent}
              />
            )
            )}
          </nav>
          <NavbarComponents
            tasks={tasks}
            setTasks={setTasks}
            navbarBtn={navbarBtn}
          />
        </header>
        <div className='max-w-xl mx-auto'>
          <SortButton
            name='Nombre'
            sortBy={'title'}
            tasks={tasks}
            setTasks={setTasks}
          />
          <SortButton
            name='Fecha'
            sortBy='date'
            tasks={tasks}
            setTasks={setTasks}
          />
          <ListTasks tasks={tasks} setTasks={setTasks} />
        </div>
      </main>
    </>
  )
}

export default App
