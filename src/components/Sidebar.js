import React from 'react'
import { NavLink } from 'react-router-dom'

const routes = [
    'home',
    'about',
    'portfolio',
    'contact',
    'Catalogue'
]

const Sidebar = () => {


    const activeLink = 'flex items-center h-8 gap-5 pl-4 pr-4 pt-0 pb-0 rounded-lg text-white text-md mt-2 '

    const normalLink = 'flex items-center h-8 gap-5 pl-4 pr-4 pt-0 pb-0 text-white  rounded-lg text-md dark:hover:text-black hover:bg-light-gray '

    return (
        <div style={{
            position: 'absolute', left: 0, top: 0, background: 'gray'
        }} className="h-full p-3 space-y-2 w-54 h-full dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center p-2 space-x-4">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 className="text-lg font-semibold">Nigel Chris</h2>
                    <span className="flex items-center space-x-1">
                        <p className="text-xs hover:underline dark:text-gray-400">
                            Founder and Artist
                        </p>
                    </span>
                </div>
            </div>
            <div className="divide-y divide-gray-700">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    {routes.map((r, i) => (
                        <li key={i} className="dark:bg-gray-800 capitalize dark:text-gray-50">
                            <p className="flex items-center p-2 space-x-3 rounded-md">
                                <NavLink to={`/${r}`}

                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? '#22d3ee' : ''
                                    })}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink}>
                                    <span>{r}</span>
                                </NavLink>
                            </p>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar