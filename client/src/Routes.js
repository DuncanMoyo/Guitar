import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/hoc/Auth";
import Layout from "./components/hoc/Layout";

import Home from "./components/Home";
import RegisterLogin from "./components/Register_Login";
import Register from "./components/Register_Login/Register";
import Shop from "./components/Shop";


import UserDashboard from "./components/User";

const Routes = () => {
  return (
    <Layout>
      <Switch>  
        <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
