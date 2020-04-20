import React, { Component } from "react";

class Cart extends Component {
  buydemo=()=>{
    alert("Future Functionality")
  }
  render() {
    return (
      <div >
        <div >
          <img style={{height:"200px"}}
            src={this.props.data.photo}
            alt="Not Selected Any Item."
          ></img>
        </div>
        <div>
          <h5>{this.props.data.title}</h5>
        </div>
        <div>
          <label>Price : {this.props.data.price}</label>
        </div>
        <div>
          <button className="btn btn-primary btn-sm"
          type="submit" 
          onClick={this.buydemo}>
            Buy Now
          </button>&nbsp;&nbsp;&nbsp;
          <button className="btn btn-primary btn-sm" 
          type="submit" 
          onClick={this.props.removecart}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}
export default Cart;