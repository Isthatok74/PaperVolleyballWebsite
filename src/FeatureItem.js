import React from "react";
import PropTypes from "prop-types";

import './App.css'

// A display of a feature along with a description
function FeatureItem(props)
{
    const imgJSX = <>
        <img 
            src={props.imagesrc} 
            alt="" 
            style={{
                width: '75%',
                maxWidth: '800px',
            }}
        >
        </img>
    </>
    const fullJSX = <>{props.text}<p/>{imgJSX}<p/><br/></>

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