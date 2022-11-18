import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [activeNavbar, setActiveNavbar] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [storeNAME, setStoreNAME] = useState('Init')
    const [siteName, setSiteName] = useState('Vertueal Site')
    const [siteAccessKey, setAccessKey] = useState('Vertueal-Site')
    const [siteLogo, setSiteLogo] = useState('')
    const [authUserData, setAuthUserData] = useState(null)

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }
    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }


    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings,
                storeNAME,
                activeNavbar,
                setActiveNavbar,
                siteName, 
                setSiteName,
                siteLogo,
                siteAccessKey, 
                setAccessKey, 
                setSiteLogo,
                setStoreNAME,
                authUserData, 
                setAuthUserData,
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)