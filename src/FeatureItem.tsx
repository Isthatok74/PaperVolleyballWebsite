interface FeatureItemProps {
    imgsrc: string;
    caption: string;
}

// A display of a feature along with a description
function FeatureItem(props: FeatureItemProps) : JSX.Element
{
    return (
        <>
        <div>

        {/* Show the caption */}
        {props.caption}<p/>

        {/* Show the image */}
        <img 
            src={props.imgsrc} 
            alt="" 
            style={{
                width: '75%',
                maxWidth: '800px',
            }}
        ></img><p/>
        
        {/* Add some more vertical spacing*/}
        <br/>

        </div> 
        </>
    );
};
export default FeatureItem;