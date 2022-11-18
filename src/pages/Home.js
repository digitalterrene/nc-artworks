import React from 'react'
import '../components/Css.css'
import iwl1 from '../assets/wl1.jpeg'

// backgroundImage: `url("https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614__340.jpg")`
const Poster = () => {
  return (
    <div className='flex h-full w-full mb-8 bg-transparent'>
      <div className='w-full h-72 shadow-2xl  bg-gradient-to-l from-zinc-900 to-transparent'>
      </div>
        <img src={iwl1} alt='foto' className='h-96 w-1/2 items-center rounded-b-3xl' style={{
          height: 420,
          width:620,
          backgroundRepeat: 'no-repeat'

        }} />
      <div className='shadow-2xl  bg-gradient-to-r from-zinc-900 to-transparent w-full h-72'>
      </div>
    </div>
  )
}

const Home = () => {
 return (
    <div style={{}}>
      <div>
        <Poster />
        <div style={{ paddingTop: 'auto' }} className='mt-auto'>
          <div className=''>
            <div className='shadow-inner '>
              <h1 className='landingNGH'>The Artistry Which We Offer</h1>
            </div>
            <p className='px-20 py-4 mt-8 text-2xl text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra risus ut tincidunt tincidunt. Praesent vel risus nec dui dictum ornare. Aliquam erat volutpat. Maecenas non consequat ex. Sed libero magna, mattis finibus scelerisque id, venenatis vitae erat. Nunc ac placerat nunc, ac vestibulum sem. Quisque id purus sodales libero lacinia scelerisque nec non tellus. Nulla id elit nec lectus euismod interdum nec vel tellus.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center -space-x-14 mt-20">
        <div className="mix-blend-multiply flex items-center content-center justify-center w-64 h-64 rounded-full bg-blue-400 ...">
          <div className='w-56 h-56 rounded-full flex items-center justify-center bg-zinc-50'>
            <h1 className='font-bold text-2xl'>Satisfaction</h1>
          </div>
        </div>
        <div className="mix-blend-multiply w-64 h-64 flex items-center content-center justify-center rounded-full bg-pink-400 ...">
          <div className='w-56 h-56 rounded-full flex items-center justify-center bg-zinc-50'>
            <h1 className='font-bold text-2xl'>Quality</h1>
          </div>
        </div>
        <div className="mix-blend-multiply flex items-center content-center justify-center w-64 h-64 rounded-full bg-emerald-400 ...">
          <div className='w-56 h-56 rounded-full flex items-center justify-center bg-zinc-50'>
            <h1 className='font-bold text-2xl'>Value</h1>
          </div>
        </div>
      </div>
      <h1 className='text-6xl uppercase font-bold mt-20 flex justify-center'>guaranteed</h1>
    </div>
  )
}

export default Home
