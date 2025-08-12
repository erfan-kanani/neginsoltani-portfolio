import React, { useEffect, useState } from "react";
import "./header.css";
import Image from "../../assets/negin.png";
import Text from "../shared/text";
import Button from "../shared/button";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV-NeginSoltani.pdf";
    link.download = "CV-NeginSoltani.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      {/* Top Section Mobile */}
      <div className="header-container">
        {/* Centered Lines */}
        <div className="header-centered-lines">
          {[205, 170].map((height, index) => (
            <div className="header-line-container" key={index}>
              {/* Line */}
              <div
                className="header-line"
                style={{ height: `${height}px` }} // Dynamic height
              ></div>

              {/* Rectangle with Text */}
              <div className="header-rectangle">
                <Text color={"white"} fontSize={isMobile ? "10px" : "12px"}>
                  {height === 205 ? "UI/UX Designer" : "UX Researcher"}
                </Text>
              </div>
            </div>
          ))}
        </div>

        {/* Right-Side Line */}
        <div className="header-right-line">
          {/* Line */}
          <div className="header-line" style={{ height: "197px" }}></div>

          {/* Rectangle with Text */}
          <div className="header-rectangle">
            <Text color={"white"} fontSize={isMobile ? "10px" : "12px"}>
              XR Developer
            </Text>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="header-content">
        <div className="header-content-section">
          <div className="header-text-container">
            <div className="header-container-desktop">
              <div className="header-rectangle">
                <Text color={"white"} fontSize={isMobile ? "10px" : "12px"}>
                  UI/UX Designer
                </Text>
              </div>
              <div className="header-rectangle">
                <Text color={"white"} fontSize={isMobile ? "10px" : "12px"}>
                  UX Researcher
                </Text>
              </div>
              <div className="header-rectangle">
                <Text color={"white"} fontSize={isMobile ? "10px" : "12px"}>
                  XR Developer
                </Text>
              </div>
            </div>
            <Text fontSize={isMobile ? "32px" : "48px"} fontWeight="700">
              Hey! :) I’m
            </Text>
            <p />
            <div style={{ marginBottom: "12px" }}>
              <Text
                fontSize={isMobile ? "32px" : "48px"}
                fontWeight="700"
                color="#908F71"
              >
                Negin Soltani.
              </Text>
            </div>
            <p>
              Welcome to my world! I’m a UI/UX designer and researcher, creative
              thinker, storyteller, and XR developer. I’m all about crafting
              user-centered experiences that feel and look incredible. Here’s a
              small look into my work and what I love doing.
            </p>
            <div className="header-buttons">
              <Button onClick={handleScrollToBottom}>Contact Me</Button>
              <Button outlined onClick={handleDownload}>
                Download CV
              </Button>
            </div>
          </div>
          <img className="header-image" src={Image} alt="content" />
        </div>
      </div>
    </div>
  );
}
