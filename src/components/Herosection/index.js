import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video-sg.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Howdy !  </HeroH1>
                <HeroP> Welcome to my portfolio :) </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
