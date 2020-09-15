import React, { Component } from "react";

import { connect } from "react-redux";
import Formfield from "../utils/Form/Formfield";
import {update, generateData, isFormValid} from '../utils/Form/FormActions'
import {loginUser} from '../../actions/User_actions'

import {withRouter} from 'react-router-dom'

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, "login");
    this.setState({
      formError: false, 
      formData: newFormData
    })
  };

  submitForm = (event) => {
    event.preventDefault()
    let dataToSubmit = generateData(this.state.formData, 'login')
    let formIsValid = isFormValid(this.state.formData, 'login')
   
    if(formIsValid){
      // console.log(dataToSubmit);
      this.props.dispatch(loginUser(dataToSubmit)).then(response => {
        if(response.payload.loginSuccess){
          console.log(response.payload);
          this.props.history.push('/user/dashboard')
        } else {
          this.setState({
            formError: true
          })
        }
      })
    }else {
      this.setState({
        formError: true
      })
    }
  };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={(event) => this.submitForm()}>
          <Formfield
            id={"email"}
            formData={this.state.formData.email}
            change={(element) => this.updateForm(element)}
          />
          <Formfield
            id={"password"}
            formData={this.state.formData.password}
            change={(element) => this.updateForm(element)}
          />
          {this.state.formError ?
            <div className='error_label'>
              Please check your data
            </div>
            : null
          }
          <button onClick={event => this.submitForm(event)}>Sign IN</button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(Login));