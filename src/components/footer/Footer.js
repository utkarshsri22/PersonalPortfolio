import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
<<<<<<< HEAD
          {emoji("Made with ❤️ by DeveloperFolio Team")}
=======
          {emoji("Made with ❤️ by Utkarsh Srivastava")}
>>>>>>> 6fb5650 (Initial commit - added project code)
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
<<<<<<< HEAD
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
=======
            href="https://github.com/utkarshsri22"
            target="_blank"
            rel="noreferrer"
          >
            Bravima
>>>>>>> 6fb5650 (Initial commit - added project code)
          </a>
        </p>
      </div>
    </Fade>
  );
}
