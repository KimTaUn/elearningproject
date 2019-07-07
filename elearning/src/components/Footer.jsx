import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* Footer */}
        <footer className="page-footer">
          <div style={{ backgroundColor: "#6351ce" }}>
            <div className="top">
              {/* Grid row*/}
              <div className="top_content py-4 d-flex align-items-center">
                {/* Grid column */}
                <div className="left">
                  <h6 className="">
                    Get connected with us on social networks!
                  </h6>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="right">
                  {/* Facebook */}
                  <a className="fb-ic" href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f white-text mr-4"> </i>
                  </a>
                  {/* Twitter */}
                  <a className="tw-ic" href="https://www.facebook.com/">
                    <i className="fab fa-twitter white-text mr-4"> </i>
                  </a>
                  {/* Google +*/}
                  <a className="gplus-ic" href="https://www.facebook.com/">
                    <i className="fab fa-google-plus-g white-text mr-4"> </i>
                  </a>
                  {/*Linkedin */}
                  <a className="li-ic" href="https://www.facebook.com/">
                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                  </a>
                  {/*Instagram*/}
                  <a className="ins-ic" href="https://www.facebook.com/">
                    <i className="fab fa-instagram white-text"> </i>
                  </a>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row*/}
            </div>
          </div>
          {/* Footer Links */}
          <div className="info">
              {/* Grid column */}
              <div className="col company">
                {/* Content */}
                <h6 className="text-uppercase font-weight-bold">
                  Company name
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60 }}
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col product">
                {/* Links */}
                <h6 className="text-uppercase font-weight-bold">Products</h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60 }}
                />
                <p>
                  <a href="#!">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!">MDWordPress</a>
                </p>
                <p>
                  <a href="#!">BrandFlow</a>
                </p>
                <p>
                  <a href="#!">Bootstrap Angular</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col link">
                {/* Links */}
                <h6 className="text-uppercase font-weight-bold">
                  Useful links
                </h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60 }}
                />
                <p>
                  <a href="#!">Your Account</a>
                </p>
                <p>
                  <a href="#!">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!">Help</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col contact">
                {/* Links */}
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr
                  className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60 }}
                />
                <p>
                  <i className="fas fa-home mr-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> info@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3" /> + 01 234 567 89
                </p>
              </div>
            {/* Grid row */}
          </div>
          {/* Footer Links */}
          {/* Copyright */}
          <div className="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    );
  }
}
