import React from 'react'
import Modal from 'react-modal'
import {MdClose} from 'react-icons/md'
import { PopupStyle, ClosePopupButton,PopupButton, PopupContent, PopupDescWrapper, PopupImage, PopupImageWrapper} from './PopupElements'
// import { Button } from '../ButtonElement'




const Popup = (props) => {

    return (
        <div>
        {/* { showPopup ? */}
            <Modal style={PopupStyle} isOpen={true}  onRequestClose={props.setShowPopup} shouldCloseOnOverlayClick={true}>
                <PopupContent>
                    <PopupImageWrapper>
                        <PopupImage src={props.img} />
                    </PopupImageWrapper>
                    <PopupDescWrapper>
                        <h1 style={{'margin':'14px', 'text-align':'center'}}>{props.title}</h1>
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

