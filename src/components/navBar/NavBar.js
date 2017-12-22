import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse" style={{"minWidth": "450px"}}>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          {/*<a className="navbar-brand" href="#">Org</a>*/}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <div className="nav-link">
                  <NavLink to="/" style={{color: "white"}} activeClassName="active">Home</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <NavLink to="/about" style={{color: "white"}}>About</NavLink>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
