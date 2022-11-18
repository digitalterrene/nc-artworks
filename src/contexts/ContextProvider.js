import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const [toggleNavbar, setToggleNavbar] = useState(true)

    return (
        <StateContext.Provider
            value={{
                toggleSidebar, 
                setToggleSidebar,
                toggleNavbar, 
                setToggleNavbar
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)