import React from "react";
import Text from "../shared/text";
import Divider from "../shared/divider";
import "./footer.css";
import Linkdn from "../../assets/linkedn.png";
import Github from "../../assets/github.png";
import FlexRow from "../shared/flexrow";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="getintouch">
          <Text header>Get In Touch!</Text>
        </div>
        <Text subheader>neginsolltani@gmail.com</Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/negin-soltani-5764911b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={Linkdn} className="link-image" />
          </a>
          <a
            href="https://github.com/neginsoltanii"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={Github} className="link-image" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <Divider color={"#908F71"} />
        <Text>© 2024 Negin Soltani | All rights reserved.</Text>
      </div>
    </>
  );
}
