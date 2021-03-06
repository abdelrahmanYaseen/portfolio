import styled from 'styled-components'
import {Link} from 'react-scroll'
// aaaaaaaaaaaaaaaa

export const ScrollUp = styled(Link)`
    cursor: pointer;
`;
export const ShowMoreButton = styled.div`
    cursor: pointer;
    color: #01bf71;
    margin:15px;
    ${'' /* align-text:center;
    display:block;
    justify-content: center;
    align-items: center;
    size: 30px;
    margin:0; */}
`
export const ProjectsContainer = styled.div`
    height: 100%;
    padding:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding-top:100px;
    
    ${'' /* @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 480px){
        height: 1300px;
    } */}
`;
export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    ${'' /* margin-top: 64px; */}
    @media screen and (max-width: 480px){
        font-size: 2rem;
    };

`;
export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    };
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    };

`;
export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 240px;
    max-width: 240px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover{
      transform: scale(1.03);
      transform: ${({rotationDirection}) => (rotationDirection)? 'rotate(-1deg)' : 'rotate(1deg)'};
      transition: all 0.5s ease-in-out;
      cursor: pointer;
    };

`;
export const ProjectsIcon = styled.img`
    object-fit: cover;
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
    border-radius: 10px;
`;
export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    ${'' /* color: #fff; */}
    margin-bottom: 10px;
`;
export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;