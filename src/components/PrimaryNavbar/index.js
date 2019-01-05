import React, { Component } from "react";
import { Link } from "gatsby";
import { MooseWorkingImg } from "../AboutBlogCard/images-constant.js";
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
              <div className="primary-navbar__link__image">
                <img src={MooseWorkingImg} alt="wilt-logo"/>
              </div>
              <div className="primary-navbar__link__text">
                <strong>What I learnt today</strong>
              </div>
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={this.state.isActive}
            onClick={this.onClickNav}
          />
        </NavbarBrand>

        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarEnd className="is-uppercase">
            <NavbarItem>
              <a
                href="https://twitter.com/CodeUiux"
                className="primary-navbar__link"
                rel="noopener"
              >
                Twitter
              </a>
            </NavbarItem>
            <NavbarItem>
              <a
                href="mailto:musangow@gmail.com?Subject=Hello%20again"
                className="primary-navbar__link"
                target="_top"
              >
                Contact Me
              </a>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default PrimaryNavbar;
