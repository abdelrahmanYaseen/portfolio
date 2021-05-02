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
    width:50px;
    height:50px;
    padding:0;
    color: #000;
    z-index:999;
    position:absolute;
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
   height:100%;
   ${'' /* width:50%; */}
   padding:20px;
   height:100%;
   
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