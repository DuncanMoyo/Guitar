import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/hoc/Auth";
import Layout from "./components/hoc/Layout";

import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import RegisterLogin from "./components/Register_Login";
import Register from "./components/Register_Login/Register";
import Shop from "./components/Shop";


import UserDashboard from "./components/User";
import AddProduct from "./components/User/admin/AddProduct";
import ManageCategories from "./components/User/admin/ManageCategories";
import UserCart from "./components/User/UserCart";
import UpdateProfile from './components/User/UpdateProfile'

const Routes = () => {
  return (
    <Layout>
      <Switch>  
      <Route path="/user/cart" exact component={Auth(UserCart, true)} />
      <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
        <Route path="/admin/add_product" exact component={Auth(AddProduct, true)} />
        <Route path="/admin/manage_categories" exact component={Auth(ManageCategories, true)} />
        <Route path="/user/user_profile" exact component={Auth(UpdateProfile, true)} />
        
        <Route path="/shop" exact component={Auth(Shop, null)} />
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/register_login" exact component={Auth(RegisterLogin, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/product_detail/:id" exact component={Auth(ProductDetail, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
