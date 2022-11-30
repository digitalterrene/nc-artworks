import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Footer = () => {
  const wl = 263713219603
  return (
    <footer className='flex justify-between px-6 my-20'>
      <div className='w-1/2 text-2xl font-bold uppercase'>
        <h1 className='text-xl lg:text-2xl'>Nigel Chris Artworks</h1>
      </div>
      <div className='flex w-1/2 justify-end text-2xl'>
        <BsFacebook className='mx-4' />
        <Link to={`https://wa.me/+${wl}`}>
          <IoLogoWhatsapp className='mx-4' />
        </Link>
        <AiFillInstagram className='mx-4' />
      </div>
    </footer>
  )
}

export default Footer