import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
const Hero = () => {
  return (
    <div className='flex mt-6 lg:mt-20 flex-col items-center'>
      <h1 className='lg:text-7xl sm:text-6xl text-4xl tracking-wide text-center'>VirtualR build tools{" "} 
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>for developers</span>
      </h1>
      <p className='text-neutral-500 max-w-4xl text-lg text-center mt-10'>
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools.
        Get started today and turn your imagination into immersive reality!
      </p>
      <div className='lg:flex lg:flex-row flex flex-col items-center my-10'>
        <a href="#" className='px-4 py-3 lg:space-y-0 space-y-3 bg-gradient-to-r from-orange-500 to-orange-900 rounded-md'>Start for free</a>
        <a href="#" className='px-4 py-3 lg:mt-0 mt-3  border mx-3 rounded-md'>Documentation</a>
      </div>
      <div className='flex justify-center px-10 items-center'>
        <video muted autoPlay loop className='w-1/2 mx-2 my-4 rounded-lg border border-orange-700 shadow-orange-400'>
            <source src={video1} />
        </video>
        <video muted autoPlay loop className='w-1/2 mx-2 my-4 rounded-lg border border-orange-700 shadow-orange-400'>
            <source src={video1} />
        </video>
      </div>
    </div>
  )
}

export default Hero
