import React from 'react'
import Dashboard from '../Components/Dashboard'
import Header from '../Layouts/Header'
import SlideBar from '../Layouts/SlideBar'

function Home() {
  return (
    <>
      <div className='flex flex-row max-lg:flex-col' > 
        <SlideBar />
        <div className='flex flex-col max-lg:justify-center max-lg:items-center max-lg:mt-10'>
          <Header />
          <Dashboard/>
        </div>
        
      </div>
      
      
    </>
  )
}

export default Home
