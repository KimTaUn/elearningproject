import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.navRef = React.createRef();
  }

  componentDidMount() {
    // this.scrollDownShowOnScrollUp();
  }
  componentWillMount() {
    this.scrollDownShowOnScrollUp();
  }

  scrollDownShowOnScrollUp() {
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      // console.log('scroll!');
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        this.navRef.current.style.top = "-80px";
      } else {
        this.navRef.current.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }

  // toggle() {
  //   this.setState(state => ({
  //     collapse: !state.collapse
  //   }));
  // }

  // isOpen(){

  // }
  renderRedirectLoginPage = () => {
    return <Redirect to="/login" />;
  };

  render() {
    // const {isExpanded} = this.state;
    return (
      <nav className="topnav" ref={this.navRef}>
        <div className="topnav-brand">
          <NavLink to="home" className="topnav-item">
            <img src={logo} alt="logo" />
          </NavLink>
          {/* <a className="topnav-item" href="https://bulma.io">
            <img src={logo} alt="logo"/>
          </a> */}
        </div>
        <div className="topnav-search">
          <input type="text" placeholder="Tìm Khóa Học..." />
          <button className="myBtn btn-search">
            <i className="fa fa-search" />
          </button>
        </div>

        <div className="topnav-collapse">
          <div className="topnav-menu">
            <NavLink to="home" className="navLink-item">
              <i className="fa fa-home" />
              Trang Chủ
            </NavLink>
            <NavLink to="courses" className="navLink-item">
              <i className="fa fa-layer-group" />
              Khóa Học
            </NavLink>
            <NavLink to="instructor" className="navLink-item">
              <i className="fa fa-users" />
              Giảng Viên
            </NavLink>
            <NavLink to="contact" className="navLink-item">
              <i className="fa fa-door-open" />
              Liên Hệ
            </NavLink>
          </div>
          <div className="topnav-right">
            <div className="avatar">
              <i className="fa fa-user" />
            </div>
            <NavLink to="login" className="myBtn navLink-item btn-login">
              Đăng Nhập/Đăng Ký
            </NavLink>
            {/* <button onClick={()=>this.toLoginPage.bind(this)} className="myBtn btn-login">Đăng Nhập/Đăng Ký</button> */}
          </div>
        </div>

        <button className="btn-toggle" onClick={this.toggle}>
          <i className="fa fa-bars" />
        </button>
      </nav>
    );
  }
}
