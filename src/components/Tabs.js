import React, { useState } from 'react'
import { BiSearch, BiStore } from 'react-icons/bi'
import { FaGlobeAmericas } from 'react-icons/fa'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { RiShieldUserLine } from 'react-icons/ri'
// import home from '../images/final/home.svg'
// import dashboard from '../images/final/layout-2.svg'
// import assets from '../images/final/hard-drive.svg'
// import participants from '../images/final/users.svg'
// import settings from '../images/final/settings.svg'
import '../components/Tabs.css'

const tabs = [
    'Wildlife',
    'Pets',
    'Self-Potraits',
    'Genre',
    'Landscape',
    'Still'
]



export default function Tabs({changeTab, activeTab}) {


    const handleClick = (newTab) => {
        console.log(newTab)
        changeTab(newTab)
    }
    return (
        <div className='tabs' style={{
            display: 'flex',height:'100%',width:'100%', justifyContent: 'space-evenly',
            alignItems: 'center', flexDirection: 'row'
        }}>
            {
                tabs.map((t,i) => (
                    <button key={i}
                    className={ activeTab === t ? 'active' :''}
                    onClick={() => handleClick(t)}>
                        {t}
                    </button>
                ))
            }

        </div>
    )
}