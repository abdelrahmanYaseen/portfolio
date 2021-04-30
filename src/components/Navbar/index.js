import React, {useState, useEffect} from 'react'
import {Nav,Logo, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }

    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    const goHome = () =>{
        scroll.scrollToTop()
    }
    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={goHome}>
                    <Logo src={require('../../images/logo-big-green.png').default} />
                </NavLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset ={-80} to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset ={-80} to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset ={-80} to="projects">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks smooth={true} duration={500} spy={true} exact='true' offset ={-80} to="signup">Sign up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                        <NavBtnLink smooth={true} duration={500} spy={true} exact='true' offset ={-80} to="signin"> Sign in</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav> 
       
        </>
    )
}

export default Navbar
