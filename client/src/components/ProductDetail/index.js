import React, { Component } from 'react'

import PageTop from '../utils/PageTop'

import {connect} from 'react-redux'
import { clearProductDetail, getProductDetail } from '../../actions/Product_actions'
import ProductInfo from './ProductInfo'
import ProductImage from './ProductImage'



class ProductDetail extends Component {

  componentDidMount() {
    const id = this.props.match.params.id
    // console.log(id);
    this.props.dispatch(getProductDetail(id)).then(response => {
      if(this.props.products.productDetail) {
        // console.log('No article found');
        this.props.history.push('/')
      }
    })
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
                <div style={{
                  'width': '500px'
                }}>
                  <ProductImage 
                    detail={this.props.products.productDetail}
                  />
                </div>
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
