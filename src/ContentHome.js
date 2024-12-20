import React from "react";

import IconLinks from "./IconLinks";
import YoutubeEmbed from "./YoutubeEmbed";
import FeatureItem from "./FeatureItem";
import ContentImages from "./img";
import RouteNames from './routes';

// The contents of the home page
function ContentHome()
{
    return (
        <>
        <div className="FrontPageContent">
            <p>A 2D volleyball game playable with friends or versus AI</p>
            <YoutubeEmbed embedId="y5-AyolVdQk" />
            <p>Tentative Release: <b>2026</b></p>
            <IconLinks height={60}/>
            <p>↑ Follow us to get notified ↑</p>
        </div>
        <div className="Features">
            <h1>- Features -</h1>
            <FeatureItem imagesrc={ContentImages.imgQuick1x1} text="Set up the perfect attack!"/>
            <FeatureItem imagesrc={ContentImages.imgQuick1x1} text="Play in increasingly difficult tournaments!"/>
            <FeatureItem imagesrc={ContentImages.imgQuick1x1} text="Play against friends!"/>
        </div>
        <div>
            <p>Click <a href={RouteNames.ABOUT} class="filter-white">here</a> to learn more about the game!</p>
            <br/>
        </div>
        </>
    );
}
export default ContentHome;