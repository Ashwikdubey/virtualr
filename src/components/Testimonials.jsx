import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-center tracking-wide lg:text-6xl sm:text-4xl text-3xl'>What people are saying</h1>
      <div className='flex my-10 flex-wrap p-4'>
        {testimonials.map((elem,index)=>(
            <div key={index} className='lg:w-1/3 sm:w-1/2 w-full'>
                <div className='py-5 px-4 mx-2 my-4 bg-neutral-900 border border-neutral-800 rounded-lg'>
                   <p className='font-thin'>{elem.text}</p>
                   <div className='flex items-center mt-10'>
                      <img src={elem.image} className='rounded-full h-10 w-10' alt="" />
                      <div className='ml-3'>
                        <p>{elem.user}</p>
                        <p className='text-neutral-700 italic text-sm'>{elem.company}</p>
                      </div>
                   </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
