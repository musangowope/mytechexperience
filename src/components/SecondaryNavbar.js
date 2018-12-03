import React, { Component } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import {
  Navbar,
  NavbarMenu,
  NavbarLink,
  NavbarBrand,
  NavbarItem,
  Icon,
  NavbarBurger,
  NavbarStart,
  NavbarEnd,
  Field,
  NavbarDropdown,
  Control,
  Button,
  brand,
  NavbarDivider
} from "bloomer";

class SecondaryNavbar extends Component {
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
      <Navbar className="category-navbar">
        <NavbarBrand>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={e => {
              e.preventDefault();
              this.onClickNav();
            }}
          />
        </NavbarBrand>
        <NavbarMenu
          isActive={this.state.isActive}
          onClick={e => {
            e.preventDefault();
            this.onClickNav();
          }}
        >
          <NavbarStart className="category-navbar__category-container">
            <NavbarItem href="#/" className='has-text-white'>Category 1</NavbarItem>
            <NavbarItem href="#/" className='has-text-white'>Category 2</NavbarItem>
            <NavbarItem href="#/" className='has-text-white'>Category 3</NavbarItem>
            <NavbarItem href="#/" className='has-text-white'>Category 4</NavbarItem>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default SecondaryNavbar;
