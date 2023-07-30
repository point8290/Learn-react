import './Main.css';
import Banner from "../Banner/Banner"
import Cart from '../Cart/Cart';
import { AppContext } from '../../AppContextProvider';
import banner from '../../assets/images/banner.jpg'
import ReactPlayer from "react-player"
import Login from '../Login/Login';
import { useContext } from 'react';
import Dialog from '../Dialog/Dialog';


function Main(props) {
    const globalContext = useContext(AppContext);

    return (
        <div className='dashboardContainer'>
            <h1>Let's shop</h1>
            <Cart hideButtons={!globalContext.isAuthorised} />
            <Banner src={banner} />
            <ReactPlayer
                url={"https://www.youtube.com/watch?v=ObWzvqknX2A"}
                volume={0.5}
                playing={false}
            />
            <Login />
            <Dialog id="logoutPopup" showPopup={globalContext.showLogoutPopup} onClosePopup={e => globalContext.setShowLogoutPopup(false)}>
                <h1>You have been logged out.</h1>
            </Dialog>
        </div>
    );
}

export default Main;
