import React, { Component } from "react";
import banner from "../assets/images/banner.png";

const sectionBanner = {
  backgroundImage: "url(" + banner + ")"
};
export default class SectionBanner extends Component {
  render() {
    return (
      <div
        className="section-banner"
        style={ sectionBanner }
      />
    );
  }
}
