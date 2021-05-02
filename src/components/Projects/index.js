import React, {useEffect, useState} from 'react'
import icon1 from '../../images/svg-1.svg'
// import icon2 from '../../images/svg-2.svg'
// import icon3 from '../../images/svg-3.svg'
import { ProjectsCard,ClosePopupButton,PopupImage,PopupImageWrapper,VBar, PopupDescWrapper, PopupContent, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper} from './ProjectsElements'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Popup from '../Popup'
const Projects = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup  = () =>{
        console.log('xxxxxxxxxxx')
        return setShowPopup(true);
    }

    useEffect(()=> {
        Aos.init({duration: 1000});

    }, []);
    return (
        <ProjectsContainer id = 'projects'>
            <ProjectsH1> My Projects</ProjectsH1>         
            <ProjectsWrapper >
                <ProjectsCard onClick={openPopup}  data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                    <ProjectsIcon src = {icon1}/>
                    <ProjectsH2> h2 tag1</ProjectsH2>
                    <ProjectsP> projects p1</ProjectsP>
                    {showPopup ? <Popup isOpen={true}/>: null }
                </ProjectsCard>
            </ProjectsWrapper>
            
        </ProjectsContainer>
    )
}

export default Projects
