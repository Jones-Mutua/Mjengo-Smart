import React from 'react'
import { Foot } from '../../components/Footer/footer'
import { NavBar } from '../../components/NavBar'
import { Abouts } from './Abouts'

export const About = () => {
  return (
   <>
   <NavBar />

   {/* <h1>About Us</h1> */}
   <Abouts />
   <Foot />
   </>
  )
}
