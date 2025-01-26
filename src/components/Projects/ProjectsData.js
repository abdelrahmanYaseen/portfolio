import icon1 from '../../images/project-graphics.gif'


export const Projects_data = {

     Project1 : {
        id: 0,
        icon: icon1,
        title: 'Pure C Raytracer',
        popup: {title: 'Pure C Raytracer',
            description: <div>This project was
            developed a part of Computer Graphics course @METU.
            <br/> Pure C language 
            was used to build the entire pipeline; starting from the equations 
            of the circles, defining the light vectors, shadow equations, 
            specular equations, reflection equations, ending the project with
                UV texture mapping.</div>,
            btnLabel: 'Github',
            btnLink: 'https://github.com/abdelrahmanYaseen/Graphics_implementations',
            img: require('../../images/project-graphics.gif').default},
    },


     Project2 : {
        id: 1,
        icon: require('../../images/project-portfolio-icon.gif').default,
        title: 'React - Portfolio',
        popup: {title: 'React - Portfolio ',
            description:<div>This very website is written in React using hooks. 
            It is my first attempt in learning this framework and I'm very pleased with the outcome.
            <br/>
            Feel free to use the code.
            </div>,
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
                <li style={{'margin-left':'5px'}} ><strong>Automatic Post Scheduling</strong></li>
                    <ul >
                        <li style={{'margin-left':'5px'}} >
                            Given a list of hashtags, the bot scrapes instagram looking for corresponding
                            posts, downloads them into a well-formatted folder of Media + Scripts.
                        </li>
                        <li style={{'margin-left':'5px'}} >Given a folder with Media + Scripts and a frequency, the bot
                        can automatically schedule those posts.</li>
                    </ul>
                <li style={{'margin-left':'5px'}} ><strong>Automatic Engagement</strong></li>
                    <ul >
                            <li style={{'margin-left':'5px'}} >
                                Given a list of hashtags, the bot scrapes relevant instagram pages, goes through their recent 'Active' followers
                                and saves a list of the usernames of those followers for later use.
                            </li>
                            <li style={{'margin-left':'5px'}} >
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
            btnLink: 'https://www.linkedin.com/in/yaseen-it/',
            img: require('../../images/project-instagram-automation-bg.gif').default}
    },
    Project6: {
        id: 5, 
        icon: require('../../images/project-backtesting-icon.gif').default,
        title: 'Trading Backtesting',
        popup: {title: 'Trading Strategies Backtesting',
            description:<div >
                This project is a basic trading simulator. It consists of 4 main classes:
                <ul style={{'margin':'14px'}}>
                    <li style={{'margin-left':'5px'}} ><b>Market:</b> Feeds the historical data of a certain stock, based on yfinance library</li>
                    <li style={{'margin-left':'5px'}} ><b>Broker:</b> Simulates a broker, which plays as an intermediary between <i>Traders</i> and the market.
                        The broker is responsible from opening, closing trades, and keeping track of stop-loss, take-profit signals.
                    </li>
                    <li style={{'margin-left':'5px'}} ><b>Trader</b> The trader has a access to the historical data provided by the market, and is capable of defining a <i>strategy</i>
                    that triggers opening/closing long/short positions given the status of the market.
                    </li>
                </ul>
                <p>At the end of the simulation, statistics about the win/loss rates, fees and more are presented.</p>
                <p>The project is still under development for more features</p>
            </div>,

            btnLabel: 'Request the code',
            btnLink: 'https://www.linkedin.com/in/yaseen-it/',
            img: require('../../images/project-backtesting-img.gif').default}
    },
    Project7: {
        id: 6, 
        icon: require('../../images/project-furbrawl-icon.gif').default,
        title: 'Furbrawl - Game',
        popup: {title: 'Furbrawl',
            description:<div >
                <p style = {{'margin-top':'5px'}}>An extremely dynamic 2D <b>multiplayer</b> game where players 
                are cats that try to make each other fall through different actions.</p>
                <br/>
                <p style = {{'margin-top':'5px'}}>Every player is a unique cat and starts on a random balcony with 9 lives. 
                You, as a player, need to make other players fall by shooting furballs, 
                pushing or jumping on top of them. Initially, you have lots of fur to shoot, 
                but then you become lighter as you make fur balls and throw them, 
                meaning that you can jump and move faster but you’re easily pushed.</p>
                <br/>
                <p style = {{'margin-top':'5px'}}>
                The game is fast and dynamic, you need to constantly jump and move to avoid being hit, 
                and pay attention to the position of other players. 
                There are different strategies, each one with pros and cons,  
                will you shoot a lot to become lighter and faster or will you prefer being heavy, 
                slow but resistant?
                </p>
            </div>,

            btnLabel: 'Polimi Game Collective',
            btnLink: 'https://polimi-game-collective.itch.io/furbrawl',
            img: require('../../images/project-furbrawl-img.gif').default}
    },
    
}


