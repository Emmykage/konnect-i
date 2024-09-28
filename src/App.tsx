import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/main'
import Mentors from './pages/mentors'
import MentorUser from './pages/mentors/mentorUser/MentorUser'
import Booking from './pages/booking'
import Job from './pages/job'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen overflow-y-auto'>
      <Routes>
      <Route path="/" element={<MainLayout> <Home/></MainLayout>}/>
      <Route path="/mentors" element={<MainLayout> <Mentors/></MainLayout>}/>
      <Route path="/job" element={<MainLayout> <Job/></MainLayout>}/>
      <Route path="/booking" element={<MainLayout> <Booking/></MainLayout>}/>
      <Route path="/mentors/:id" element={<MainLayout> <MentorUser/></MainLayout>}/>

      </Routes>
    
    </div>
  )
}

export default App
