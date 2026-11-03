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
      <CtaGrid>
        <CtaGroup>
          <CtaHeading>Wishlist it now!</CtaHeading>
          <CtaDescription>Choose your platform</CtaDescription>
          <IconList>
            <IconListItem><ImageLink height={props.height} hover="Wishlist it on Steam!" image={Icons.iconSteam} link="https://store.steampowered.com/app/5292050/Paper_Volleyball/"/></IconListItem>
            <IconListItem><ImageLink height={props.height} hover="Google Play — coming soon!" image={Icons.iconPlay} link=""/></IconListItem>
            <IconListItem><ImageLink height={props.height} hover="Apple App Store — coming soon!" image={Icons.iconApple} link=""/></IconListItem>
          </IconList>
        </CtaGroup>

        <CtaGroup>
          <CtaHeading>Follow me on socials!</CtaHeading>
          <CtaDescription>Updates, clips &amp; dev support</CtaDescription>
          <IconList>
            <IconListItem><ImageLink height={props.height} hover="Subscribe on YouTube" image={Icons.iconYoutube} link="https://www.youtube.com/@PaperVolleyball"/></IconListItem>
            <IconListItem><ImageLink height={props.height} hover="Follow me on Instagram!" image={Icons.iconInstagram} link="https://www.instagram.com/papervolleyball/"/></IconListItem>
            <IconListItem><ImageLink height={props.height} hover="Buy me a coffee!" image={Icons.iconCoffee} link="https://buymeacoffee.com/freegiftstudio"/></IconListItem>
          </IconList>
        </CtaGroup>

        <CtaGroup>
          <CtaHeading>Join the community!</CtaHeading>
          <CtaDescription>Chat with us &amp; sign up for the beta</CtaDescription>
          <IconList>
            <IconListItem><ImageLink height={props.height} hover="Join the Discord &amp; sign up for the beta!" image={Icons.iconDiscord} link="https://discord.gg/GmpUrBUA9"/></IconListItem>
          </IconList>
        </CtaGroup>

        <CtaGroup>
          <CtaHeading>Business inquiries</CtaHeading>
          <CtaDescription>Get in touch by email</CtaDescription>
          <IconList>
            <IconListItem><ImageLink height={props.height} hover="Email me for business inquiries" image={Icons.iconEmail} link="mailto:papervolleyballdev@gmail.com"/></IconListItem>
          </IconList>
        </CtaGroup>
      </CtaGrid>
    );
}

const CtaGrid = styled.div`
    width: min(100%, 960px, calc(100vw - 28px));
    box-sizing: border-box;
    margin: 1.25rem auto 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const CtaGroup = styled.section`
    min-width: 0;
    box-sizing: border-box;
    padding: 20px 16px 12px;
    border: 2px solid rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.045);
`

const CtaHeading = styled.h2`
    margin: 0;
    font-size: 1.15em;
`

const CtaDescription = styled.p`
    margin: 6px 0 4px;
    font-size: 0.72em;
    opacity: 0.75;
`

const IconList = styled.ul`
    list-style: none;
    padding: 4px;
    margin: 4px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

// format the individual icons in this panel
const IconListItem = styled.li`
    list-style: none;
    padding: 10px;
    margin: 4px;
    transition: transform 0.2s ease, filter 0.2s ease;
    
    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
    }
`

export default ContentIconPanel;
