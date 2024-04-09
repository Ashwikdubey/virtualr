// import React from 'react'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Workflow from './components/Workflow'

const App = () => {
  return (
    <>
     <Navbar /> 
     <div className='max-w-7xl mx-auto px-6 mt-20'>
     <Hero/>
     </div>
     <Features/>
     <Workflow/>
     <Pricing/>
     <Testimonials/>
     <div className='w-full h-[0.1rem]  bg-neutral-700'></div>
     <Footer/>
    </>
  )
}

export default App
