import React, { Component } from "react";
import "./App.css";
import Header from "./component/header";
import Filter from "./component/Filter";
import Product from "./component/Product";
import Cart from "./component/Cart";
import "./component/style.css"

class App extends Component {
  state = {
    //Product array
    Product: [
      {
        id: 1,
        price: 10000,
        photo: require("./component/Image/Im2.jpeg"),
        title: "Redmi",
        ptype: "smartphone",
        os:"android"
      },
      {
        id: 2,
        price: 20000,
        photo: require("./component/Image/Im4.jpeg"),
        title: "Redmi",
        ptype: "feature",
        os:"android"
      },
      {
        id: 3,
        price: 18000,
        photo: require("./component/Image/Im5.jpeg"),
        title: "RealMI",
        ptype: "smartphone",
        os:"android"
      },
      {
        id: 4,
        price: 15000,
        photo: require("./component/Image/Im7.jpeg"),
        title: "Apple",
        ptype: "smartphone",
        os:"iphone"
      },
      {
        id: 5,
        price: 50000,
        photo: require("./component/Image/Im2.jpeg"),
        title: "Apple",
        ptype: "feature",
        os:"iphone"
      },
      {
        id: 6,
        price: 10000,
        photo: require("./component/Image/Im4.jpeg"),
        title: "RealMI",
        ptype: "smartphone",
        os:"android"
      },
    ],
    
    //array for Cart
    cart: [],
    add2: [],
    //array for filters
    Type: [
      {id:1,value:"smartphone",check:false},
      {id:2,value:"feature",check:false}
    ],
    Brand: [
      {id:1, value:"Redmi", check:false},
      {id:2, value:"RealMI", check:false},
      {id:3, value:"Apple", check:false}
    ],
    OS: [
      {id:1, value:"android", check:false},
      {id:2, value:"iphone", check:false}
    ]
  };
  // For Add to cart
  AddCart = (ProductID) => {
    let idd=this.state.cart.filter((c) => c.id === ProductID.id);
    if(idd.length >=1){
      alert("you can not add the product");
    }else{
    let add1 = this.state.Product.filter((v) => v.id === ProductID.id);
    let add2 = this.state.add2;
    add2.push(add1[0]);
    this.setState({ cart: add2 });
    }
  };
  // For Remove cart
  removecart = id => {
    if (id.id === 0) {
      alert("can't Remove this Cart")
    } else {
      if (this.state.cart.length !==0) {
        this.state.add2.splice(this.state.add2.indexOf(id), 1);
        this.setState({ cart: this.state.cart });
      }
    }
  };  

  //Filter for type
  filterByType = (id,ptype)=>{
    const prott = [...this.state.Type];
    const index = prott.indexOf(id);
    prott[index] = {...id};
    prott[index].check = true;
    this.setState({ Type: prott });
    if (ptype === "smartphone") {
      const typefilterArray = this.state.Product.filter(typefilterArray => typefilterArray.ptype === "smartphone");
      this.setState({ Product: typefilterArray});
    } else  {
      const typefilterArray = this.state.Product.filter(typefilterArray => typefilterArray.ptype === "feature");
      this.setState({ Product: typefilterArray});
    }
  };

  filterByBrand=(title,id)=>{
    const prottitle = [...this.state.Brand];
    const index = prottitle.indexOf(id);
    prottitle[index]={...id};
    prottitle[index].check = true;
    let filteredProduct = []
    if(title === "Redmi"){
      const brand2 = this.state.Product.filter(ba2 => ba2.title === "Redmi");
      console.log(brand2);
      filteredProduct =  brand2;
    }else if(title === "RealMI"){
      const brand1 = this.state.Product.filter(ba1 => ba1.title === "RealMI");
      console.log(brand1);
      filteredProduct =  brand1;
    }else{
      const brand3 = this.state.Product.filter(ba3 => ba3.title === "Apple");
      console.log(brand3);
      filteredProduct =  brand3;
    }
    console.log('filteredProduct', filteredProduct);
    this.setState({
        Product : filteredProduct,
        Brand:prottitle
    });
  };
  //Filter for OS
  filterByOS = (os,id)=>{
    const opts = [...this.state.OS];
    const index = opts.indexOf(id);
    opts[index] = {...id};
    opts[index].check = true;
    this.setState({ OS: opts });
    if (os === "android") {
      const OSfilterArray = this.state.Product.filter(OSfilterArray => OSfilterArray.os === "android");
      this.setState({ Product: OSfilterArray });
    } else  {
      const OSfilterArray = this.state.Product.filter(OSfilterArray => OSfilterArray.os === "iphone");
      this.setState({ Product: OSfilterArray });
    }
  };

  //remove type filter
   handleDelete = ()=> {
    const items = this.state.Product.filter(dummyProduct => dummyProduct.id );
    console.log(items)
    this.setState({ items:this.state.dummyProduct });
  };
  //rendering
  render() {
    const cartList =this.state.cart.map((cl,index) => (
      <Cart data={cl} removecart={this.removecart } key={index} />
    ));
    return (
      <div className="App">
        <Header/>
        <br></br>
        <div className="row" >
          <div className=" col-lg-3 col-sm-3 col-xs-3" style={{background: "pink",height: "900px"}}>
            <Filter 
            typefilter = {this.filterByType} 
            filterBytype={this.state.Type}
            Brandfilter = {this.filterByBrand}
            filterByBrand={this.state.Brand} 
            OSfilter = {this.filterByOS} 
            filterByOS={this.state.OS} 
            remove={this.handleDelete}/>
          </div>
          <div className=" col-lg-6 col-sm-6 col-xs-6"style={{height: "900px",overflow:"scroll"}}>
            <h4 style={{position:"left"}}>Showing {this.state.Product.length} of 6 results for "mobiles"</h4>
            <div className="row" >
              {this.state.Product.map((p,index) => (
                <Product ProductData={p} 
                addcart={this.AddCart} 
                key={index}/>
              ))}
            </div>
          </div>
          <div className=" col-lg-3 col-sm-3 col-xs-3" style={{height: "900px" ,position:"relative",overflow: "scroll"}}>
            <h2>Cart Details:</h2><br></br>
            <h5>Total Item In Cart:{this.state.cart.length}</h5>
            {cartList}
          </div>
        </div>
      </div>
    );
  }
}
export default App;