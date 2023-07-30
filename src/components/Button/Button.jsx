import './Button.css';
function Button(props) {
    const hideButtonStyle = {
        display: props.hideButton ? 'none' : 'inline'
    }

    return (
        <div style={hideButtonStyle} onMouseOver={props.onMouseOver} onClick={props.onClick}>
            {props.showIcon ? props.iconElement : ''}
            <div className='inline-button'>
                {props.label}
            </div>
        </div>
    );
}

export default Button;
