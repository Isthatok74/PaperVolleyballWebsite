import React from "react";

import IconLinks from "./IconLinks";
import YoutubeEmbed from "./YoutubeEmbed";
import FeatureItem from "./FeatureItem";
import ContentImages from "./img";
import RouteNames from './routes';
import {Link} from 'react-router-dom';

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
            <br/>
        </div>
        <div className="Features">
            <h1>- Features -</h1>
            <FeatureItem imagesrc={ContentImages.imgAttack}text="Set up the perfect attack!"/>
            <FeatureItem imagesrc={ContentImages.imgLobby} text="Play against friends!"/>
            <FeatureItem imagesrc={ContentImages.imgAiTech} text="...or against smart AI"/>
            <FeatureItem imagesrc={ContentImages.imgCustomization} text="Customize and level up your character"/>
            <FeatureItem imagesrc={ContentImages.imgAngle} text="Ball angle and speed within your control"/>
        </div>
        <div>
            <p>Click <Link to={RouteNames.ABOUT} class="filter-white">here</Link> to learn more about the game!</p>
            <br/>
        </div>
        </>
    );
}
export default ContentHome;