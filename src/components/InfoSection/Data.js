export const homeObj1 = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'A bit about me',
    headLine: 'Jack of all trades, master of some.',
    description: <div>I'm Yaseen, a former valedictorian
     who lived in 7 countries and I'm <em>very</em> passionate about:
     <ul style={{'paddingLeft':'20px'}}>
        <li>Digital Project Management</li>
        <li>Blockchain</li>
        <li>Supply Chain</li>
        <li>Finance</li>
        <li>Graphics</li>
        <li>Optimization</li>
        <li>Machine Learning</li>
    </ul>
     <p style={{'marginTop':'10px'}}>I like to create, innovate and invest my time, effort and money in making sure 
     that technology's potential is being realized.</p>
     <p>My intrests extend far beyond the technical aspects of technology to
      expand Computer Ethics, and both the psychological and economical effects of technology. </p>
     </div>
     ,
    // description: <p>I'm Yaseen, a former valedictorian of the Computer Engineering department <a style={{'color': '#01bf71'}} href="https://www.metu.edu.tr/" target="_blank">@METU</a>. Extremely passionate about technology and computing.<p>Currently I'm doing my Master's degree in Computer Science and Engineering <a style={{'color': '#01bf71'}} href="https://www.polimi.it/" >@Polimi</a></p></p>,
    buttonLabel: 'Full Experience Timeline',
    btnLink:"projects",
    imgStart : false,
    img: require('../../images/self.svg').default,
    alt:'test alt',
    dark:false,
    primary: false,
    darkText: true,
};
export const homeObj2 = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'test top line2',
    headLine: 'test headline2',
    description: 'test description2',
    buttonLabel: 'testBtnLbl2',
    btnLink:"/",
    imgStart : false,
    img: require('../../images/svg-2.svg').default,
    alt:'test alt',
    dark:true,
    primary: true,
    darkText: false,
};