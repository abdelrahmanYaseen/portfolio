import icon1 from '../../images/project-graphics.gif'


export const Projects_data = {

     Project1 : {
        id: 0,
        icon: icon1,
        title: 'Pure C Raytracer',
        popup: {title: 'Pure C Raytracer',
            description: 'This project was\
            developed a part of Computer Grahpics course @METU, Pure C language \
            was used to build the entire pipeline; starting from the equations \
            of the circules, defining the light vectors, shadow equations, \
            specular equations, reflection equations, ending the project with\
                UV texture mapping.',
            btnLabel: 'Github',
            btnLink: 'https://github.com/abdelrahmanYaseen/Graphics_implementations',
            img: require('../../images/project-graphics.gif').default},
    },


     Project2 : {
        id: 1,
        icon: require('../../images/project-portfolio-icon.gif').default,
        title: 'React - Portfolio',
        popup: {title: 'React - Portfolio ',
            description:'This very website is written in React using hooks. \
            It is my first attempt in learning this framework and I\'m very pleased with the outcome.\n Feel free to use the code.' ,
            btnLabel: 'Github',
            btnLink: 'https://github.com/abdelrahmanYaseen/portfolio',
            img: require('../../images/project-portfolio-popup.gif').default},
    },
    // 
     Project3 : {
        id: 2,
        icon: require('../../images/project-astar-icon.gif').default,
        title: 'A* Maze solver',
        popup: {title: 'A* Algorithm',
            description:'This code is an implementation of A* algorithm to find the shortest path between each pair of points in a given maze as a first step. Then it solves the TSP problem between these points, using both BFS and UFS, and compares their performance. Please check the assignment\'s document for further details.' ,
            btnLabel: 'Github',
            btnLink: 'https://github.com/abdelrahmanYaseen/AI_Astar_Maze_TSP',
            img: require('../../images/project-astar.gif').default},
    },

    Project4: {
        id: 3, 
        icon: require('../../images/project-stocks-seasonality.gif').default,
        title: 'Stocks Seasonality',
        popup: {title: 'Stocks Seasonality Analysis',
            description:'This tool takes a ticker symbol as an input, and plots the seasonality of the stock. represeted by the probability with witch the stock witnesses an increase in value (based on historical data) and the expected value of that change' ,
            btnLabel: 'Tool',
            btnLink: 'http://stocks-seasonality.herokuapp.com/',
            img: require('../../images/project-stocks-seasonality.gif').default}
    },
    Project5: {
        id: 4, 
        icon: require('../../images/project-instagram-automation.gif').default,
        title: 'Instagram Automation',
        popup: {title: 'Instagram Automation Bot',
            description: <div> 
            <p>A fully functional, versatile pipeline that allows
             instagram page admins to automate their repetitive tasks. </p>
             <p>This bot can do the following:</p>
             <br/>
             <ul>
                <li><strong>Automatic Post Scheduling</strong></li>
                    <ul >
                        <li>
                            Given a list of hashtags, the bot scrapes instagram looking for corresponding
                            posts, downloads them into a well-formatted folder of Media + Scripts.
                        </li>
                        <li>Given a folder with Media + Scripts and a frequency, the bot
                        can automatically schedule those posts.</li>
                    </ul>
                <li><strong>Automatic Engagement</strong></li>
                    <ul >
                            <li>
                                Given a list of hashtags, the bot scrapes relevant instagram pages, goes through their recent 'Active' followers
                                and saves a list of the usernames of those followers for later use.
                            </li>
                            <li>
                                Given the list generated in the previous step, the bot can engage with those account.
                                it can <i>automatically </i><b>follow</b>, <b>unfollow</b>, <b>like recent posts</b> and 
                                <b> place comments from a pre-defined list</b>.
                            </li>
                    </ul>

                <br/><br/>
                <strong>The bot is designed carefully to not abuse or spam the network. Actions are all 
                randomized and they comply with instagram's engagement constraints. 
                </strong>
            </ul>  
            
             </div>,
            btnLabel: 'Request the code',
            btnLink: 'http://stocks-seasonality.herokuapp.com/',
            img: require('../../images/project-instagram-automation-bg.gif').default}
    },
    
}


