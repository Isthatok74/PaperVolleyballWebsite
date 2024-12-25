import ImageStateful from "./ImageStateful";
import LinkExternal from "./LinkExternal"

interface ImageLinkProps {
  image: string;
  hover?: string;
  height: string;
  link?: string;
}
function ImageLink(props : ImageLinkProps): JSX.Element
{
    // common attributes 
    const imageBaseProps = {
      src: props.image,
      alt: 'Icon',
      height: props.height,
      title: props.hover,
    };

    // for empty link, don't create a link and grey out the icon
    if (props.link === '') {
      return <ImageStateful {...imageBaseProps}/>;
    } 
    
    // link exists, render the icon in white and make it clickable
    else {
      return ( 
      <>
          <LinkExternal 
            link={props.link}
            hover={props.hover}
            children={ <ImageStateful {...imageBaseProps} $active />}
          />
      </> 
      );
    }
}

export default ImageLink;