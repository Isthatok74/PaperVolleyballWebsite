import React from "react";
import PropTypes from "prop-types";

import './App.css'

// A display of a feature along with a description
function FeatureItem(props)
{
    const isAlignRight =  props.alignment === "right";
    const alignClassName = isAlignRight? "right_align" : "left_align";
    const imgJSX = <><img src={props.imagesrc} alt="Feature"></img></>
    const fullJSX = isAlignRight ? <> {props.text} {imgJSX}</> : <> {imgJSX} {props.text} </>

    return (
        <>
        <div className={alignClassName}>
            {fullJSX}
        </div> 
        </>
    );
};
FeatureItem.propTypes = 
{
  alignment: PropTypes.string,
  imagesrc: PropTypes.string,
  text: PropTypes.string,
};
export default FeatureItem;