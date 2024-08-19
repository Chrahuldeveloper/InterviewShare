import React from 'react'
import { Companies, Navbar, TrendingExperience } from '../components'

export default function Home() {
  return (
    <div className='overflow-x-clip'>
      <Navbar/>
      <Companies/>
      <img src="https://files.codingninjas.in/group-48095788-29192.svg" alt="" />
      <TrendingExperience/>
    </div>
  )
}
