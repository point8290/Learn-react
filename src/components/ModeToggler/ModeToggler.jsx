import './ModeToggler.css';
import { useContext } from 'react';
import { AppContext } from '../../AppContextProvider';
function ModeToggler(props) {

    const globalContext = useContext(AppContext);

    const useToggleMode = () => {
        globalContext.setDarkMode(!globalContext.isDarkModeOn);
    }

    return (
        <button onClick={useToggleMode}  >
            {globalContext.isDarkModeOn ? "Dark" : "Light"}
        </button>
    );
}

export default ModeToggler;
