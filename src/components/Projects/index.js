import React, {useEffect, useState} from 'react'
import { IoIosArrowDropdownCircle,IoIosArrowDropupCircle } from "react-icons/io";


import {  ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper, ScrollUp, ShowMoreButton} from './ProjectsElements'
import Aos from 'aos'
import 'aos/dist/aos.css'


import Popup from '../Popup'


const Projects = (props) => {
    
    const [showNumber, setShowNumber] = useState(3);
    const [showPopup, setShowPopup] = useState(false);
    const [popup_id, setPopup_id] = useState(0);

    const showMore = () => {
        var x = showNumber+1
        while (true){
            if (x%3 === 0) {
                break;
            }
            x++
        }
        x = Math.min(x, props.projects_array.length)
        setShowNumber(x);
    }
    const showLess = () => {
        setTimeout(() => {
            var x = showNumber
            while (true){
                if (x <= 3) {
                    break;
                }
                x--;
            }
            x = Math.max(x, 3)
            setShowNumber(x);

        }, 500);

    }

    const openPopup  = (id = 0) => {
        setPopup_id(id);
        console.log(id);
        window.scrollTo(0,window.scrollY+1);
        setShowPopup( prev => !prev);
        if (!showPopup){
            document.body.setAttribute('style', `overflow: hidden;`)
        } else {
            document.body.setAttribute('style', ``)
        }
    }


    useEffect(()=> {
        Aos.init({duration: 1000, once: true, mirror:true});

    }, []);

    const projects = props.projects_array.slice(0,showNumber).map( item => {
        return (
            <ProjectsCard id = {'project_'.concat(item.id.toString())} key={item.id} onClick={() => openPopup(item.id)}  data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                <ProjectsIcon src = {item.icon}/>
                <ProjectsH2>{item.title}</ProjectsH2>
                <ProjectsP>{item.description}</ProjectsP>
            </ProjectsCard>
            

        )
    })

    return (
        <ProjectsContainer id = 'projects'>
                <ProjectsH1> Some of My Projects</ProjectsH1>

                <ProjectsWrapper >
                
                        {projects}
                    
                </ProjectsWrapper>

                <ShowMoreButton >
                    {showNumber < props.projects_array.length ?
                    <IoIosArrowDropdownCircle onClick={showMore} size={40}/>
                    :
                    <ScrollUp smooth={1}  duration={600} spy={true} exact='true' offset ={-80}  onClick={showLess} to="projects">
                            <IoIosArrowDropupCircle  size={40} />
                    </ScrollUp>
                    }
                </ShowMoreButton>


                {showPopup ?      
                <Popup setShowPopup={() => openPopup(popup_id)}
                    title = {props.projects_array[popup_id].popup.title}
                    description = {props.projects_array[popup_id].popup.description}
                    btnLabel = {props.projects_array[popup_id].popup.btnLabel}
                    btnLink = {props.projects_array[popup_id].popup.btnLink}
                    img = {props.projects_array[popup_id].popup.img}/> : null}
        </ProjectsContainer>
    )
}

export default Projects
