import React from 'react'
import Modal from 'react-modal'
import {MdClose} from 'react-icons/md'
import { ClosePopupButton,PopupButton, PopupContent, PopupDescWrapper, PopupImage, PopupImageWrapper, VBar } from './PopupElements'
// import { Button } from '../ButtonElement'


const style = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 20, 0, 0.5)',
    },
    content:{
        // top: '10px',
        // paddingTop:'30px',
        // width:'100%',
        // height:'80%',
        position: 'absolute',
        border: '1px solid #ccc',
        background: '#f9f9f9',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        margin: 'auto',
        // zIndex:80,
        // padding: '20px',
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    }
}

const Popup = (props) => {

    return (
        <div>
        {/* { showPopup ? */}
            <Modal style={style} isOpen={true}  onRequestClose={props.setShowPopup} shouldCloseOnOverlayClick={true}>
                <PopupContent>
                    <PopupImageWrapper>
                        <PopupImage src={props.img} />
                    </PopupImageWrapper>
                    <VBar />
                    <PopupDescWrapper>
                        <h1 style={{'margin':'14px'}}>{props.title}</h1>
                        <p style={{'margin':'14px'}} >{props.description}</p>
                        <PopupButton href={props.btnLink} style={{'margin':'14px'}} target="_blank" >{props.btnLabel}</PopupButton>
                    </PopupDescWrapper>
                    <ClosePopupButton onClick={props.setShowPopup}><MdClose size={40} /></ClosePopupButton>
                </PopupContent>
            </Modal> 
            {/* : null } */}
        </div>
    )
}

export default Popup

