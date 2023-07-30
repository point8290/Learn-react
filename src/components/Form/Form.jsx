import './Form.css';

function Form(props) {

    return (
        <form onSubmit={props.submitHandler}>
            <fieldset>
                {props.children}
            </fieldset>
        </form>
    );
}

export default Form;
