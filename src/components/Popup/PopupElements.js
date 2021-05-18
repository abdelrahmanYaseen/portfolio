import styled from 'styled-components'



const popupcontentstyle = {
    padding: '0px',
    top:'90px',
    height:'75%',
    overflow:'scroll',

    background: '#f9f9f9',
    WebkitOverflowScrolling: 'touch',

    margin: 'auto',
    justifyContent: "center",
    alignItems: "center",
};

// const popupcontentstyle2 = styled.div`
//     padding: 0px;
//     top:90px;
//     height:75%;
//     overflow:hidden;
//     background: #f9f9f9;
//     WebkitOverflowScrolling: touch;
//     margin: auto;
//     justifyContent: center;
//     alignItems: center;
// `;
export const PopupStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 20, 0, 0.5)',
    },
    content:popupcontentstyle,
}
export const PopupContent = styled.div`
    display:grid;
    grid-template-columns: 70% 30%;
    @media screen and (max-width: 750px){
        display:block;
        ${'' /* position:relative; */}
   }

`;

export const PopupImageWrapper = styled.div`
    ${'' /* background:#f00;  */}
    height:100%;
    overflow:hidden;
`;

export const PopupImage = styled.img`
    height:100%;
    overflow:hidden;
    object-fit: contain;
    width:100%;
`;

export const PopupDescWrapper = styled.div`
    ${'' /* background:#f0f; */}
    ${'' /* position:absolute; 
    bottom:0px; */}
    padding:15px;
    text-align: justify;
    
    
`;

export const ClosePopupButton = styled.div`
    cursor:pointer;
    top:15%;
    right:3%;
    width:50px;
    height:50px;
    padding:0;
    color: #000;
    z-index:999;
    position:fixed;
    @media screen and (max-width: 750px){
        right:10%;
   }
`;


// export const VBar = styled.img`
//     border-left:1px solid #01bf71;
//     height:100%;
//     width:1px;
//     display: flex;
//     @media screen and (max-width: 1000px){
//        display:none;
//    }
// `;

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

