import styled from "styled-components";
import ContentIconPanel from "./ContentIconPanel";
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
        <GameTitle>PAPER VOLLEYBALL</GameTitle>
        <p>A 2D volleyball game on mobile and desktop</p>
        <YoutubeEmbed embedId="y5-AyolVdQk" />
        <p>Tentative Release: <b>2026 ~ 2027</b></p>
        <ContentIconPanel height="48px"/>
        <p>↑ Follow us to get notified ↑</p>
        <br/>
    </div>
</>;}

// the section of the home page that showcases the various features of the game, in case they did not watch the video
function FeatureSection(): JSX.Element { return <>
    <div>
        <h1>- Features -</h1>
        <FeatureItem imgsrc={ContentImages.imgAttack}caption="Set up the perfect attack!"/>
        <FeatureItem imgsrc={ContentImages.imgCustomization} caption="Customize and level up your character"/>
        <FeatureItem imgsrc={ContentImages.imgAiTech} caption="Play against smart AI"/>
        <FeatureItem imgsrc={ContentImages.imgAngle} caption="Ball angle and speed within your control"/>
    </div>
</>}

// the section of the home page that allows user to move to the About page if they want to learn even more
function DetailsSection(): JSX.Element {return <>
    <div>
        <p>Click <Link to={RouteNames.ABOUT}>here</Link> to learn more about the game!</p>
        <br/>
    </div>
</>}

const GameTitle = styled.h1 `
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  /* Drop shadow */
  letter-spacing: 6px;  /* Increase character spacing */
`

// some formatting for this container
const HomeContentContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`

export default ContentHome;