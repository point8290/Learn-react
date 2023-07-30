import Button from '../Button/Button';
import './Sidebar.css';
import { NavLink } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";

function Sidebar(props) {
    const hamburgerItems = props.hamburgerItems;

    const hideHamburger = {
        display: props.showHamburger ? 'inline-block' : 'none'
    }


    return (
        <div style={props.style} className='hamburger'>
            <Button onClick={() => props.toggleHamburger(!props.showHamburger)} label="" showIcon={true} iconElement={<FiAlignJustify size={20} />} />
            <aside className='hamburgerList'>
                {
                    hamburgerItems.map((item, index) => (
                        <div key={index} className="hamburgerItem">
                            {item.iconElement}
                            <NavLink style={hideHamburger} className="hamburgerLink" to={item.path}> {item.Text} </NavLink>
                        </div>

                    ))
                }
            </aside>
        </div>

    );
}

export default Sidebar;
