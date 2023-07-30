import React, { createContext } from "react";
import { useState } from 'react';
import Main from './components/Main/Main';
import ProductContainer from './components/ProductContainer/ProductContainer';
import OrderContainer from './components/OrderContainer/OrderContainer';
import { FiHome } from "react-icons/fi";
import { GrUnorderedList } from 'react-icons/gr'
import { SiAmazondynamodb } from 'react-icons/si'

export const AppContext = createContext({});

function AppContextProvider({ children }) {
    const [authorised, setAuthorised] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [hamburgerItems, setHamburgerItems] = useState([
        { "Text": "Home", "path": '/', iconElement: <FiHome key="mainIcon" size={20} color="#FFFFFF" />, element: <Main key="main" /> },
        { "Text": "Products", "path": '/products', iconElement: <SiAmazondynamodb key="productIcon" color="#FFFFFF" size={20} />, element: <ProductContainer key="products" /> },
        { "Text": "Order", "path": '/orders', iconElement: <GrUnorderedList key="orderIcon" color="#FFFFFF" size={20} />, element: <OrderContainer key="orders" /> }
    ]);
    const [showHamburger, toggleHamburger] = useState(true);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);



    const globalContext = {
        isDarkModeOn: darkMode,
        isAuthorised: authorised,
        setAuthorised: setAuthorised,
        setDarkMode: setDarkMode,
        hamburgerItems: hamburgerItems,
        showHamburger: showHamburger,
        toggleHamburger: toggleHamburger,
        setHamburgerItems: setHamburgerItems,
        showLogoutPopup: showLogoutPopup,
        setShowLogoutPopup: setShowLogoutPopup
    }
    return (
        <AppContext.Provider value={globalContext}>
            {children}
        </AppContext.Provider>
    )
}



export default AppContextProvider;