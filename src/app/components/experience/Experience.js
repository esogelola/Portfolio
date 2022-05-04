import { Row, useAccordionButton, Accordion } from "react-bootstrap";
import { ExperienceItem } from "./ExperienceItem";
import { ImGithub, ImBook, ImYoutube } from "react-icons/im";
import { FaWarehouse } from "react-icons/fa";
import {
  GiGamepad,
  GiGraduateCap,
  GiDiploma,
  GiNetworkBars,
  GiCobweb,
} from "react-icons/gi";
import { AiOutlineBlock, AiOutlineMobile } from "react-icons/ai";
import { MdComputer, MdGroup, MdGroups } from "react-icons/md";
import { SiMajorleaguehacking } from "react-icons/si";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => "user as expanded" + { children }
  );

  return (
    <h1 type="button" className="toggleButton" onClick={decoratedOnClick}>
      <span>{children}</span>
    </h1>
  );
}

const parseIcon = (iconName) => {
  switch (iconName) {
    case "github":
      return <ImGithub />;
    case "graduate":
      return <GiGraduateCap />;
    case "game":
      return <GiGamepad />;
    case "warehouse":
      return <FaWarehouse />;
    case "tech":
      return <MdComputer />;

    case "block":
      return <AiOutlineBlock />;

    case "mobile":
      return <AiOutlineMobile />;

    case "diploma":
      return <GiDiploma />;
    case "bar":
      return <GiNetworkBars />;
    case "web":
      return <GiCobweb />;
    case "youtube":
      return <ImYoutube />;
    case "groups":
      return <MdGroups />;
    case "group":
      return <MdGroup />;
    case "hackathon":
      return <SiMajorleaguehacking />;
    default:
      break;
  }

  return <ImBook />;
};
const Experience = ({ experienceData }) => {
  console.log(experienceData);
  return (
    <Row className="experience" id="experience">
      <h1>
        <span> Experience</span>
      </h1>

      <Accordion defaultActiveKey={0} flush>
        {experienceData.map((experienceItem, key) => {
          return (
            <Accordion.Item eventKey={key} key={key}>
              <CustomToggle eventKey={key}>{experienceItem.year}</CustomToggle>
              <Accordion.Body>
                <ol className="experience-list-container">
                  {experienceItem.milestones.map(
                    (timelineItem, experienceItemIndex) => {
                      return (
                        <ExperienceItem
                          key={experienceItemIndex}
                          content={timelineItem.content}
                          icon={parseIcon(timelineItem.icon)}
                          link={timelineItem.link}
                          linkTitle={timelineItem.linkTitle}
                          first={
                            experienceItemIndex ===
                            experienceItem.milestones.length - 1
                              ? true
                              : false
                          }
                          contentRight={timelineItem.contentRight}
                        />
                      );
                    }
                  )}
                </ol>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Row>
  );
};
export default Experience;
