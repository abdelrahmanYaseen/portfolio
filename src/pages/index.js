import React, {useState} from 'react'
// import FancyCard from '../components/FancyCard';
import Footer from '../components/Footer';
import HeroSection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2,homeObj3 } from '../components/InfoSection/InfoData';
import {Projects_data} from '../components/Projects/ProjectsData';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline';
// import MarginCalculator from '../Tools/MarginCalculator';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const projects_array = Object.values(Projects_data) 

    // [Project1, Project2, Project3, Project4]

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle} />
            <HeroSection/>
            {/* <MarginCalculator/> */}
            <InfoSection {...homeObj1}/>
            <Timeline/>
            <Projects projects_array = {projects_array}/>
            <InfoSection {...homeObj2}/>
            <InfoSection {...homeObj3}/>
            {/* <FancyCard/> */}
            <Footer/>

        </>
    )
}

export default Home
