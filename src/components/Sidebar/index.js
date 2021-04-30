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
                    <SidebarLink onClick={toggle}  to="discover">Discover</SidebarLink>
                    <SidebarLink  onClick={toggle} to="services">Services</SidebarLink>
                    <SidebarLink  onClick={toggle} to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRout to="signin">Sign In</SidebarRout>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar

