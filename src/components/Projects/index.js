import React, {useEffect, useState} from 'react'
// import icon2 from '../../images/svg-2.svg'
// import icon3 from '../../images/svg-3.svg'
import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper} from './ProjectsElements'
import Aos from 'aos'
import 'aos/dist/aos.css'


import Popup from '../Popup'


const Projects = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popup_id, setPopup_id] = useState(0);
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

    const projects = props.projects_array.map( item => {
        return (
            <ProjectsCard key={item.id} onClick={() => openPopup(item.id)}  data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                <ProjectsIcon src = {item.icon}/>
                <ProjectsH2>{item.title}</ProjectsH2>
                <ProjectsP>{item.description}</ProjectsP>
            </ProjectsCard>
            

        )
    })

    return (
        <ProjectsContainer id = 'projects'>
            <ProjectsH1> My Projects</ProjectsH1>

            <ProjectsWrapper >
                {projects}
            </ProjectsWrapper>
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
