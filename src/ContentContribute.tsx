import ContentTextSection from "./ContentTextSection"

// defines in the content in the contribution page
function ContentContribute(): JSX.Element 
{
    return (
        <ContentTextSection>
          <h2>Beta Testing</h2>
          <p>
            <a href="https://go.freegiftstudio.ca/papervolleyball/discord/" target="_blank" rel="noopener noreferrer">
              Register for the playtest on Discord!
            </a>
          </p>

          <h2>Community</h2>
          <p>Join our <a href="https://go.freegiftstudio.ca/papervolleyball/discord/" target="_blank" rel="noopener noreferrer">Discord server</a> to get exclusive content and updates!</p>

          <h2>Donations</h2>
          <p>
            Support me on <a href="https://buymeacoffee.com/freegiftstudio" target="_blank" rel="noopener noreferrer">Buy Me a Coffee!</a>
          </p>
        </ContentTextSection>
    );
}
export default ContentContribute;
