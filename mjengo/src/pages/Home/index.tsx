import React from 'react'
import { NavBar } from '../../components/NavBar'
import { ViewPost } from './Blog'

export const HomePage = () => {
  return (
    <>
<NavBar />
<button ><a href="/addpost">+ post</a></button>
<ViewPost />
    </>
  )
}
