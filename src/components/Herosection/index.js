import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroP, ImageBg } from './HeroElements'
// import Video from '../../videos/video-sg.mp4'
import Image from '../../images/yaseen-portfolio-bg.png'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                <ImageBg src={Image} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                {/* <HeroH1> Howdy !  </HeroH1> */}
                <HeroP> I'm Yaseen, 
                 a Computer Engineer, Python Developer 
                and a Data Modeler.<br/> Please have a seat, 
                get yourself a coffee and enjoy scrolling.</HeroP>
            </HeroContent>
            


        </HeroContainer>
    )
}

export default HeroSection
