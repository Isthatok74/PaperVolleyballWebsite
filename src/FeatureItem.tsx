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
            <br/><p>{props.caption}</p>
            <p><img 
                src={props.imgsrc} 
                alt="" 
                style={{
                    width: '90%',
                    maxWidth: '800px',
                }}
            ></img></p>
        </div> 
        </>
    );
};
export default FeatureItem;