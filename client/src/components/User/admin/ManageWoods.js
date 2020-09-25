import React, { Component } from 'react'

import Formfield from "../../utils/Form/Formfield";
import {
  update,
  generateData,
  isFormValid,
  resetFields,
} from "../../utils/Form/FormActions";

import { connect } from "react-redux";
import { getWoods, addWood } from "../../../actions/Product_actions";


class ManageWoods extends Component {

  state = {
    formError: false,
    formSuccess: false,
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter Wood Name",
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

  componentDidMount() {
    this.props.dispatch(getWoods());
  }

  showCategoryItems = () =>
    this.props.products.woods
      ? this.props.products.woods.map((item, i) => (
          <div className="category_item" key={item._id}>
            {item.name}
          </div>
        ))
      : null;
  
  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, "woods");
    this.setState({
      formError: false,
      formData: newFormData,
    });
  };

  resetFieldsHandler = () => {
    const newFormData = resetFields(this.state.formData, 'woods')

    this.setState({
      formData: newFormData,
      formSuccess: true,
    })
  };

  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "woods");
    let formIsValid = isFormValid(this.state.formData, "woods");
    let existingWoods = this.props.products.woods

    if (formIsValid) {
      // console.log(dataToSubmit);
      this.props.dispatch(addWood(dataToSubmit, existingWoods)).then(response => {
        if(response.payload.success){
          this.resetFieldsHandler()
        } else {
          this.setState({
            formError: true
          })
        }
      })
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <div className="admin_category_wrapper">
      <h1>Woods</h1>
      <div className="admin_two_column">
        <div className="left">
          <div className="brands_container">{this.showCategoryItems()}</div>
        </div>
        <div className="right">
          <form onSubmit={(event) => this.submitForm(event)}>
            <Formfield
              id={"name"}
              formData={this.state.formData.name}
              change={(element) => this.updateForm(element)}
            />
            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}
            <button onClick={(event) => this.submitForm(event)}>
              Add Wood
            </button>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ManageWoods);
