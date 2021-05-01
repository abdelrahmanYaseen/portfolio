import React, {useEffect} from 'react'
import icon1 from '../../images/svg-1.svg'
// import icon2 from '../../images/svg-2.svg'
// import icon3 from '../../images/svg-3.svg'
import { ProjectsCard,ClosePopupButton,PopupImage,PopupImageWrapper,VBar, PopupDescWrapper, PopupContent, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper} from './ProjectsElements'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Modal from 'react-modal'
import {MdClose} from 'react-icons/md'

const style = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content:{
        top: '90px',
        width:'80%',
        height:'80%',
        position: 'absolute',
        border: '1px solid #ccc',
        background: '#f9f9f9',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        margin: 'auto',
        zindex:20,
        // padding: '20px',
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    }
}
const Projects = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});

    }, []);
    return (
        <ProjectsContainer id = 'projects'>
            <ProjectsH1> My Projects</ProjectsH1>
            <Modal style={style} isOpen={true}>
                <PopupContent>
                    <PopupImageWrapper>
                        <PopupImage src = {require('../../images/project-graphics.gif').default}/>
                    </PopupImageWrapper>
                    <VBar/>
                    <PopupDescWrapper>
                    <h1> Are You Ready?</h1>
                    <p>some random text</p>
                    </PopupDescWrapper>
                    <ClosePopupButton><MdClose/></ClosePopupButton>
                </PopupContent>
            </Modal>
            
            <ProjectsWrapper >
                <ProjectsCard data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                    <ProjectsIcon src = {icon1}/>
                    <ProjectsH2> h2 tag1</ProjectsH2>
                    <ProjectsP> projects p1</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
            
        </ProjectsContainer>
    )
}

export default Projects
