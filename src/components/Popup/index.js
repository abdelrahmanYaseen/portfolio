import React from 'react'
import Modal from 'react-modal'
import {MdClose} from 'react-icons/md'
import { ClosePopupButton, PopupContent, PopupDescWrapper, PopupImage, PopupImageWrapper, VBar } from './PopupElements'


const style = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content:{
        top: '90px',
        // paddingTop:'30px',
        width:'80%',
        height:'80%',
        position: 'absolute',
        border: '1px solid #ccc',
        background: '#f9f9f9',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        margin: 'auto',
        zindex:20,
        // padding: '20px',
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    }
}

const Popup = ({isOpen}) => {
    return (
        <div>
            <Modal style={style} isOpen={true} shouldCloseOnOverlayClick={false} shouldFocusAfterRender={true}>
                <PopupContent>
                    <PopupImageWrapper>
                        <PopupImage src={require('../../images/project-graphics.gif').default} />
                    </PopupImageWrapper>
                    <VBar />
                    <PopupDescWrapper>
                        <h1> Are You Ready?</h1>
                        <p>some random text</p>
                    </PopupDescWrapper>
                    <ClosePopupButton><MdClose size={40} /></ClosePopupButton>
                </PopupContent>
            </Modal>
        </div>
    )
}

export default Popup
