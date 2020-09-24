import React, { Component } from "react";
import UserLayout from "../../hoc/UserLayout";

import Formfield from "../../utils/Form/Formfield";
import {
  update,
  generateData,
  isFormValid,
  populateOptionFields,
  resetFields
} from "../../utils/Form/FormActions";

import { connect } from "react-redux";
import {
  getBrands,
  getWoods,
  addProduct,
  clearProduct
} from "../../../actions/Product_actions";

class AddProduct extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Product Name",
          name: "name_input",
          type: "text",
          placeholder: "Enter Guitar Name",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      description: {
        element: "textarea",
        value: "",
        config: {
          label: "Product Description",
          name: "description_input",
          type: "text",
          placeholder: "Enter your description",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      price: {
        element: "input",
        value: "",
        config: {
          label: "Product Price",
          name: "price_input",
          type: "number",
          placeholder: "Enter your price",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      brand: {
        element: "select",
        value: "",
        config: {
          label: "Product Brand",
          name: "brands_input",
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      shipping: {
        element: "select",
        value: "",
        config: {
          label: "Shipping",
          name: "shipping_input",
          options: [
            { key: true, value: "Yes" },
            { key: false, value: "No" },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      available: {
        element: "select",
        value: "",
        config: {
          label: "Available in stock",
          name: "available_input",
          options: [
            { key: true, value: "Yes" },
            { key: false, value: "No" },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      wood: {
        element: "select",
        value: "",
        config: {
          label: "Wood Material",
          name: "wood_input",
          options: [],
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      frets: {
        element: "select",
        value: "",
        config: {
          label: "Number of Frets",
          name: "frets_input",
          options: [
            { key: 20, value: 20 },
            { key: 21, value: 21 },
            { key: 22, value: 22 },
            { key: 24, value: 24 },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
      publish: {
        element: "select",
        value: "",
        config: {
          label: "Publish",
          name: "publish_input",
          options: [
            { key: true, value: "Public" },
            { key: false, value: "Hidden" },
          ],
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
      },
    },
  };

  updateFields = (newFormData) => {
    this.setState({
      formData: newFormData,
    });
  };

  componentDidMount() {
    const formdata = this.state.formData;

    this.props.dispatch(getBrands()).then((response) => {
      // console.log(this.props.products.brands);
      const newFormData = populateOptionFields(
        formdata,
        this.props.products.brands,
        "brand"
      );
      // console.log(newFormData);
      this.updateFields(newFormData);
    });

    this.props.dispatch(getWoods()).then((response) => {
      // console.log(this.props.products.brands);
      const newFormData = populateOptionFields(
        formdata,
        this.props.products.woods,
        "wood"
      );
      // console.log(newFormData);
      this.updateFields(newFormData);
    });
  }

  updateForm = (element) => {
    const newFormData = update(element, this.state.formData, "products");
    this.setState({
      formError: false,
      formData: newFormData,
    });
  };

  resetFieldHandler = () => {
    const newFormData = resetFields(this.state.formData, 'products')

    this.setState({
      formData: newFormData,
      formSuccess: true,
    })
    setTimeout(() => {
      this.setState({
        formSuccess: false
      }, () => {
        this.props.dispatch(clearProduct())
      })
    }, 3000)
  };

  submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(this.state.formData, "products");
    let formIsValid = isFormValid(this.state.formData, "products");

    if (formIsValid) {
      // console.log(dataToSubmit);
      this.props.dispatch(addProduct(dataToSubmit)).then(() => {
        if (this.props.products.addProduct.success) {
          this.resetFieldHandler();
        } else {
          this.setState({ formError: true });
        }
      });
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <UserLayout>
        <div>
          <h1>Add Product</h1>
          <form onSubmit={(event) => this.submitForm(event)}>
            <Formfield
              id={"name"}
              formData={this.state.formData.name}
              change={(element) => this.updateForm(element)}
            />
            <Formfield
              id={"description"}
              formData={this.state.formData.description}
              change={(element) => this.updateForm(element)}
            />
            <Formfield
              id={"price"}
              formData={this.state.formData.price}
              change={(element) => this.updateForm(element)}
            />

            <div className="form_divider"></div>

            <Formfield
              id={"brand"}
              formData={this.state.formData.brand}
              change={(element) => this.updateForm(element)}
            />
            <Formfield
              id={"shipping"}
              formData={this.state.formData.shipping}
              change={(element) => this.updateForm(element)}
            />
            <Formfield
              id={"available"}
              formData={this.state.formData.available}
              change={(element) => this.updateForm(element)}
            />
            <div className="form_divider"></div>
            <Formfield
              id={"wood"}
              formData={this.state.formData.wood}
              change={(element) => this.updateForm(element)}
            />
            <Formfield
              id={"frets"}
              formData={this.state.formData.frets}
              change={(element) => this.updateForm(element)}
            />
            <div className="form_divider"></div>
            <Formfield
              id={"publish"}
              formData={this.state.formData.publish}
              change={(element) => this.updateForm(element)}
            />
            {this.state.formSuccess ? (
              <div className="form_success">Success!!!</div>
            ) : null}

            {this.state.formError ? (
              <div className="error_label">Please check your data</div>
            ) : null}
            <button onClick={(event) => this.submitForm(event)}>
              Add Product
            </button>
          </form>
        </div>
      </UserLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(AddProduct);
