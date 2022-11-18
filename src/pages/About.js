import React from 'react'
import '../components/Css.css'
import logo from '../assets/nc.png'

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

const About = () => {
     return (
        <div style={{ }}>
            <div>
                <Poster />
                <div style={{ paddingTop: 'auto' }} className='mt-auto'>
                    <div className=''>
                        <div className='shadow-inner '>
                            <h1 className='text-center py-16 text-3xl font-bold'>Our 5 'W's</h1>
                        </div>
                        <p className='px-20 py-4 mt-8 text-2xl text-center mx-20'>
                            <p className='text-center'><a className="underline decoration-sky-500 bg-sky-500 px-2 rounded-xl mx-2">Who</a>
                                I’m <a className="underline decoration-pink-500">Nigel Chris</a>..., an artist based in
                                <a className="underline decoration-sky-500 bg-sky-500 px-2 rounded-xl mx-2">Where</a>
                                <a className="underline decoration-pink-500"> Harare.</a>
                                <a className="underline decoration-sky-500 bg-sky-500 px-2 rounded-xl mx-2">Why</a>I passionately specialize
                                <a className="underline decoration-sky-500 bg-sky-500 px-2 rounded-xl mx-2">What</a> in Pencil Artistry at
                                <a className="underline decoration-pink-500"> NC Artworks</a>.
                                <a className="underline decoration-sky-500 bg-sky-500 px-2 rounded-xl mx-2">When</a> If you like <a className="underline decoration-pink-500">paintings</a>,
                                get in tough and i guarantee
                                    it will knock your socks offf....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget condimentum leo. Praesent sem nisi, fringilla sit amet eros placerat, pellentesque consequat libero. Sed pretium et sapien et volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nulla urna, placerat id posuere non, posuere sed tellus. Nunc laoreet ultrices dolor, in laoreet tortor accumsan a. Etiam sed erat blandit, tristique felis non, volutpat mauris. Morbi vitae leo nec leo molestie cursus eu nec sem. Mauris nec aliquet elit. Mauris eget neque a metus egestas mollis.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
