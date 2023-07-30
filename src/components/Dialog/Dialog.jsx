import Button from '../Button/Button';
import './Dialog.css';

function Dialog(props) {

    return (
        <div hidden={!props.showPopup} class="modal" id="modal">
            <h2>Modal Window</h2>
            <div class="content">{props.children}</div>
            <div class="actions">
                <Button class="toggle-button" hideButton={!props.showPopup} onClick={props.onClosePopup} label="Close" />

            </div>
        </div>

    );
}

export default Dialog;
