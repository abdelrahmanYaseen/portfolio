import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Logo = styled.img`
    margin-top:20px;
    height: 60px;
    width: 60px;
    margin-bottom:20px;
    transition: 0.5s ease-in-out;
    &:hover {
        transition: 0.5s ease-in-out;
        transform: scale(1.2) rotate(10deg);
    }
`;
export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav)? '#000': 'transparent'};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 5;    

    @media screen and (max-width : 900px){
        transition: 0.8s all ease;

}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index : 1;
    width: 100%;
    padding: 0 24px;
    align-items: center;
    max-width: 1100px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    size: 1.5rem;
    font-size:20px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    margin-top: 0 px;
    font-weight: bold;
    text-decoration:none;

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width : 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height: 80px; 
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
        ${'' /* this causes the lower green border when a section is activated */}
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    
    @media screen and (max-width:768px){
        display:none;
    }

`

export const NavBtnLink = styled(LinkS)`
    border-radius: 50px;
    background: #FF6C5C;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    
`