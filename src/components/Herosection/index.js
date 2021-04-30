import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video-s.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> This is just a demo for habibti ! </HeroH1>
                <HeroP> Marhaba :P </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
