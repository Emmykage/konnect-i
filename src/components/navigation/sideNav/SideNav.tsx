import { Logo } from '../../../assets/Icons'
import NavItems from '../../NavItems/NavItems'
import './sideNav.scss'
const SideNav = () => {
  return (
    <aside className='sideNav  px-2 shrink-0 w-16 lg:w-48 h-full bg-gray-50 py-20 flex flex-col items-center'>
        <a href="" className='text-2xl text-gray-950 font-semibold flex items-center gap-2'>
            <Logo/>
            <span className='hidden lg:block'>
            Konnet


            </span>

        </a>
        <NavItems/>
        
    </aside>
  )
}

export default SideNav