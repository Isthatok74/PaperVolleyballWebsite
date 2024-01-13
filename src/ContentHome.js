import React from "react";

import IconLinks from "./IconLinks";
import YoutubeEmbed from "./YoutubeEmbed";

// The contents of the home page
function ContentHome()
{
    return (
        <>
        <div className="FrontPageContent">
            <p>Just a simple volleyball game.</p>
            <YoutubeEmbed embedId="uWPwtVVDMvM" />
            <p>Tentative Release: <b>2025</b></p>
            <IconLinks height={60}/>
            <p>↑ Follow us to get notified ↑</p>
        </div>
        <div className="Features">
            <p>Features</p>
        </div>
        </>
    );
}
export default ContentHome;