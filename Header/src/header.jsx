import React, { useState } from "react";
import "./index.scss"
// import { useStore } from "store/store";
import {GlobalStore} from 'redux-micro-frontend';
const Header = () => {
    const [cart, setCart] = useState(0);
    const globalStore = GlobalStore.Get();
      try {
        globalStore.SubscribeToGlobalState("CatalogApp", dataChanged);
      }
      catch(error) {
        // error handling
      }
      
function dataChanged(data) {
    setCart(data.RootApp.global);
}
     
 return <header className="header">Total cart items: {cart}</header>
};
export default Header;