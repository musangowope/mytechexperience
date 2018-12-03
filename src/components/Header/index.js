import React from "react";
import PropTypes from "prop-types";
import {
  MusangoAvatarImg,
  MichaelAvatarImg,
  WarrenAvatarImg,
  DanielleAvatarImg,
  SchalkAvatarImg
} from "./images-constant";
import { Columns, Column } from "bloomer";

const Header = props => {
  return (
    <section
      className="header"
      // style={{ backgroundImage: `url(${HeaderBgImg})` }}
    >
      <Columns className="background-container" isCentered isGapless>
        <Column isSize="1/5" className="background-container__card">
          <img
            src={MusangoAvatarImg}
            className="background-container__card__avatar"
            alt="ourtechexperience-image"
          />
        </Column>
        <Column isSize="1/5" className="background-container__card">
          <img
            src={MichaelAvatarImg}
            className="background-container__card__avatar"
            alt="ourtechexperience-image"
          />
        </Column>
        <Column isSize="1/5" className="background-container__card">
          <img
            src={WarrenAvatarImg}
            className="background-container__card__avatar"
            alt="ourtechexperience-image"
          />
        </Column>
        <Column isSize="1/5" className="background-container__card">
          <img
            src={DanielleAvatarImg}
            className="background-container__card__avatar"
            alt="ourtechexperience-image"
          />
        </Column>
        <Column isSize="1/5" className="background-container__card">
          <img
            src={SchalkAvatarImg}
            className="background-container__card__avatar"
            alt="ourtechexperience-image"
          />
        </Column>
      </Columns>

      <div className="header__overlay">
        <div className="header__overlay__content">
          <h1 className="has-text-weight-bold is-size-2 has-text-white has-text-centered is-uppercase">
            Explore our stories in the <br /> tech industry..
          </h1>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
