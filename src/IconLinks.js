import React from "react";
import Icons from "./icons/index.js";
import ImageLink from "./ImageLink.js";
import PropTypes from "prop-types";

function IconLinks(props)
{
    var iconHeight = props.height;

    return ( 
    <>
      <ImageLink height={iconHeight} icon={Icons.iconEmail} link="https://react.dev//"/>
      <ImageLink height={iconHeight} icon={Icons.iconFacebook} link="https://react.dev//"/>
      <ImageLink height={iconHeight} icon={Icons.iconSteam} link="https://react.dev//"/>
      <ImageLink height={iconHeight} icon={Icons.iconInstagram} link="https://react.dev//"/>
      <ImageLink height={iconHeight} icon={Icons.iconYoutube} link="https://react.dev//"/>
    </> 
    );
}


IconLinks.propTypes = 
{
  height: PropTypes.number.isRequired
};

export default IconLinks;
