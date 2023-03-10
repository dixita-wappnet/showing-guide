import React from 'react'
import Dashboard from '../Components/Dashboard'
import Header from '../Layouts/Header'
import SlideBar from '../Layouts/SlideBar'

function Home() {
  return (
    <>
      <div className='flex flex-row h-screen w-screen'>
        <SlideBar />
        <div className='flex flex-col w-full'>
          <Header />
          <Dashboard/>
        </div>
        
      </div>
      
      
    </>
  )
}

export default Home
