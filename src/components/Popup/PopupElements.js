import styled from 'styled-components'

export const PopupContent = styled.div`

    display: flex;
    flex-direction:row;
    align-items: stretch;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    height: 100%;
    width : 100%;
    ${'' /* overflow-y: hidden; */}
    @media screen and (max-width: 1000px){
        display: block;
        ${'' /* flex-direction : column; */}
        ${'' /* justify-content: center; */}
        ${'' /* align-items: center; */}
        ${'' /* flex-wrap: nowrap; */}
   }

`;
export const ClosePopupButton = styled.div`
    cursor:pointer;
    top:11%;
    right:3%;
    width:50px;
    height:50px;
    padding:0;
    color: #f00;
    z-index:999;
    position:fixed;
    @media screen and (max-width: 750px){
        right:10%;
   }
`;


export const VBar = styled.img`
    border-left:1px solid #01bf71;
    height:100%;
    width:1px;
    display: flex;
    @media screen and (max-width: 1000px){
       display:none;
   }
`;
export const PopupImageWrapper = styled.div`
   padding:20px;
   overflow: hidden;
   margin-top: 20px;
   width: 100%;
   @media screen and (max-width: 1000px){
        margin-top: 50px;
        overflow: visible;
        height:50%;
        justify-content:center;
        align-text:center;
        display:flex;
   }
`;

export const PopupImage = styled.img`
    object-fit: cover;
    padding: 0px;
    margin: 0;
    ${'' /* border-radius:8%; */}
    ${'' /* border-width:1px; */}
    ${'' /* border: 3px solid #01bf71; */}
    ${'' /* height: 100%; */}
    ${'' /* width: 100%; */}
    ${'' /* @media screen and (max-width: 1000px){
        width: 100%;
        height: 100%;
   } */}
`;

export const PopupButton = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71': '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606': '#fff')};
    font-size: ${({fontBig}) => (fontBig? '20px' : '16px')};
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff':'#01bf71')};
    }

`;

export const PopupDescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    width:50%;
    text-align: justify;
    text-justify: inter-character;
    ${'' /* align-self: center; */}
    ${'' /* height: 80%; */}
    @media screen and (max-width: 1000px){
        width:100%;
   }
    
`;