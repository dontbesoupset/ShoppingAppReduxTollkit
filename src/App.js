import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from 'react-redux'
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {

    const sendRequest = async () => {
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending request",
        type: 'warning'
      }))
      const res = await fetch('https://shoppingcartreduxhttp-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      })
      const data = await res.json();

       dispatch(uiActions.showNotification({
        open: true,
        message: "Sent Requet To Database Successfully",
        type: 'success'
      }))

    }
    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request Failed",
        type: 'error'
      }))
    });
  }, [cart])

  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {isLoggedIn ? 
        <Layout /> 
        : 
        <Auth />}
        
    </div>
  );
}

export default App;
