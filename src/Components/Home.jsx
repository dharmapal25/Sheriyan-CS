import React, { useEffect } from 'react'
import "../App.css"
import Windows from './Windows'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
const Home = () => {



  // const GOOGLE_MAP_URL = "google.com/maps";
  useEffect(() => {
  }, [])

  return (
    <div>

      <div className="desktop-view">

        <TopNav />
        {/* <iframe src="https://mhmdmhd6.github.io/Mac-OS-Desktop/" frameborder="0"></iframe> */}


        {/* <Windows /> */}
        <BottomNav />
        <div>
        </div>
      </div>

    </div>
  )
}

export default Home