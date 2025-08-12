import React, { useEffect, useState } from "react";
import Divider from "../shared/divider";
import Rectangle from "../shared/rectangel";
import Text from "../shared/text";
import "./moreAboutMe.css";

export default function MoreAboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="more-about-me-container">
      <div className="more-about-me-content">
        <div className="more-about-me-header">
          {/* <Divider /> */}
          <div className="more-about-me-header-text">
            <Text header color={"white"} fontSize={isMobile && "20px"}>
              More About Me
            </Text>
          </div>
          {/* <Divider /> */}
        </div>
        <div className="more-about-me-description">
          <Text color={"white"} fontSize={isMobile && "13px"}>
            I'm all about creating impactful experiences through collaborative
            teamwork, project leadership, and branding that brings fresh ideas
            to life. I love exploring new tools and approaches, especially when
            it comes to inclusive design and emerging XR spaces.
          </Text>
        </div>
        <div className="more-about-me-rectangles">
          <Rectangle secondary>
            <div>
              <Text
                color={"white"}
                fontWeight={"700"}
                fontSize={isMobile && "15px"}
              >
                UI/UX Design & Research
              </Text>
              <p />
              <Text
                color={"white"}
                lineHeight={"17px"}
                fontSize={isMobile ? "13px" : "14px"}
              >
                Creating intuitive, beautiful digital experiences grounded in empathy-driven, inclusive research to ensure meaningful and accessible designs.
              </Text>
            </div>
          </Rectangle>
          <Divider vertically={isMobile} />
          <Rectangle>
            <div>
              <Text
                color={"white"}
                fontWeight={"700"}
                fontSize={isMobile && "15px"}
              >
                Research Assistant
              </Text>
              <p />
              <Text
                color={"white"}
                fontSize={isMobile ? "13px" : "14px"}
                lineHeight={"17px"}
              >
                Contributing to HCI research, from exploring VR in education to designing human-AI interactions in immersive environments.
              </Text>
            </div>
          </Rectangle>
          <Divider vertically={isMobile} />
          <Rectangle secondary>
            <div>
              <Text
                color={"white"}
                fontWeight={"700"}
                fontSize={isMobile && "15px"}
              >
                XR Development
              </Text>
              <p />
              <Text
                color={"white"}
                fontSize={isMobile ? "13px" : "14px"}
                lineHeight={"17px"}
              >
                Exploring immersive 3D environments to create the next wave of
                digital interaction.
              </Text>
            </div>
          </Rectangle>
        </div>
      </div>
    </div>
  );
}
