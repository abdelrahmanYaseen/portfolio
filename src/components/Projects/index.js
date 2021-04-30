import React, {useEffect} from 'react'
import icon1 from '../../images/svg-1.svg'
import icon2 from '../../images/svg-2.svg'
import icon3 from '../../images/svg-3.svg'
import { ProjectsCard, ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsIcon, ProjectsP, ProjectsWrapper } from './ProjectsElements'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(()=> {
        Aos.init({duration: 1000});

    }, []);
    return (
        <ProjectsContainer id = 'projects'>
            <ProjectsH1> My Projects</ProjectsH1>
            <ProjectsWrapper >
                <ProjectsCard data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                    <ProjectsIcon src = {icon1}/>
                    <ProjectsH2> h2 tag1</ProjectsH2>
                    <ProjectsP> projects p1</ProjectsP>
                </ProjectsCard>
                <ProjectsCard data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                    <ProjectsIcon src = {icon2}/>
                    <ProjectsH2> h2 tag2</ProjectsH2>
                    <ProjectsP> projects p2</ProjectsP>
                </ProjectsCard>
                <ProjectsCard data-aos="flip-up" rotationDirection={Math.random() >= 0.5}>
                    <ProjectsIcon src = {icon3}/>
                    <ProjectsH2> h2 tag3</ProjectsH2>
                    <ProjectsP> projects p3</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
            
        </ProjectsContainer>
    )
}

export default Projects
