import React, {useState} from 'react'
import Sidebar from "../Header/Sidebar/Sidebar";
import Navbar from "../Header/Navbar/Navbar"
import Sponsors from "../Sponsors/Sponsors";
import OldAthletes from "../Athletes/oldAthletes";
import Wallpaper from "../Header/Wallpaper/Wallpaper";
import About from "../About/About";
import DataCoaches from "../Coaches/dataCoaches";
import DataAthletes from "../Athletes/dataAthletes";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      {/*<HeroSection/>*/}

      <Wallpaper/>
      <About/>
      <DataCoaches />
      <DataAthletes/>
      <About/>
      <Sponsors/>
    </div>
  )
}

export default Home;