import React from "react";
import PropTypes from "prop-types";

import './App.css'

// A display of a feature along with a description
function FeatureItem(props)
{
    const imgJSX = <><img src={props.imagesrc} alt=""></img></>
    const fullJSX = <>{props.text}<p/>{imgJSX}</>

    return (
        <>
        <div>
            {fullJSX}
            <p/>
        </div> 
        </>
    );
};
FeatureItem.propTypes = 
{
  imagesrc: PropTypes.string,
  text: PropTypes.string,
};
export default FeatureItem;