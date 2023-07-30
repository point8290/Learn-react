import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom'
import { AppContext } from './AppContextProvider';
import { useContext } from 'react';

function App() {

    const globalContext = useContext(AppContext);
  
    const hamburgerItems = globalContext.hamburgerItems ;
    const reduceWidth = {
        width: globalContext.showHamburger ? '10%' : '2%'
    }
    const increaseWidth = {
        width: globalContext.showHamburger ? '90%' : '98%'
    }
  return (
  
      <div>
          <Header title='Welcome to Shopping Mall' name="Krishna Meghwal"/>
          
          <div className='mainContainer'>
            <Sidebar style={reduceWidth} hamburgerItems={hamburgerItems} showHamburger={globalContext.showHamburger} toggleHamburger={globalContext.toggleHamburger} />
            <div style={increaseWidth}>
                <Routes>
                    {hamburgerItems.map((item, index) => (
                        <Route  key={item.Text} path={item.path} element={item.element} />
                    ))}
                </Routes>
            </div>
          </div>
          
      </div>
  );
}

export default App;
