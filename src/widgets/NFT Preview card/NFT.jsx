import React from 'react'
import Equilibrium from './images/image-equilibrium.jpg'
import Avatar from './images/image-avatar.png'
const NFT = () => {
  return (
    <>
    <img src={Equilibrium} alt="e" />
    <p> Our Equilibirum collection promotes balance and calm </p>

    <div className='flex flex-row'>
      <img className='bg-zinc-500	' src={Avatar} alt="c" />
      <p className='mb-2'>Creation of jules Wyvern</p>
    </div>
    </>
    
    
  )
}

export default NFT