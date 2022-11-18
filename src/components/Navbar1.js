import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/nc1.png'
// import bsnlogo from '../assets/vertueallogofillsized.png'
import { NavLink } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'


const routes = [
    'home',
    'about',
    'portfolio',
    'contact'
]





const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <button
        type='button'
        onClick={customFunc}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
        <span style={{ background: dotColor }}
            className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}

    </button>
)
const Navbar1 = () => {
    const { activeMenu, activeNavbar, setActiveNavbar, setActiveMenu,
        currentColor,
        screenSize, setScreenSize } = useStateContext()


    const activeLink = 'flex items-center h-8 gap-5 pl-4 pr-4 pt-0 pb-0 rounded-lg text-white text-md mt-2 '

    const normalLink = 'flex items-center h-8 gap-5 pl-4 pr-4 pt-0 pb-0  rounded-lg text-md text-white mt-2 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray '




    useEffect(() => {
        const handleResize = () => setScreenSize
            (window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize();

        return () => window.removeEventListener
            ('resize', handleResize)

    }, [])

    useEffect(() => {
        setActiveMenu(false)
        if (screenSize >= 900) {
            setActiveNavbar(true)//initially when the screen is big
            setActiveMenu(false)
            if (activeMenu) {
                setActiveNavbar(false)

            }
            else {

                setActiveNavbar(true)
            }

        }
        else if (screenSize >= 900 && activeMenu) {
            setActiveNavbar(false)//when screen is big and the menu is on
            setActiveMenu(true)

        }
        else if (activeMenu) {
            setActiveNavbar(false)

        }

        else {
            setActiveNavbar(false) //initially if screen size is small
        }
    }, [screenSize])
    return (
        <div className="flex justify-between content-center items-center font-bold capitalize self-center md:mx-6 relative">
            <div className="flex-none -mb-4 ">
                <NavButton title='Menu' customFunc={() =>
                    setActiveMenu((prevActionMenu) =>
                        !prevActionMenu)} color={currentColor} icon={<AiOutlineMenu />} />
            </div>
            {activeNavbar && !activeMenu &&
                <div className='flex w-full text-white h-auto items-center text-xl font-bold justify-between' >
                    <NavLink className='flex items-center -mb-8' to={'/'}>
                        <img className='w-24 h-24' src={logo} alt='logo' />
                        <h3 className='stroke-cyan-500 stroke-4 -mt-4'>
                            NC Artworks
                        </h3>
                    </NavLink>

                    <div>
                        {routes.map((r, i) => (
                            <button className='mx-2 capitalize' key={i}>
                                <NavLink to={`/${r}`}
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? '#22d3ee' : ''
                                    })}

                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}>
                                    {r}
                                </NavLink>
                            </button>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar1


