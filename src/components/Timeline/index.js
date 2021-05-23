import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";

import timelineElements from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


const Timeline = () => {
    let workIconStyles = { background: "#ddd" };
    let schoolIconStyles = { background: "#01bf71" };

    return (
        <div id='experienceTimeLine' style={{'marginTop':'0', 'overflow':'hidden', 'background':'#f9f9f9'}}>
           <h1 style={{'text-align':'center','margin':'30px'}}>Timeline</h1>
            <VerticalTimeline animate={true}>
                {timelineElements.map((element) => {
                let isCustomIcon = ! (element.icon === 'work' || element.icon === 'school');
                let icon = <a href= {element.link} target='blank'  rel='noopener noreferrer' ><img alt= 'company-logo'
                            style= {{'height':'100%', 'width':'100%', 'padding':'10px', 'ustifyContent':'center'}} 
                            src={element.icon} /></a>
                
                let customIconStyle = isCustomIcon? { background: element.bgcolor, ustifyContent:'center', alignItems:'center' } : '';
                
                let isWorkIcon = element.icon === "work";
                let showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== "";

                return (
                    <VerticalTimelineElement
                    id = {'experience_'.concat(element.id.toString())}
                    key={element.key}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={isCustomIcon? customIconStyle : isWorkIcon ? workIconStyles : schoolIconStyles}
                    icon={isCustomIcon? icon :isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    {showButton && (
                        <a
                        className={`button ${
                            isWorkIcon ? "workButton" : "schoolButton"
                        }`}
                        href="/"
                        >
                        {element.buttonText}
                        </a>
                    )}
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline> 
        </div>
    )
}

export default Timeline
