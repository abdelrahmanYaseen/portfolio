import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRout, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle}  to="about">About</SidebarLink>
                    <SidebarLink  onClick={toggle} to="projects">Projects</SidebarLink>
                    <SidebarLink  onClick={toggle} to="experienceTimeLine">Timeline</SidebarLink>
                    <SidebarLink  onClick={toggle} to="awards">Awards</SidebarLink>
                    <SidebarLink onClick={toggle}  to="footer">Site Map</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRout onClick={toggle} to="contact">Contact Me</SidebarRout>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar

