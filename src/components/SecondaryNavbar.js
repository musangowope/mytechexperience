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
      <Navbar style={{ border: "solid 1px #00D1B2", margin: "0" }}>
        <NavbarBrand>
          <NavbarItem>
            <img src={brand} style={{ marginRight: 5 }} /> Bloomer
          </NavbarItem>
          <NavbarItem isHidden="desktop">
            <Icon className="fa fa-github" />
          </NavbarItem>
          <NavbarItem isHidden="desktop">
            <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
          </NavbarItem>
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
          <NavbarStart>
            <NavbarItem href="#/">Home</NavbarItem>
            <NavbarItem hasDropdown isHoverable>
              <NavbarLink href="#/documentation">Documentation</NavbarLink>
              <NavbarDropdown>
                <NavbarItem href="#/">One A</NavbarItem>
                <NavbarItem href="#/">Two B</NavbarItem>
                <NavbarDivider />
                <NavbarItem href="#/">Two A</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem
              href="https://github.com/AlgusDark/bloomer"
              isHidden="touch"
            >
              <Icon className="fa fa-github" />
            </NavbarItem>
            <NavbarItem href="https://twitter.com/AlgusDark" isHidden="touch">
              <Icon className="fa fa-twitter" style={{ color: "#55acee" }} />
            </NavbarItem>
            <NavbarItem>
              <Field isGrouped>
                <Control>
                  <Button
                    id="twitter"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://bloomer.js.org"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark"
                  >
                    <Icon className="fa fa-twitter" />
                    <span>Tweet</span>
                  </Button>
                </Control>
              </Field>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default SecondaryNavbar;
