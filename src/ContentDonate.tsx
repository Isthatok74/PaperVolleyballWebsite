import ContentTextSection from "./ContentTextSection"

// defines in the content in the Donate page
function ContentDonate(): JSX.Element 
{
    return (
        <ContentTextSection>
          <h1>Donate</h1>
          <p>I don't have an official donation platform yet.<p/> However, if you wish to contribute unofficially, feel free to <a href="mailto:papervolleyballdev@gmail.com" className="filter-white">send me an email</a>, and I would be grateful to accept any support.</p>
        </ContentTextSection>
    );
}
export default ContentDonate;