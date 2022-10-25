import {awards_data} from './awardsData'

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
    topLine: 'A bit about me',
    headLine: 'Jack of all trades, master of some.',
    description: <div>Yaseen, a former valedictorian who's passionate about and skilled in:
     <ul style={{'paddingLeft':'20px'}}>

    <li><strong>Data Science:</strong> Pandas, Numpy, Dask (for big data), Plotly (For visualization), Dash (For interactive dashboards).</li>

    <li><strong>Web Development:</strong> Python (Flask and Django), Javascript (React).</li>

    <li><strong>Cloud Computing:</strong> AWS - EC2, S3, Lambda.</li>
    </ul>

    <p style={{'marginTop':'10px'}}>Additionally, I'm knowledgable in etherum-based blockchain development (in Solidity), Web scraping and bot-creation (Selenium and beautifulsoup), Algorithmic Trading and technical analysis.</p>

     <p style={{'marginTop':'10px'}}>I like to create, innovate and invest my time, effort and money in making sure 
     that technology's potential is being realized.</p>
     <p>My interests extend far beyond the technical aspects of technology to
      include computer ethics, as well as both the psychological and economical impact of technology. </p>
      <p style={{'marginTop':'15px'}}>Apart from technology, I'm a long term meditator and a practitioner of mindfulness. I love graphic design, photo, video editing and 3D modeling.</p>
     </div>
     ,
    // description: <p>I'm Yaseen, a former valedictorian of the Computer Engineering department <a style={{'color': '#01bf71'}} href="https://www.metu.edu.tr/" target="_blank">@METU</a>. Extremely passionate about technology and computing.<p>Currently I'm doing my Master's degree in Computer Science and Engineering <a style={{'color': '#01bf71'}} href="https://www.polimi.it/" >@Polimi</a></p></p>,
    buttonLabel: null,
    btnLink:null,
    imgStart : false,
    img: require('../../images/self.svg').default,
    alt:'test alt',
    dark:false,
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
    topLine: 'Email me',
    headLine: 'Contact',
    description: <div style = {{'align-text':'center', 'width':'100%'}}>
                    I am always happy to put my efforts in a complex task, 
                    so do not hesitate to hit me up with your requests! 
                    And if your project will benefit the humanity in any meaningful way
                    I will make a 50% discount right away. No kidding.
                </div>,
    buttonLabel: 'Let\'s connect !',
    btnLink:'https://www.linkedin.com/in/yaseen-it/',
    imgStart : false,
    img: require('../../images/contact-me.svg').default,
    alt:'test',
    dark:true,
    primary: true,
    darkText: false,
};

