import styled from "styled-components";
import IconLinksPanel from "./IconLinksPanel";
import YoutubeEmbed from "./YoutubeEmbed";
import FeatureItem from "./FeatureItem";
import ContentImages from "./assets/img";
import RouteNames from './routes';
import {Link} from 'react-router-dom';

// defines in the content in the Home page
function ContentHome(): JSX.Element 
{
    return (
        <>
        <HomeContentContainer>
            <OverviewSection/>
            <FeatureSection/>
            <DetailsSection/>
        </HomeContentContainer>
        </>
    );
}

// the section of the home page that the user will first see
function OverviewSection(): JSX.Element { return <>
    <div>
        <p>A 2D volleyball game playable with friends or versus AI</p>
        <YoutubeEmbed embedId="y5-AyolVdQk" />
        <p>Tentative Release: <b>2026</b></p>
        <IconLinksPanel height={56}/>
        <p>↑ Follow us to get notified ↑</p>
        <br/>
    </div>
</>;}

// the section of the home page that showcases the various features of the game, in case they did not watch the video
function FeatureSection(): JSX.Element { return <>
    <div>
        <h1>- Features -</h1>
        <FeatureItem imgsrc={ContentImages.imgAttack}caption="Set up the perfect attack!"/>
        <FeatureItem imgsrc={ContentImages.imgLobby} caption="Play against friends!"/>
        <FeatureItem imgsrc={ContentImages.imgAiTech} caption="...or against smart AI"/>
        <FeatureItem imgsrc={ContentImages.imgCustomization} caption="Customize and level up your character"/>
        <FeatureItem imgsrc={ContentImages.imgAngle} caption="Ball angle and speed within your control"/>
    </div>
</>}

// the section of the home page that allows user to move to the About page if they want to learn even more
function DetailsSection(): JSX.Element {return <>
    <div>
        <p>Click <Link to={RouteNames.ABOUT} className="filter-white">here</Link> to learn more about the game!</p>
        <br/>
    </div>
</>}

// some formatting for this container
const HomeContentContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`

export default ContentHome;