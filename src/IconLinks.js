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
        <li className="icon-padding"><ImageLink height={iconHeight} hover="Steam page coming soon!" image={Icons.iconSteam} link=""/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} hover="Click to follow Youtube link"  image={Icons.iconYoutube} link="https://www.youtube.com/@PaperVolleyball"/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} hover="Instagram page coming soon!" image={Icons.iconInstagram} link=""/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} hover="Facebook page coming soon!" image={Icons.iconFacebook} link=""/></li>
        <li className="icon-padding"><ImageLink height={iconHeight} hover="Click to send an email" image={Icons.iconEmail} link="mailto:papervolleyballdev@gmail.com"/></li>
      </ul>
    );
}


IconLinks.propTypes = 
{
  height: PropTypes.number.isRequired
};

export default IconLinks;
