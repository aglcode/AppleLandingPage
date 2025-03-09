import React from 'react'

const Hero = () => {
  return (
    <section className=' h-screen bg-dark flex flex-col justify-center items-center text-center px-4'>
    <div className=' flex flex-col items-center'>
    <h1 className=' text-[20vw] font-bold bg-gradient-to-r from-gray-400 to-gray-600
    bg-clip-text text-transparent'>
      APPLE
    </h1>
    <p className=' text-mediumGray text-lg mt-4'>
    The all-new MacBook Pro with M3 chip. Power meets elegance in every keystroke.
    </p>
    <div className="mt-10 animate-bounce text-lightGray">
      ▾
    </div>
    </div>
  </section>
  )
}

export default Hero