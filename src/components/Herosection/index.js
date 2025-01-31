import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video-sg.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                {/* <HeroH1> Howdy !  </HeroH1> */}
                <HeroP> I'm Yaseen, 
                 a Software Engineer.<br/> Please have a seat, 
                scroll down, and enjoy.</HeroP>
            </HeroContent>
            


        </HeroContainer>
    )
}

export default HeroSection
