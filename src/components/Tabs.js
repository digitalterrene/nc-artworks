import React from 'react'
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
                        <p className='text-sm lg:text-2xl'>
                        {t}
                        </p>
                    </button>
                ))
            }

        </div>
    )
}