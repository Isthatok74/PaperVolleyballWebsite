import React from "react";

import IconLinks from "./IconLinks";
import YoutubeEmbed from "./YoutubeEmbed";
import FeatureItem from "./FeatureItem";
import ContentImages from "./img";

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
            <h1>- Features -</h1>
            <FeatureItem imagesrc={ContentImages.imgQuick1x1} text="Set up the perfect attack!" alignment="right"/>
            <FeatureItem imagesrc={ContentImages.imgQuick1x1} text="Play in increasingly difficult tournaments!" alignment="left"/>
            <FeatureItem imagesrc={ContentImages.imgQuick1x1} text="Play against friends!" alignment="right"/>
        </div>
        </>
    );
}
export default ContentHome;