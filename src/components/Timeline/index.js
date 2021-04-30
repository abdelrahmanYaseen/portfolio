import { ReactComponent as WorkIcon } from "../../images/work.svg";
import { ReactComponent as SchoolIcon } from "../../images/school.svg";

import timelineElements from "./TimelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { FaBorderNone } from "react-icons/fa";

const Timeline = () => {
    let workIconStyles = { background: "#ddd" };
    let schoolIconStyles = { background: "#01bf71" };

    return (
        <div style={{'margin-top':'0', 'background':'#000'}}>
           <h1 className="title">Timeline</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                let isCustomIcon = ! (element.icon === 'work' || element.icon === 'school');
                let icon = <img 
                            style= {{'width':'45px','margin-left':'15%', 'margin-top':'15%'}} 
                            src={element.icon} />
                
                let customIconStyle = isCustomIcon? { background: element.bgcolor } : '';
                
                let isWorkIcon = element.icon === "work";
                let showButton =
                    element.buttonText !== undefined &&
                    element.buttonText !== null &&
                    element.buttonText !== "";

                return (
                    <VerticalTimelineElement
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
