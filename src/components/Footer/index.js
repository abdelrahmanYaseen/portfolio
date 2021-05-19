import React from 'react'
import { FooterContainer, FooterLinkS, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'
import {Projects_data} from '../Projects/ProjectsData';
import {awards_data} from '../InfoSection/awardsData';
import timelineElements from "../Timeline/TimelineElements";

const experiences = timelineElements.map( item => {
    return (
        <FooterLinkS 
        smooth={1} 
        duration={500} 
        spy={true} exact='true' offset ={-80} to = {'experience_'.concat(item.id.toString())}> 
        {item.short_title}
        </FooterLinkS>
    )
})

const awards_array = Object.values(awards_data) 
const awards = awards_array.map( item => {
    return (
        <FooterLinkS 
        smooth={1} 
        duration={500} 
        spy={true} exact='true' offset ={-80} to = {'award_'.concat(item.id.toString())}> 
        {item.year}
        </FooterLinkS>
        

    )
})
const projects_array = Object.values(Projects_data) 
const projects = projects_array.map( item => {
    return (
        <FooterLinkS 
        smooth={1} 
        duration={500} 
        spy={true} exact='true' offset ={-80} to = {'project_'.concat(item.id.toString())}> 
        {item.title}
        </FooterLinkS>
        

    )
})


const Footer = () => {
    return (
        <>
         <FooterContainer>
             <FooterWrap>
                 <FooterLinksContainer>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle>Navigation</FooterLinkTitle>
                                 <FooterLinkS smooth={1}  duration={500} spy={true} exact='true' offset ={-80} to="about"> About</FooterLinkS>
                                 <FooterLinkS smooth={1}  duration={500} spy={true} exact='true' offset ={-80} to="experienceTimeLine"> Experience Timeline</FooterLinkS>
                                 <FooterLinkS smooth={1}  duration={500} spy={true} exact='true' offset ={-80} to="projects"> Projects</FooterLinkS>
                                 <FooterLinkS smooth={1}  duration={500} spy={true} exact='true' offset ={-80} to="awards"> Awards</FooterLinkS>
                                 <FooterLinkS smooth={1}  duration={500} spy={true} exact='true' offset ={-80} to="contact"> Contact</FooterLinkS>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle> Projects</FooterLinkTitle>
                                 {projects}
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle> Awards</FooterLinkTitle>
                                 {awards}
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle>Experiences</FooterLinkTitle>
                                 {experiences}
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                 </FooterLinksContainer>
             </FooterWrap>
         </FooterContainer>   
        </>
    )
}

export default Footer
