import styled from 'styled-components'
import Icons from "./assets/icons/index.ts";
import ImageLink from "./ImageLink.tsx";

// define input for the icon links panel
interface iconLinksProps {
  height: string;
}

// returns the panel as a component
function ContentIconPanel(props: iconLinksProps): JSX.Element
{
    return ( 
      <IconList>
        <IconListItem><ImageLink height={props.height} hover="Join the Discord community!" image={Icons.iconDiscord} link="https://discord.gg/v3dGFCHqnp"/></IconListItem>
        <IconListItem><ImageLink height={props.height} hover="Subscribe on Youtube!"  image={Icons.iconYoutube} link="https://www.youtube.com/@PaperVolleyball"/></IconListItem>
        <IconListItem><ImageLink height={props.height} hover="Follow us on Instagram!" image={Icons.iconInstagram} link="https://www.instagram.com/papervolleyball/"/></IconListItem>
        <IconListItem><ImageLink height={props.height} hover="Steam page coming soon!" image={Icons.iconSteam} link=""/></IconListItem>
        <IconListItem><ImageLink height={props.height} hover="Google Play Store page coming soon!" image={Icons.iconPlay} link=""/></IconListItem>
        <IconListItem><ImageLink height={props.height} hover="Apple Store page coming soon!" image={Icons.iconApple} link=""/></IconListItem>
        <IconListItem><ImageLink height={props.height} hover="Send an email" image={Icons.iconEmail} link="mailto:papervolleyballdev@gmail.com"/></IconListItem>
      </IconList>
    );
}

// format the list of icons in this panel
const IconList = styled.ul`
    list-style: none;
    padding: 12px;
    margin: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

// format the individual icons in this panel
const IconListItem = styled.li`
    list-style: none;
    padding: 12px;
    margin: 4px;
    transition: box-shadow 0.3s ease; /* Smooth transition for the shadow effect */
    
    /* Add scale on hover for a small zoom effect */
    &:hover {
        transform: scale(1.05); /* Optional: adds a slight zoom effect when hovered */
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3)); /* Apply shadow to the image */
    }
`

export default ContentIconPanel;
