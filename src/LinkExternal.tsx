
interface ExternalLinkProps {
  link?: string;
  hover?: string;
  children?: React.ReactNode;
}

// a wrapper which opens a link in a new page
function LinkExternal(props : ExternalLinkProps): JSX.Element {
    return (
    <>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          title={props.hover}
        >
            {props.children} 
        </a>
    </>);
}
export default LinkExternal;