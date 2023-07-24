import { type setEnableStateType, navbarBtnType } from '../types'
import { handlerNavbarButton } from '../utils/handler';

type Props = {
    componentName: string,
    navbarBtn: navbarBtnType,
    setNavbarBtn: setEnableStateType,
    showNavbarComponent: boolean,
    setHiddeNavbarComponent: React.Dispatch<React.SetStateAction<boolean>>
}
export const NavbarButton: React.FC<Props> = ({ componentName, navbarBtn, setNavbarBtn }) => {

    return (
        <button
            className='transition bg-slate-400 hover:bg-slate-500 text-gray-800 font-bold py-2 px-4 rounded-full m-auto w-24'
            onClick={() => handlerNavbarButton(componentName, navbarBtn, setNavbarBtn)}
        >
            {componentName}
        </button>
    )
}