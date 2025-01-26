import {awards_data} from './awardsData'
import { Button } from '../ButtonElement';

const awards_array = Object.values(awards_data) 
const awards = awards_array.map( item => {
    return (
        <div id = {'award_'.concat(item.id.toString())}>
        <li style = {{'color':'#01bf71', 'margin-top':'10px'}}><b> {item.year }</b></li>
        <br/>
        <p style = {{'margin-left':'5%'}}>{item.award}</p>
        <br/>
        </div>

    )
})

export const homeObj1 = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Me',
    headLine: 'Bridging technical complexity with user-focused solutions.',
    description: <div>
     <p>Yaseen, a computer engineer driven by a deep passion for problem-solving and innovation.</p>
     <p style={{'marginTop':'10px'}}>I find joy in creating solutions that merge technology with real-world impact:
     <ul style={{'paddingLeft':'20px'}}>
        <li>Harnessing data and AI to turn information into insights.</li>
        <li>Crafting intuitive designs and tools for seamless user experiences.</li>
        <li>Exploring creative applications of logic and technology.</li>
     </ul>
     </p>
     <p style={{'marginTop':'10px', 'marginBottom':'20px'}}>Beyond the technical realm, I’m deeply interested in the ethical, psychological, and economic implications of technology, aiming to create solutions that not only perform but also resonate with people.</p>
     <Button
                href="https://rebel-printer-2fc.notion.site/Portfolio-Yaseen-18148f4104fe80309bafcec013e4ae18?pvs=74"
                primary={true}
                dark={false}  
                big={true}    
                fontBig={true}
                target="_blank"
            >
                Read More
            </Button>
     </div>
     ,

    buttonLabel: null,
    btnLink: null,
    imgStart: false,
    img: require('../../images/self.svg').default,
    alt: 'Profile image',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObj2 = {
    id: 'awards',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'My awards',
    headLine: 'Awards',
    description: <div style = {{'align-text':'center', 'width':'100%'}}>
                    {awards}
                </div>,
    buttonLabel: null,
    btnLink:null,
    imgStart : true,
    img: require('../../images/awards.svg').default,
    alt:'test alt',
    dark:false,
    primary: false,
    darkText: true,
};

export const homeObj3 = {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contact me',
    headLine: 'Contact',
    description: <div style = {{'align-text':'center', 'width':'100%'}}>
                    I am always happy to put my efforts in a complex task, 
                    so do not hesitate to hit me up with your requests! 
                    And if your project will benefit the humanity in any meaningful way
                    I will make a 50% discount right away. No kidding.
                </div>,
    buttonLabel: 'Contact me',
    btnLink:'https://www.linkedin.com/in/yaseen-it/',
    imgStart : false,
    img: require('../../images/contact-me.svg').default,
    alt:'test',
    dark:true,
    primary: true,
    darkText: false,
};


