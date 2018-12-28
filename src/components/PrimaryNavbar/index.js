import React, { Component } from "react";
import { Link } from "gatsby";
import {
  Navbar,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarEnd,
  NavbarBurger
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
            <Link to="/" className="primary-navbar__link">
              <strong>What I learnt today</strong>
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
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
              <a href="https://twitter.com/CodeUiux" target="_blank" className="primary-navbar__link">
                Contact Me
              </a>
            </NavbarItem>
            <NavbarItem>
              <a
                href="mailto:musangow@gmail.com?Subject=Hello%20again" className="primary-navbar__link"
                target="_top"
              >
                Twitter
              </a>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default PrimaryNavbar;
