import React, { Component } from "react";
import Formfield from "../utils/Form/Formfield";
import { update, generateData, isFormValid } from "../utils/Form/FormActions";
import { connect } from "react-redux";
import { loginUser } from "../../actions/User_actions";

class Register extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
      lastName: {
        element: "input",
        value: "",
        config: {
          name: "lastName_input",
          type: "text",
          placeholder: "Enter your last name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
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
      confirmPassword: {
        element: "input",
        value: "",
        config: {
          name: "confirm_password_input",
          type: "password",
          placeholder: "Confirm your password",
        },
        validation: {
          required: true,
          confirm: "password",
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };

  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, "register");
    this.setState({
      formError: false,
      formData: newFormData,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "register");
    let formIsValid = isFormValid(this.state.formData, "register");

    if (formIsValid) {
      console.log(dataToSubmit);
      // this.props.dispatch(loginUser(dataToSubmit)).then(response => {
      //   if(response.payload.loginSuccess){
      //     console.log(response.payload);
      //     this.props.history.push('/user/dashboard')
      //   } else {
      //     this.setState({
      //       formError: true
      //     })
      //   }
      // })
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              <form onSubmit={(event) => this.submitForm(event)}>
                <h2>Personal Information</h2>
                <div className="form_block_two">
                  <div className="block">
                    <Formfield
                      id={"name"}
                      formData={this.state.formData.name}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div className="block">
                    <Formfield
                      id={"lastName"}
                      formData={this.state.formData.lastName}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
                <div>
                  <Formfield
                    id={"email"}
                    formData={this.state.formData.email}
                    change={(element) => this.updateForm(element)}
                  />
                </div>
                <h2>Verify Pasword</h2>
                <div className="form_block_two">
                  <div className="block">
                    <Formfield
                      id={"password"}
                      formData={this.state.formData.password}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div className="block">
                    <Formfield
                      id={"confirmPassword"}
                      formData={this.state.formData.confirmPassword}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
                <div>
                  {this.state.formError ? (
                    <div className="error_label">Please check your data</div>
                  ) : null}
                  <button onClick={(event) => this.submitForm(event)}>
                    Create an Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Register);
