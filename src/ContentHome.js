import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import IconLinks from "./IconLinks";

// The contents of the home page
function ContentHome()
{
    return (
        <>
            <p>Just a simple volleyball game.</p>
            <YoutubeEmbed embedId="uWPwtVVDMvM" />
            <p>Tentative Release: <b>2025</b></p>
            <p>Get notified: 
                <IconLinks height={24}/> 
            </p>
        </>
    );
}
export default ContentHome;