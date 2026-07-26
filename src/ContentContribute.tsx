import ContentTextSection from "./ContentTextSection"

// defines in the content in the contribution page
function ContentContribute(): JSX.Element 
{
    return (
        <ContentTextSection>
          <h2>Alpha Testing</h2>
          <p>Testing for the alpha phase is currently invite-only.</p>

          <h2>Community</h2>
          <p>Join our <a href="https://discord.gg/GmpUrBUA9" target="_blank" rel="noopener noreferrer">Discord server</a> to get exclusive content and updates!</p>

          <h2>Donations</h2>
          <p>I'll set up a donation platform soon!.</p>
        </ContentTextSection>
    );
}
export default ContentContribute;