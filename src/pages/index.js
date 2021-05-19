import React, { useEffect, useState } from 'react';
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
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";




const Home = () => {
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;

    const [isOpen, setIsOpen] = useState(false);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    const toTop = () => {
        scroll.scrollToTop();
    }
    const toBottom = () => {
        scroll.scrollToBottom();
    }

    const projects_array = Object.values(Projects_data) 

    // [Project1, Project2, Project3, Project4]

    return (
        <>
        <div
            style = {{
                // 'height':'30%',
                // 'width':'100%',
                'font-size':'35px',
                'display':'flex',
                'flex-direction':'column',
                'color':'#01bf71',
                'position':'fixed',
                'z-index':'100',
                'bottom':'0',
                'right':'2px',
                'cursor':'pointer',
                '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
            }}
             >
             {offset !==0? <a onClick={toTop} >▲</a>:' '}
             {offset < -150+(document.body.offsetHeight - window.innerHeight)?
             <a onClick={toBottom}>▼</a>
             :
             ' '
            }
             
                {/* <IoIosArrowDropup onClick={toTop} size = {'10%'}/>
                <IoIosArrowDropdown onClick={toBottom} size = {'10%'}/> */}
            </div>

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
