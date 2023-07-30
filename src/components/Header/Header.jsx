import './Header.css';
import Navbar from "../Navbar/Navbar"


function Header(props) {
  //Inline Css In JSX
  const cssInsideJSX = {
    "backgroundColor": "black",
    "color": "#ddd",
    "padding": "10px 20px",
    "fontWeight": 600
  }
  return (
    <header style={cssInsideJSX} >
      <Navbar name={props.name} title={props.title} />
    </header>
  );
}

export default Header;
