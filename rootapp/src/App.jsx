import React from "react";
import ReactDOM from "react-dom";
import Header from "header/header";
import Catalog from "catalog/catalog";
import { StoreProvider } from "store/store";
import { GlobalStore } from 'redux-micro-frontend';
import { rootReducer } from "./store/rootReducer";
import "./index.scss";

const App = () =>  {
  const globalStore = GlobalStore.Get(false);
  const store = globalStore.CreateStore("RootApp", rootReducer, [] );
  globalStore.RegisterGlobalActions("RootApp", ["INCREMENT_COUNTER", "DECREMENT_COUNTER"]);
 return(  
  <div>
      <Header />  
      <Catalog />
  </div>);
};
ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("app"));
