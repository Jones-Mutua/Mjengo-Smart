import React from 'react'
import { Foot } from '../../components/Footer/footer'
import { NavBar } from '../../components/NavBar'
import SectionThree from '../../components/subs'
import Slider from './carousel'
import { AppSection } from './section'
import { AboutUs } from './Service'
import { TopSection } from './top'
// import { ViewPost } from './Blog'

export const HomePage = () => {
  return (
    <>
<NavBar />
<Slider />
<TopSection />
<AppSection />
<AboutUs />
{/* <button ><a href="/addpost">+ post</a></button> */}
{/* <ViewPost /> */}
<SectionThree />
<Foot />
    </>
  )
}
