import { FaMoon , FaSun} from 'react-icons/fa';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdSpaceDashboard } from 'react-icons/md'
import PropTypes from 'prop-types';
const Header = ({darkMode, toggleDarkMode, toggleSideBar}) => {
  return (
    <nav className="fixed top-0 z-50 flex w-full border-b bg-white  border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div className="px-3 py-3 lg:px-5 lg:py-3 w-full">
              <div className="flex justify-between w-full items-center">
                 <div className="flex items-center rtl:justify-end justify-between">
                     <button className='inline-flex ml-2 dark:text-white' onClick={toggleSideBar}>
                         <HiOutlineMenuAlt2 className='text-2xl' />
                     </button>
                     <a href="#" className='flex items-center ml-2 gap-2'>
                        <MdSpaceDashboard className='text-lime-900'/>
                        <span className='self-center text-xl font-semibold sm:text-xl whitespace-nowrap dark:text-white'>Dax bod</span>
                     </a>
                 </div>
                    <button className='dark:bg-slate-50 dark:text-slate-700 rounded-full p-2 flex justify-end' onClick={toggleDarkMode}>
                      {darkMode ? < FaSun/> : <FaMoon/>}
                      </button>
              </div>
         </div>
    </nav>
  )
}

export default Header

Header.propTypes = {
  darkMode: PropTypes.any,
  toggleDarkMode: PropTypes.any,
  toggleSideBar: PropTypes.any
}