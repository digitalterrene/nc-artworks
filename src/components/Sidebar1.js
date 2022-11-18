import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logow.png'



import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';


const pages = [
    'home',
    'about',
    'services',
    'contacts',
    'custom'
]

const routes = [
    'home',
    'about',
    'portfolio',
    'contact',
    'Catalogue'
]


const Sidebar1 = () => {

    const { activeMenu, setActiveMenu,
        screenSize, currentColor } = useStateContext();



    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

    return (
        <div style={{background:'white'}} className=' -mt-8 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {
                activeMenu &&
                <>
                    <div className='flex justify-between items-center'>
                        <Link to='/' onClick={handleCloseSideBar}
                            className='items-center gap-3 mi-3 mt-4
                                        flex text-xl font-extrabold tracking-tight 
                                        dark:text-white text-slate-900'>
                            {/* <SiShopware className='text-3xl' /> */}
                            <div className="flex self-center pl-4  items-center capitalize">
                                <img className='w-16 h-16 pr-2' src={logo} alt='bsnlogo' />
                                <h3 className='-mt-4'>NC Artworks</h3>
                            </div>
                        </Link>
                        <button
                            type='button'
                            onClick={() => setActiveMenu(
                                (prevActiveMenu) => !prevActiveMenu
                            )}
                            style={{
                                color: 'rgb(153, 171, 180)',
                                borderRadius: '50%'
                            }}
                            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className='mt-10 font-bold'>
                        {
                            routes.map((link) => (
                                <NavLink to={`/${link}`}
                                    key={link}
                                    onClick={handleCloseSideBar}

                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? currentColor : ''
                                    })}

                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}>
                                    <span className='capitalize'>
                                        {link}
                                    </span>
                                </NavLink>
                            ))
                        }
                    </div>

                </>}
        </div>
    )
}

export default Sidebar1