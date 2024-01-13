import React from "react";
import Icons from "./icons/index.js";
import ImageLink from "./ImageLink.js";
import PropTypes from "prop-types";

import "./IconLinks.css";

function IconLinks(props)
{
    var iconHeight = props.height;

    return ( 
      <ul className="icon-list">
        <li className="icon-padding"><ImageLink height={iconHeight} icon={Icons.iconSteam} link="https://react.dev//"/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} icon={Icons.iconYoutube} link="https://react.dev//"/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} icon={Icons.iconInstagram} link="https://react.dev//"/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} icon={Icons.iconFacebook} link="https://react.dev//"/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} icon={Icons.iconEmail} link="https://react.dev//"/></li>
      </ul>
    );
}


IconLinks.propTypes = 
{
  height: PropTypes.number.isRequired
};

export default IconLinks;
