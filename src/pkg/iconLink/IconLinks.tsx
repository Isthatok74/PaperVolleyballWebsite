import Icons from "../../assets/icons/index.js";
import ImageLink from "./ImageLink.js";

import "./IconLinks.css";

interface iconLinksProps {
  height: number;
}

function IconLinks(props: iconLinksProps): JSX.Element
{
    return ( 
      <ul className="icon-list">
        <li className="icon-padding"><ImageLink height={props.height} hover="Steam page coming soon!" image={Icons.iconSteam} link=""/></li>
        <li className="icon-padding"><ImageLink height={props.height} hover="Click to follow Youtube link"  image={Icons.iconYoutube} link="https://www.youtube.com/@PaperVolleyball"/></li>
        <li className="icon-padding"><ImageLink height={props.height} hover="Instagram page coming soon!" image={Icons.iconInstagram} link=""/></li>
        <li className="icon-padding"><ImageLink height={props.height} hover="Facebook page coming soon!" image={Icons.iconFacebook} link=""/></li>
        <li className="icon-padding"><ImageLink height={props.height} hover="Click to send an email" image={Icons.iconEmail} link="mailto:papervolleyballdev@gmail.com"/></li>
      </ul>
    );
}

export default IconLinks;
