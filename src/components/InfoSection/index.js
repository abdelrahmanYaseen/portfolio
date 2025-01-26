import React, {useEffect} from 'react'
import {Button} from '../ButtonElement'
import { InfoWrapper, BtnWrap, Column2, Heading,Img,InfoContainer,Column1, InfoRow, ImgWrap, Subtitle, TextWrapper, TopLine } from './InfoElements'
import Aos from 'aos'
import 'aos/dist/aos.css'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel,btnLink ,img, alt,primary, dark}) => {
    
    useEffect(()=> {
        Aos.init({duration: 1000});

    }, []);
    return (
        <>
         <InfoContainer lightBg={lightBg} id = {id}>
             <InfoWrapper data-aos = "fade-up">
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headLine}</Heading>
                             <Subtitle darkText={darkText}>{description}</Subtitle>
                             {btnLink != null? 
                             <BtnWrap>
                                 <Button
                                    href={btnLink}
                                    primary = {primary? 1: 0}
                                    dark = {dark? 1: 0}
                                    target="_blank"
                                 >{buttonLabel}</Button>
                             </BtnWrap>
                             :''
                            }
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default InfoSection
