import "./Filters.css";

interface ImageLinkProps {
  image: string;
  hover?: string;
  height: number;
  link?: string;
}
function ImageLink(props : ImageLinkProps): JSX.Element
{
    // for empty link, don't create a link and grey out the icon
    if (props.link === '') {
      return ( 
      <>
          <img 
            src={props.image} 
            alt="Icon" 
            className="filter-light-gray"
            height={ props.height.toString()}
            title={props.hover}
          />
      </> 
      );
    } 
    
    // link exists, render the icon in white and make it clickable
    else {
      return ( 
      <>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            title={props.hover}
          >
            <img 
              src={props.image} 
              alt="Icon" 
              className="filter-white"
              height={ props.height.toString()}
              title={props.hover}
            />
          </a>
      </> 
      );
    }

}

export default ImageLink;