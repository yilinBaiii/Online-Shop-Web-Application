
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
// import { firestore } from 'firebase'; 
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebase from 'firebase/app';

// import 'firebase/firestore';
// import 'firebase/auth';
import { auth } from "./firebase";
// import '@firebase/auth';

import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
          <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import React,{ useEffect, useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home";
// import Header from "./Header";
// import Login from "./Login";
// import Checkout from "./Checkout";
// // import { useStateValue } from "./StateProvider";
// // import { auth } from "./firebase";

// function App() {
 
// return (
  
//     <Router>
//     <div className="app">
//   <Header />
//       <Switch>
//       <Route path="/checkout">
      
//         <Checkout />
//       </Route>
//       <Route path="/login">
//         <Login />
//       </Route>
//       <Route path="/">
//           {/* <Header /> */}
//           <Home />
//       </Route>
//       </Switch>
    
//   </div>
//   </Router>
// );
// }
// export default App;