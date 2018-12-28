import React from "react";
import { Columns, Column } from "bloomer";

import { MooseWorkingImg } from "../../images-constant";

const AboutContent = () => (
  <Columns>
    <Column isSize="1/3" className="has-text-centered-mobile">
      <img src={MooseWorkingImg} />
    </Column>
    <Column isSize="3/3">
      "Hi, my name is Musango Wope. What I learn't today is a blog that explains
      what I have learn't on that particular day. Documenting my journey as
      front end developer. This blog will mainly focus on HTML, Javascript and css
      and maybe some random stuff
      "
    </Column>
  </Columns>
);

AboutContent.propTypes = {};
AboutContent.defaultProps = {};

export default AboutContent;
