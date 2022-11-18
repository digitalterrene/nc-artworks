import React from 'react'
import '../components/Css.css'
import n2 from '../assets/n3.jpeg'
const Poster = () => {
  return (
    <div className='flex h-full w-full'>
      <div className='w-1/2 h-72 shadow-2xl  bg-gradient-to-l from-stone-500 to-transparent'>
      </div>
      <div className='-mt-24 mb-28 shadow-2xl rounded-2xl border w-1/2'>
        <h1 className='landingNG'>Nigel Chris</h1>
        <img className='w-full rounded-b-2xl' src={n2} alt='artit' />
      </div>
      <div className='shadow-2xl  bg-gradient-to-r from-stone-500 to-transparent w-1/2 h-72'>
      </div>
    </div>
  )
}

const Landing = () => {
  //function that switches the images of Nigel
  // const [ims, setIms] = useState([n,n1,n2])
  // const [chosen, setChosen] = useState(ims[0])
  // useEffect(()=>{
  //   setInterval(() => {
  //     const images = ims
  //     for(let i = 0; i<= images.length; i++){
  //        setChosen(images[i])
  //        return chosen
  //     }
  //     console.log(chosen)
  //   }, 1000);
  // },[ims, chosen])


  return (
    <div style={{ }}>
      <div>
        <Poster />
        <div style={{ paddingTop: 'auto' }} className='mt-auto'>
          <div className=''>
            <div className='shadow-inner '>
              <h1 className='landingNGH'>Our Art Our Passion</h1>
            </div>
            <p className='px-12 py-4 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra risus ut tincidunt tincidunt. Praesent vel risus nec dui dictum ornare. Aliquam erat volutpat. Maecenas non consequat ex. Sed libero magna, mattis finibus scelerisque id, venenatis vitae erat. Nunc ac placerat nunc, ac vestibulum sem. Quisque id purus sodales libero lacinia scelerisque nec non tellus. Nulla id elit nec lectus euismod interdum nec vel tellus.
            </p>
          </div>
        </div>
      </div>
        <div className="flex justify-center -space-x-14">
          <div className="mix-blend-multiply w-64 h-64 rounded-full bg-blue-400 ..."></div>
          <div className="mix-blend-multiply w-64 h-64 rounded-full bg-pink-400 ..."></div>
          <div className="mix-blend-multiply w-64 h-64 rounded-full bg-pink-400 ..."></div>
        </div>
    </div>
  )
}

export default Landing
