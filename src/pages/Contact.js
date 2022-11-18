import React from 'react'
import '../components/Css.css'
import logo from '../assets/nc.png'
import nigel from '../assets/n2.jpeg'
import nigel1 from '../assets/n3.jpeg'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlinePhone } from 'react-icons/ai'

// backgroundImage: `url("https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614__340.jpg")`
const Poster = () => {
    return (
        <div className='flex h-full w-full mb-8 bg-transparent'>
            <div className='w-full h-72 shadow-2xl  bg-gradient-to-l from-zinc-900 to-transparent'>
            </div>
            <img src={logo} alt='foto' className='h-96 w-1/2 items-center rounded-b-3xl' style={{
                height: 420,
                width: 420,
                backgroundRepeat: 'no-repeat'

            }} />
            <div className='shadow-2xl  bg-gradient-to-r from-zinc-900 to-transparent w-full h-72'>
            </div>
        </div>
    )
}

const OurTeam = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                <p className="max-w-2xl text-center dark:text-gray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={nigel} />
                        <p className="text-xl font-semibold leading-tight">Nigel Chris Surname</p>
                        <p className="dark:text-gray-400">Founder and Artist</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={nigel1} />
                        <p className="text-xl font-semibold leading-tight">That American Dude</p>
                        <p className="dark:text-gray-400">Sales Manager</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Contact = () => {
     return (
        <div style={{height:'100%'}}>
            <div>
                <Poster />
                <div style={{ paddingTop: 'auto' }} className='mt-auto'>
                    <div className=''>
                        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
                            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Contact Us</h1>
                                <div className='flex  justify-between'>
                                <div className=' text-center justify-center flex  flex-col content-center'>
                                    <span className='text-3xl text-amber-900  self-center'>
                                        <AiOutlinePhone />
                                    </span>
                                    <p>+263 012 345 6789</p>
                                </div>
                                <div className='ml-4 text-center justify-center flex flex-col content-center'>
                                    <span className='text-3xl text-amber-900 self-center'>
                                        <HiOutlineMail />
                                    </span>
                                    <p>nigel@gmail.com</p>
                                </div>
                            </div>
                                <p className="max-w-2xl text-center dark:text-gray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <OurTeam />
        </div>
    )
}

export default Contact
