import IconLinks from "./pkg/iconLink/IconLinks";
import YoutubeEmbed from "./YoutubeEmbed";
import FeatureItem from "./FeatureItem";
import ContentImages from "./assets/img";
import RouteNames from './routes';
import {Link} from 'react-router-dom';

// The contents of the home page
function ContentHome(): JSX.Element 
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
            <FeatureItem imgsrc={ContentImages.imgAttack}caption="Set up the perfect attack!"/>
            <FeatureItem imgsrc={ContentImages.imgLobby} caption="Play against friends!"/>
            <FeatureItem imgsrc={ContentImages.imgAiTech} caption="...or against smart AI"/>
            <FeatureItem imgsrc={ContentImages.imgCustomization} caption="Customize and level up your character"/>
            <FeatureItem imgsrc={ContentImages.imgAngle} caption="Ball angle and speed within your control"/>
        </div>
        <div>
            <p>Click <Link to={RouteNames.ABOUT} className="filter-white">here</Link> to learn more about the game!</p>
            <br/>
        </div>
        </>
    );
}
export default ContentHome;