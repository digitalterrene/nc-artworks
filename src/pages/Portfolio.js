import React, { useState } from 'react'
import '../components/Css.css'
import Tabs from '../components/Tabs'

import i from '../assets/1.jpeg'
import i2 from '../assets/2.jpeg'
import i3 from '../assets/3.jpeg'
import i4 from '../assets/4.jpeg'
import iwl1 from '../assets/wl1.jpeg'
import iwl2 from '../assets/wl2.jpeg'
import iwl from '../assets/wl.jpeg'






// const tabs = [
//     'Wildlife',
//     'Pets',
//     'Potraits',
//     'Still Life ',
//     'Landscape',
//     'Genre'

// ]

const Gallery = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div className=" grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src={i3} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500" />
                <img alt="" className="l rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={i} />
                <img alt="" className=" rounded shadow-sm min-h-48 dark:bg-gray-500"
                    src={i2} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={i4} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={iwl1} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={iwl2} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={iwl} />
                <img src={i} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
            </div>
        </section>
    )
}

const Portfolio = () => {
    //const [tabFS, setTabFS] = useState('')
    const [activeTab, setActiveTab] = useState()
    // const [loading, setLoading] = useState(false)
    // const [searchedSites, setSearchedSites] = useState([])

    const changeTab = (newTab) => {
        //console.log(newTab)
        setActiveTab(newTab)
        if (activeTab) {
           // console.log(activeTab.text)
            //setTabFS(activeTab.text)
        }
    }


    return (
        <div >
            <Tabs changeTab={changeTab} activeTab={activeTab} />
            <Gallery />
        </div>
    )
}

export default Portfolio