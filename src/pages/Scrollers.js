import React, { useEffect, useState } from 'react';

const Scrollers = () => {
    
    var Scroll = require('react-scroll')
    ;
    var scroll = Scroll.animateScroll;
    const toTop = () => {
        scroll.scrollToTop();
    }
    const toBottom = () => {
        scroll.scrollToBottom();
    }

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    return (
        <>
            <div
                style = {{
                    'font-size':'35px',
                    'display':'flex',
                    'flex-direction':'column',
                    'color':'#01bf71',
                    'position':'fixed',
                    'z-index':'100',
                    'bottom':'0',
                    'right':'2px',
                    'cursor':'pointer',
                    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
                }}
                >
                {offset !==0? <p onClick={toTop} >▲</p>:' '}
                {offset < -150+(document.body.offsetHeight - window.innerHeight)?
                <p onClick={toBottom}>▼</p>
                :
                ' '
                }
                
            </div> 
        </>
    )
}

export default Scrollers
