import React from 'react'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Showcase from './components/Showcase.jsx'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
   <Hero />
   <Features />
   <Showcase />
   </main>
  )
}

export default App