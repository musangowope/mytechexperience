import React, { Component } from "react";
import { Link } from "gatsby";
import github from "../../img/github-icon.svg";
import logo from "../../img/logo.svg";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  Icon,
  NavbarEnd,
  Control,
  Input
} from "bloomer";

class PrimaryNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  onClickNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <Navbar className="primary-navbar">
        <NavbarBrand>
          <NavbarItem>
            <Link to="/" className="primary-navbar__logo">
              <strong>
                What I learnt today
              </strong>
            </Link>
          </NavbarItem>
        </NavbarBrand>

        <NavbarMenu
          isActive={this.state.isActive}
          onClick={e => {
            e.preventDefault();
            this.onClickNav();
          }}
        >
          <NavbarEnd className="is-uppercase">
            <NavbarItem>
              Subscribe
            </NavbarItem>
            <NavbarItem>
              Twitter
            </NavbarItem>

            {/*<NavbarItem>*/}
              {/*<Control hasIcons="left" className="primary-navbar__searchbar">*/}
                {/*<Input*/}
                  {/*isSize="small"*/}
                  {/*placeholder="Search blog"*/}
                  {/*className="primary-navbar__searchbar__input"*/}
                {/*/>*/}
                {/*<Icon isSize="small" isAlign="left" className="fa fa-search" />*/}
              {/*</Control>*/}
            {/*</NavbarItem>*/}
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default PrimaryNavbar;
