import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/nc1.png'
const routes = [
    'home',
    'about',
    'portfolio',
    'contact'
]

const Navbar = () => {


    const activeLink = 'flex items-center h-8 gap-5 pl-4 pr-4 pt-0 pb-0 rounded-lg text-white text-md mt-2 '

    const normalLink = 'flex items-center h-8 gap-5 pl-4 pr-4 pt-0 pb-0 text-white  rounded-lg text-md dark:hover:text-black hover:bg-light-gray '

    return (
        <div className='flex w-full text-white h-auto  text-xl font-bold p-4 justify-between' >
            <NavLink className='flex items-center' to={'/'}>
                <img className='w-24 h-24' src={logo} alt='logo'/>
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
    )
}

export default Navbar