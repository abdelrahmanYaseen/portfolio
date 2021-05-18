import React from 'react'
import { FooterContainer, FooterLinkR, FooterLinkS, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'

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
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle> Projects</FooterLinkTitle>
                                 <FooterLinkR to="/"> Link1</FooterLinkR>
                                 <FooterLinkR to="/"> Link2</FooterLinkR>
                                 <FooterLinkR to="/"> Link3</FooterLinkR>
                                 <FooterLinkR to="/"> Link4</FooterLinkR>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle> Footer 3</FooterLinkTitle>
                                 <FooterLinkR to="/"> Link1</FooterLinkR>
                                 <FooterLinkR to="/"> Link2</FooterLinkR>
                                 <FooterLinkR to="/"> Link3</FooterLinkR>
                                 <FooterLinkR to="/"> Link4</FooterLinkR>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle> Footer 4</FooterLinkTitle>
                                 <FooterLinkR to="/"> Link1</FooterLinkR>
                                 <FooterLinkR to="/"> Link2</FooterLinkR>
                                 <FooterLinkR to="/"> Link3</FooterLinkR>
                                 <FooterLinkR to="/"> Link4</FooterLinkR>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                 </FooterLinksContainer>
             </FooterWrap>
         </FooterContainer>   
        </>
    )
}

export default Footer
