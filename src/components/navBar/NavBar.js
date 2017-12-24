import React from 'react';
import {connect} from 'react-redux';
import * as projectActions from '../../actions/projectActions';
import {bindActionCreators} from 'redux';
import { NavLink as RRNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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
      isOpen: false,
      searchText: this.props.searchText
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({searchText: nextProps.searchText});
    }
  }

  onChange(event) {
    const searchText = event.target.value;
    return this.setState({searchText});
  }

  onClick() {
    this.props.actions.updateSearchText(this.state.searchText);
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
              <input className="form-control mr-sm-2" type="text" placeholder="Search" value={this.state.searchText} onChange={this.onChange}/>
                <input type="button" className="btn btn-outline-success my-2 my-sm-0" value="Search" onClick={this.onClick}/>
            </form>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    searchText: state.searchText
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(NavBar);
