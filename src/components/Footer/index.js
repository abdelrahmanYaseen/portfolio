import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap } from './FooterElements'

const Footer = () => {
    return (
        <>
         <FooterContainer>
             <FooterWrap>
                 <FooterLinksContainer>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle> Footer 1</FooterLinkTitle>
                                 <FooterLink to="/"> Link1</FooterLink>
                                 <FooterLink to="/"> Link2</FooterLink>
                                 <FooterLink to="/"> Link3</FooterLink>
                                 <FooterLink to="/"> Link4</FooterLink>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle> Footer 2</FooterLinkTitle>
                                 <FooterLink to="/"> Link1</FooterLink>
                                 <FooterLink to="/"> Link2</FooterLink>
                                 <FooterLink to="/"> Link3</FooterLink>
                                 <FooterLink to="/"> Link4</FooterLink>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle> Footer 3</FooterLinkTitle>
                                 <FooterLink to="/"> Link1</FooterLink>
                                 <FooterLink to="/"> Link2</FooterLink>
                                 <FooterLink to="/"> Link3</FooterLink>
                                 <FooterLink to="/"> Link4</FooterLink>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle> Footer 4</FooterLinkTitle>
                                 <FooterLink to="/"> Link1</FooterLink>
                                 <FooterLink to="/"> Link2</FooterLink>
                                 <FooterLink to="/"> Link3</FooterLink>
                                 <FooterLink to="/"> Link4</FooterLink>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                 </FooterLinksContainer>
             </FooterWrap>
         </FooterContainer>   
        </>
    )
}

export default Footer
