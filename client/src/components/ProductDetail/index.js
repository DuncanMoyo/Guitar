import React, { Component } from 'react'

import PageTop from '../utils/PageTop'

import {connect} from 'react-redux'
import { clearProductDetail, getProductDetail } from '../../actions/Product_actions'
import ProductInfo from './ProductInfo'



class ProductDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id
    // console.log(id);
    this.props.dispatch(getProductDetail(id))
  }

  componentWillUnmount(){
    this.props.dispatch(clearProductDetail())
  }

  render() {
    return (
      <div>
        <PageTop 
          title='Product Detail'
        />
        <div className='container'>
          {
            this.props.products.productDetail ?
             <div className='product_detail_wrapper'> 
              <div className='left'>
                images
              </div>
              <div className='right'> 
                <ProductInfo 
                  detail={this.props.products.productDetail}
                  addToCart={id => this.addToCartHandler(id)}
                />
              </div>
             </div>
            : 'Loading'
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductDetail)
