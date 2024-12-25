import ContentTextSection from "./ContentTextSection"

// defines in the content in the contribution page
function ContentContribute(): JSX.Element 
{
    return (
        <ContentTextSection>
          <h1>Contribute</h1>

          <h2>Alpha Testing</h2>
          <p>Testing for the alpha phase is currently invite-only.</p>

          <h2>Community</h2>
          Watch for updates on a community Discord coming soon.

          <h2>Donations</h2>
          <p>I don't have an official donation platform yet.<p/> However, if you wish to contribute unofficially, feel free to <a href="mailto:papervolleyballdev@gmail.com" className="filter-white">send me an email</a>, and I would be grateful to accept any support.</p>
        </ContentTextSection>
    );
}
export default ContentContribute;