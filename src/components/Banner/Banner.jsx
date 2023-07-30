import './Banner.css';

function Banner(props) {
    function Image(props) {
        return <img className='image' src={props.src} alt='' />;
    }

    return (
        <div className='bannerContainer'>
            <Image src={props.src} />
        </div>
    );
}

export default Banner;
