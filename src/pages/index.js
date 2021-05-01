import React, {useState} from 'react'
// import FancyCard from '../components/FancyCard';
import Footer from '../components/Footer';
import HeroSection from '../components/Herosection';
import InfoSection from '../components/InfoSection';
import { homeObj1, homeObj2 } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle} />
            <HeroSection/>
            <InfoSection {...homeObj1}/>
            <Timeline/>
            <Projects/>
            <InfoSection {...homeObj2}/>
            {/* <FancyCard/> */}
            <Footer/>

        </>
    )
}

export default Home
