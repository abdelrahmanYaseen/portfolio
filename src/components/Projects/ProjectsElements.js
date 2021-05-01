import styled from 'styled-components'

export const PopupContent = styled.div`
    display: flex;
    flex-direction:row;
    align-items: stretch;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 100%;
    width : 100%;
    @media screen and (max-width: 1000px){
        flex-direction : column;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
   }

`;
export const ClosePopupButton = styled.div`
    cursor:pointer;
    top:20px;
    right:20px;
    width:32;
    height:32px;
    padding:0;
    color: #000;
    z-index:999;

`;


export const VBar = styled.img`
    border-left:1px solid #01bf71;
    height:80%;
    width:1px;
    display: flex;
    @media screen and (max-width: 1000px){
       display:none;
   }
`;
export const PopupImageWrapper = styled.div`
   height:100%;
   ${'' /* width:50%; */}
   padding:20px;
   height:80%;
   @media screen and (max-width: 1000px){
       height:70%
   }
   @media screen and (max-width: 768px){
       height:65%
   }
   @media screen and (max-width: 468px){
       height:50%
   }
`;

export const PopupImage = styled.img`
    border-radius:8%;
    border-width:1px;
    border: 3px solid #01bf71;
    height: 100%;
`;
export const PopupDescWrapper = styled.div`

    justify-content:center;
    text-align:center;
    align-self: center;
    ${'' /* height: 80%; */}
    
`;




// aaaaaaaaaaaaaaaa


export const ProjectsContainer = styled.div`
    height: 100%;
    padding:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    
    @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 480px){
        height: 1300px;
    }
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
    max-height: 340px;
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
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
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