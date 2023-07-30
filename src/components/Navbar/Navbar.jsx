import Button from '../Button/Button';
import ModeToggler from '../ModeToggler/ModeToggler';
import { useContext } from 'react';
import { AppContext } from '../../AppContextProvider';
import './Navbar.css';

function Navbar(props) {

    const globalContext = useContext(AppContext);

    const onRegister = (e) => {
        console.log('Navbar > onRegister');
        console.log(e);
    }
    const onRegisterMouseOver = (e) => {
        console.log('Navbar > onRegisterMouseOver');

        console.log(e);
    }
    const onLogin = (e) => {
        console.log('Navbar > onLogin');
        console.log(e);
        globalContext.setAuthorised(true);

    }
    const onLogout = (e) => {
        console.log('Navbar > onLogout');
        console.log(e);
        globalContext.setAuthorised(false);
        globalContext.setShowLogoutPopup(true);
    }
    const onLoginMouseOver = (e) => {
        console.log('Navbar > onLoginMouseOver');

        console.log(e);
    }


    return (
        <nav className='navBar'>

            <div className='welcomeTextContainer'>Hi, {props.name}
                <div>
                    {props.title}
                </div>
            </div>
            <div className='buttonContainer'>
                <Button hideButton={globalContext.isAuthorised} onClick={onRegister} onMouseOver={onRegisterMouseOver} label="Register" />
                <Button hideButton={globalContext.isAuthorised} onClick={onLogin} onMouseOver={onLoginMouseOver} label="Login" />
                <Button hideButton={!globalContext.isAuthorised} onClick={onLogout} label="Logout" />
                <ModeToggler />
            </div>

        </nav>
    );
}

export default Navbar;
