import React from "react";
import "../styles/template.css";
import "../styles/About.css";

const About = (props) => {
  return (
    <div className="aboutBox">
      <div className="assignInfo">
        <h2>Assignment 1</h2>
        <h3>COMP 4513: Randy Connolly</h3>
        <p>
          Designed by: Hatoon Al-Nakshabandi, Dylan Borchert, and Darren Lam
        </p>
        <a href="https://github.com/dborc610/comp4513-f2021-assign1">
          github Repo
        </a>
      </div>
      <div className="lists">
        <ul classNames="techUsed">
          <li>React</li>
          <li>React-DOM</li>
          <li>React-modal</li>
          <li>React-router</li>
          <li>React-router-DOM</li>
          <li>React-tabs</li>
          <li>lodash</li>
          <li>Style-components</li>
        </ul>
        <ul className="sources">
          <li>
            Heart Logos from
            <a
              target="_blank"
              href="https://fonts.google.com/icons?selected=Material+Icons+Outlined:assignment_returned&icon.query=heart"
            >
              Google Icons
            </a>
          </li>
          <li>
            Some button Styling
            <a
              target="_blank"
              href="https://moderncss.dev/css-button-styling-guide/"
            >
              from
            </a>
          </li>
          <li>
            Icons made by
            <a target="_blank" href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>
            from
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </li>
          <li>
            Scroll bar styles from
            <a
              target="_blank"
              href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp"
            >
              here
            </a>
          </li>
          <li>
            Local storage code setup
            <a
              target="_blank"
              href="https://blog.logrocket.com/using-localstorage-react-hooks/"
            >
              from
            </a>
          </li>
          <li>
            <a target="_blank" href="link">
              LINK
            </a>
          </li>
        </ul>
      </div>
      <div className="close">
        <button
          className="buttonSolid buttonThin"
          onClick={props.onRequestClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default About;
