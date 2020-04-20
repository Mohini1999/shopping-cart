import React, { Component } from 'react';
class Filter extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="container">
        <h1>Filter</h1>
        <div>
          <h4>Type&nbsp;&nbsp;&nbsp;
            {/* <button onClick=this.props.remove} style={{background:"pink",border:"none",fontSize: "small"}}>X</button> */}
          </h4>
          <br></br>
          {this.props.filterBytype.map((f1,index) =>(<div key={index}><label className="form-check-label" key={f1.id}>
            <input
              type="checkbox"
              value=""
              onClick= {() =>this.props.typefilter(f1.id,f1.value)}>
            </input>
            {f1.value}
          </label><br></br>
          </div>))}
        </div><br></br>

        <div>
          <h4>Brand</h4><br></br>
          {this.props.filterByBrand.map((f2,index) =>(<div key={index}><label className="form-check-label" key={f2.id}>
            <input
              type="checkbox"
              value=""
              onClick={() =>this.props.Brandfilter(f2.value,f2.id)}>
            </input>
            {f2.value}
          </label><br></br>
          </div>))}
        </div><br></br>

        <div>
          <h4>OS</h4><br></br>
          {this.props.filterByOS.map((f3,index) =>(<div key={index}><label className="form-check-label" key={f3.id}>
            <input
              type="checkbox"
              value=""
              onClick={() =>this.props.OSfilter(f3.id,f3.value)}>
            </input>
            {f3.value}
          </label><br></br></div>))}<br></br>
        </div>

      </div>
     );
  }
}
 
export default Filter;