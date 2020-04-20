import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div className="abc" style={{height:"200px"}}>
                <nav className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1" style={{color: "wheat"}}>
                        ShOpPiNg.CoM
                    </span>
                    <span>
                        Mobiles
                    </span>
                    <span>
                        Men
                    </span>
                    <span>
                        Women
                    </span>
                    <span>
                        Kid's
                    </span>
                    <span>
                        Electronic
                    </span>
                    <div>
                        <input type="text" className="input" placeholder="Search"/>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-outline-info">Search</button>
                    </div>
                    <div>
                        <button className="btn btn-outline-info">Log In</button>&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-outline-info">Sign In</button>
                    </div><br></br>      
                </nav>
            </div>
         );
    }
}
 
export default Header;