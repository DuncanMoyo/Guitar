import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/hoc/Layout";
import Home from "./components/Home";
import RegisterLogin from "./components/Register_Login";
import Register from "./components/Register_Login/Register";
import UserDashboard from "./components/User";

const Routes = () => {
  return (
    <Layout>
      <Switch>

        <Route path="/user/dashboard" exact component={UserDashboard} />

        <Route path="/" exact component={Home} />
        <Route path="/register_login" exact component={RegisterLogin} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Layout>
  );
};

export default Routes;
