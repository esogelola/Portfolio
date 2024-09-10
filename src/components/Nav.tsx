import React, { useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getAnalytics, logEvent } from "firebase/analytics";

import { Helmet } from "react-helmet";

function Nav() {
  const [selectedItem, setSelectedItem] = useState<string>("Home");
  const history = useHistory();
  const location = useLocation();
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({});
  const analytics = getAnalytics();

  const PADDING = 8;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validPaths = ["/", "/about", "/experience", "/projects"];

  const handleNavClick = (item: string) => {
    setSelectedItem(item);
    history.push(
      item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
    );
  };

  useEffect(() => {
    const currentPath = location.pathname;
    let currentItem = "Home"; // Default
    logEvent(analytics, "nav_click", {
      page_title: currentItem,
    });
    if (!validPaths.includes(currentPath)) {
      setPillStyle({
        width: "0px",
        left: "0px",
        display: "none",
      });
      setSelectedItem("Error");
      return;
    }

    switch (currentPath) {
      case "/":
        currentItem = "Home";
        break;
      case "/about":
        currentItem = "About";
        break;
      case "/experience":
        currentItem = "Experience";
        break;
      case "/projects":
        currentItem = "Projects";
        break;
      default:
        break;
    }

    setSelectedItem(currentItem);
  }, [location.pathname, validPaths]);

  useEffect(() => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      Home: homeRef,
      About: aboutRef,
      Experience: experienceRef,
      Projects: projectsRef,
    };

    const leftPosition = refs[selectedItem]?.current?.offsetLeft || 0;
    const width = refs[selectedItem]?.current?.offsetWidth || 0;

    setPillStyle({
      width: width - 2 * PADDING + "px",
      left: leftPosition + PADDING + "px",
      top: PADDING + "px",
      bottom: PADDING + "px",
    });
  }, [selectedItem]);

  return (
    <div className="nav relative  bg-inherit flex flex-row max-w-[340px] max-h-[50px]">
      <Helmet>
        <title>{selectedItem} - Emmanuel Sogelola</title>
      </Helmet>
      <div
        className="absolute rounded-[30px] bg-white transition-all duration-300 h-[35px]"
        style={pillStyle}
      ></div>

      <div
        ref={homeRef}
        className="p-4 rounded-full relative z-10 flex items-center justify-center"
        onClick={() => handleNavClick("Home")}
      >
        <a className="cursor-pointer text-black text-xs font-normal">Home</a>
      </div>

      {/* <div
        ref={aboutRef}
        className="p-4 rounded-full relative z-10 flex items-center justify-center"
        onClick={() => handleNavClick("About")}
      >
        <a className="cursor-pointer text-black text-xs font-normal">About</a>
      </div>

      <div
        ref={experienceRef}
        className="p-4 rounded-full relative z-10 flex items-center justify-center"
        onClick={() => handleNavClick("Experience")}
      >
        <a className="cursor-pointer text-black text-xs font-normal">
          Experience
        </a>
      </div> */}

      <div
        ref={projectsRef}
        className="p-4 rounded-full relative z-10 flex items-center justify-center"
        onClick={() => handleNavClick("Projects")}
      >
        <a className="cursor-pointer text-black text-xs font-normal">
          Projects
        </a>
      </div>
    </div>
  );
}

export default Nav;
