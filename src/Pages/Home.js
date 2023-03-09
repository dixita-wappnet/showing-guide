import React from 'react'
import Header from '../Layouts/Header'
import SlideBar from '../Layouts/SlideBar'

function Home() {
  return (
    
      <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <SlideBar />
        <div className='w-full'>
          <Header />
        </div>
      </div>
   
  )
}

export default Home
