import { useState } from 'react'
import { type setEnableStateType } from '../types'

type Props = {
    componentName: string,
    setNavbarBtn: setEnableStateType
}
export const NavbarButton: React.FC<Props> = ({ componentName, setNavbarBtn }) => {
    const [showNavbarComponent, setHiddeNavbarComponent] = useState(true)

    const handlerNavbarButton = (state: string, setEnableState: setEnableStateType) => {
        if (showNavbarComponent) {
            if (state == 'Add') setEnableState({
                enableAdd: true,
                enableSearch: false,
                enableFilter: false,
            })
            if (state == 'Search') setEnableState({
                enableAdd: false,
                enableSearch: true,
                enableFilter: false,
            })
            if (state == 'Filter') setEnableState({
                enableAdd: false,
                enableSearch: false,
                enableFilter: true,
            })
            setHiddeNavbarComponent(false)

        } else {
            setEnableState({
                enableAdd: false,
                enableSearch: false,
                enableFilter: false,
            })
            setHiddeNavbarComponent(true)

        }
    }

    return (
        <button
            className='transition bg-slate-400 hover:bg-slate-500 text-gray-800 font-bold py-2 px-4 rounded-full m-auto w-24'
            onClick={() => handlerNavbarButton(componentName, setNavbarBtn)}
        >
            {componentName}
        </button>
    )
}