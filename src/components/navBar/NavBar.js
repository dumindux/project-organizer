import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-dark bg-dark" expand="md">
          <NavbarBrand href="/">Org</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink exact activeClassName="active" tag={RRNavLink} to="/" >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact activeClassName="active" tag={RRNavLink} to="/about">About</NavLink>
              </NavItem>
            </Nav>
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
