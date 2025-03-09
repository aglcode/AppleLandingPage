import React from 'react'

const Features = () => {
  return (
    <section className='min-h-screen bg-dark flex flex-col justify-center items-center px-8'>
      
      <div className='w-[300px] h-[500px] bg-mediumGray rounded-xl mb-10'></div>

      {/* Feature Texts */}
      <div className="max-w-6xl w-full grid grid-cols-2 gap-10 text-gray-300">
        {/* Left Side Features */}
        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-semibold text-white">All-Day Battery Life</h3>
            <p className="text-gray-400">Stay powered with up to 22 hours of battery life, designed for seamless productivity.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Liquid Retina XDR Display</h3>
            <p className="text-gray-400">A stunning 1000-nit display with true-to-life colors and ProMotion technology.</p>
          </div>
        </div>

        {/* Right Side Features */}
        <div className="space-y-16 text-right">
          <div>
            <h3 className="text-xl font-semibold text-white">M3 Pro & M3 Max Chips</h3>
            <p className="text-gray-400">Blazing-fast performance with next-gen Apple silicon for creatives and professionals.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Immersive Audio Experience</h3>
            <p className="text-gray-400">Six-speaker sound system with spatial audio for cinematic sound quality.</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Features
