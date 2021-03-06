import React, { Component } from "react";
import { connect } from "react-redux";
import {auth} from '../../actions/User_actions'
import CircularProgress from "@material-ui/core/CircularProgress";

export default function (ComposedClass, reload, adminRoute = null) {
  class Auth extends Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      this.props.dispatch(auth()).then((response) => {
        let user = this.props.user.userData;
        console.log(user);

        if(!user.isAuth){
          if(reload){
            this.props.history.push('/register_login')
          }
        } else {
          if(adminRoute && user.isAdmin){
            this.props.history.push('/user/dashboard')
          }else{
            if(reload === false){
              this.props.history.push('/user/dashboard')
            }
          }
        }
        this.setState({loading: false})
      });
    }

    render() {
      if (this.state.loading) {
        return (
          <div className="main_loader">
            <CircularProgress thickness={7} style={{ color: "#2196F3" }} />
          </div>
        );
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }

  return connect(mapStateToProps)(Auth);
}
