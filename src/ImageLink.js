import React from "react";
import PropTypes from "prop-types";

import "./Filters.css";

function ImageLink(props)
{
    // for empty link, don't create a link and grey out the icon
    if (props.link === '') {
      return ( 
      <>
          <img 
            src={props.image} 
            alt="Icon" 
            class="filter-light-gray"
            height={ props.height.toString()}
            title={props.hover}
          />
      </> 
      );
    } 
    
    // link exists, render the icon in white and make it clickable
    else {
      return ( 
      <>
          <a
            className="App-link"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            title={props.hover}
          >
            <img 
              src={props.image} 
              alt="Icon" 
              class="filter-white"
              height={ props.height.toString()}
              title={props.hover}
            />
          </a>
      </> 
      );
    }

}

ImageLink.propTypes = 
{
  height: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  hover: PropTypes.string,
};

export default ImageLink;