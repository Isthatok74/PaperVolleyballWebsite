// defines the content in the footer bar
function ContentFooter(): JSX.Element 
{
    return (<p>&copy; {(new Date().getFullYear())} Terence Ma</p>);
}
export default ContentFooter;