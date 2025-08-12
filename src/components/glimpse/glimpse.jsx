import React, { useEffect, useRef } from "react";

import Text from "../shared/text";
import FlexRow from "../shared/flexrow";
import Button from "../shared/button";
import BrainsClinic from "../../assets/brainsClinic.png";
import linkIcon from "../../assets/link-icon.png";
import BlueBird from "../../assets/bluebird.png";
import MindPal from "../../assets/mindpal.png";
import EmissionVision from "../../assets/emissionvision.jpg";
import ElementalMysteries from "../../assets/elementalmysteries.jpg";
import iQLast from "../../assets/iQLast.jpg";
import khu from "../../assets/khu.png";
import hack from "../../assets/hack.jpg";
import "./glimpse.css";

export default function Glimpse() {
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.scrollLeft = 50;
    }
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div className="glimpse-header">
        <Text header>A Glimpse Of My Creative World</Text>
      </div>
      <div className="glimpse-container">
        <FlexRow className="glimpse-item">
          <div className="glimpse-image-wrapper" ref={imageWrapperRef}>
            <img src={iQLast} alt="iQliniQ content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader style={{ display: "flex", alignItems: "center" }}>
              iQliniQ{" "}
              <a
                href="https://iqliniq.com/#team"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              Part of the design team, designing core workflows such as patient booking, admin panel, and patient dashboard to streamline appointments, manage services, and ease clinicians' workloads. Focused on reducing clinician burden and simplifying patient access to key features like scheduling and document handling. Utilized the Minimal Web design system to ensure consistency, clarity, and scalability across the platform.
            </Text>
            <div className="glimpse-roles">
              <Text color={"#908f71"} className="glimpse-role">
                UI/UX Designer
              </Text>
              <Text color={"#908f71"} className="glimpse-role">
                UX Researcher
              </Text>
            </div>
          </div>
        </FlexRow>
        <FlexRow reverse className="glimpse-item">
          <div className="glimpse-image-wrapper" ref={imageWrapperRef}>
            <img src={BrainsClinic} alt="content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader style={{ display: "flex", alignItems: "center" }}>
              All Brains Clinic{" "}
              <a
                href="https://allbrainsclinic.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              Designed the user interface and user experience for a psychiatry
              clinic in Canada, focusing on creating a seamless, accessible, and
              user-friendly platform to enhance patient engagement and care
              delivery.
            </Text>
            <div className="glimpse-roles">
              <Text color={"#908f71"} className="glimpse-role">
                UI/UX Designer
              </Text>
            </div>
          </div>
        </FlexRow>
        <FlexRow className="glimpse-item">
          <div className="glimpse-image-wrapper" ref={imageWrapperRef}>
            <img src={khu} alt="Kharazmi University Portal content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader style={{ display: "flex", alignItems: "center" }}>
              Kharazmi University{" "}
              <a
                href="https://khu.ac.ir/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              Designed the user interface for the university's online portal, enhancing accessibility and usability across key features like e-services, login panels, and navigation systems (students, faculty, staff).
            </Text>
            <div className="glimpse-roles">
              <Text color={"#908f71"} className="glimpse-role">
                UI/UX Designer
              </Text>
            </div>
          </div>
                </FlexRow>
        <FlexRow reverse className="glimpse-item">
          <div className="glimpse-image-wrapper" ref={imageWrapperRef}>
            <img src={MindPal} alt="content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader>Mind Pal</Text>
            <p />
            <Text>
              Designed the user interface and experience for the British
              Columbia Children's Hospital, focusing on improving mental health
              support for young patients through an engaging and user-friendly
              digital platform.
            </Text>
            <div className="glimpse-roles">
              <Text className="glimpse-role" color={"#908f71"}>
                UI/UX Designer
              </Text>
            </div>
          </div>
        </FlexRow>
        <FlexRow className="glimpse-item">
          <div className="glimpse-image-wrapper" ref={imageWrapperRef}>
            <img src={BlueBird} alt="content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader>
              Bluebird Heart Press{" "}
              <a
                href="https://docs.google.com/presentation/d/1msnNX9pc5GTXDhGoIOstACGPHDbH8arrYTRHIb7GORA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              Designed the user interface and experience, and conducted UX
              research for a poetry application as part of the "Introduction to
              Design for Creative and Immersive Technology" course at Stockholm
              University.
            </Text>
            <div className="glimpse-roles">
              <Text className="glimpse-role" color={"#908f71"}>
                UI/UX Designer
              </Text>
              <Text className="glimpse-role" color={"#908f71"}>
                UX Researcher
              </Text>
            </div>
          </div>
        </FlexRow>

        

        <FlexRow className="glimpse-item">
          <div className="glimpse-image-wrapper">
            <img src={EmissionVision} alt="content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader>
              Emission Vision{" "}
              <a
                href="https://github.com/neginsoltanii/EmissionVision"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              Emission Vision is a mixed reality digital twin designed during
              the Design for Complex and Dynamic Contexts course at Stockholm
              University. It provides an interactive and collaborative way of
              analyzing global CO2 emissions data and each country's
              contribution. By integrating real-world environmental data into a
              3D visualization, Emission Vision enables users to explore,
              analyze, and compare the complex trends of CO2 emissions over
              time. Policymakers and environmental analysts can gain valuable
              insights, make accurate projections, and collaborate in real-time
              to address global environmental challenges.
            </Text>
            <div className="glimpse-roles">
              <Text className="glimpse-role" color={"#908f71"}>
                UI/UX Designer
              </Text>
              <Text className="glimpse-role" color={"#908f71"}>
                XR Developer
              </Text>
            </div>
            <div className="buttonContainer">
              <Button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/posts/negin-soltani-5764911b9_emissionvision-unity-mixedreality-activity-7249040172426645504-12Yo?utm_source=share&utm_medium=member_desktop",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Portfolio Video
              </Button>
            </div>
          </div>
        </FlexRow>
        <FlexRow reverse className="glimpse-item">
          <div className="glimpse-image-wrapper">
            <img
              src={ElementalMysteries}
              alt="content"
              className="glimpse-image"
            />
          </div>
          <div className="glimpse-text">
            <Text subheader>
              Elemental Mysteries{" "}
              <a
                href="https://github.com/neginsoltanii/NNMDETGroupProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              Elemental Mysteries" is an immersive Virtual Reality (VR)
              educational experience developed for the Designing for Emerging
              Technologies course at Stockholm University. It explores the
              ancient concepts of water, fire, air, and earth introduced by the
              Greek pre-Socratic philosopher Empedocles. These elements, once
              believed to form the foundation of everything, are reimagined in a
              modern context to bridge the growing disconnect between the
              digital and natural worlds. The experience combined virtual
              reality with real-world feedback and tangible interactions to
              deepen immersion, for instance users interacted with sensors
              integrated in soil or water without knowing, which greatly
              enhanced engagement and the surprise factor.
            </Text>
            <div className="glimpse-roles">
              <Text className="glimpse-role" color={"#908f71"}>
                XR Developer
              </Text>
            </div>
            <div className="buttonContainer">
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1FNTVYRTObIoVDy56z3V__hkAS_pfEYow/view?usp=sharing",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                Demo Video
              </Button>
            </div>
          </div>
        </FlexRow>
        <FlexRow className="glimpse-item">
          <div className="glimpse-image-wrapper" ref={imageWrapperRef}>
            <img src={hack} alt="Hatch & Match – XRHack 2024 content" className="glimpse-image" />
          </div>
          <div className="glimpse-text">
            <Text subheader style={{ display: "flex", alignItems: "center" }}>
              Hatch & Match – XRHack 2024{" "}
              <a
                href="https://docs.google.com/presentation/d/1AKcFuqYu8K9D1oP8V6XqCwsye7iN69UTo_K1IK6Xwd8/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={linkIcon} className="link-image" />
              </a>
            </Text>
            <p />
            <Text>
              As part of a team at XRHack 2024, I contributed to developing the game concept and was responsible for designing the game assets and the complete UI in ShapesXR and Figma. I also created animations and visual materials for the pitch, and presented the idea in our video submission.
            </Text>
            <div className="glimpse-roles">
              <Text className="glimpse-role" color={"#908f71"}>
                UI/UX Designer
              </Text>
              
              <Text className="glimpse-role" color={"#908f71"}>
                XR Developer
              </Text>
            </div>
          </div>
        </FlexRow>
      </div>
    </div>
  );
}
