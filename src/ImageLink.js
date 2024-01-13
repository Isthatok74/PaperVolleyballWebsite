import React from "react";
import PropTypes from "prop-types";

import "./Filters.css";

function ImageLink(props)
{
    var iconHeight = props.height;
    var iconLink = props.link;

    return ( 
    <>
        <a
          className="App-link"
          href={iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={props.icon} 
            alt="Icon" 
            class="filter-white"
            height={iconHeight.toString()}
          />
        </a>
    </> 
    );
}

ImageLink.propTypes = 
{
  height: PropTypes.number.isRequired,
  link: PropTypes.string
};

export default ImageLink;