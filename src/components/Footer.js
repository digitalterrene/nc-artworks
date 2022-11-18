import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className='flex justify-between px-6 my-20'>
      <div className='w-1/2 text-2xl font-bold uppercase'>
        <h1>Nigel Chris Artworks</h1>
      </div>
      <div className='flex w-1/2 justify-end text-2xl'>
        <BsFacebook  className='mx-4'/>
        <IoLogoWhatsapp className='mx-4'/>
        <AiFillInstagram className='mx-4'/>
      </div>
    </footer>
  )
}

export default Footer