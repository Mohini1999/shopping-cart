import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
        <div className=" col-lg-4 col-sm-6 col-xs-4" >
          <img src={this.props.ProductData.photo} alt="Apple" useMap="#image-map" /><br></br>
          <h5>{this.props.ProductData.title}</h5>
          <h5>Price:{this.props.ProductData.price}/-</h5>
          <button className="btn btn-primary" onClick={() => this.props.addcart(this.props.ProductData)}>Add Cart</button>
          <br></br>
        </div>
    );
  }
}
export default Product;