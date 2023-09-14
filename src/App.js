import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from 'react-redux'
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
import { sendDataAction } from "./store/cart-slice";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return
    }

    dispatch(sendDataAction(cart))

  }, [cart])

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message} />}
      {isLoggedIn ? 
        <Layout /> 
        : 
        <Auth />}
        
    </div>
  );
}

export default App;
