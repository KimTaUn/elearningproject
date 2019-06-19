import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <nav className="topnav">
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
          <button className="myBtn btn-search"><i className="fa fa-search"></i></button>
        </div>

        <div className="topnav-menu">
          <NavLink to="home" className="menu-item">
            <i className="fa fa-home" />
            Trang Chủ
          </NavLink>
          <NavLink to="courses" className="menu-item">
            <i className="fa fa-layer-group"></i>
            Khóa Học
          </NavLink>
          <NavLink to="instructor" className="menu-item">
            <i className="fa fa-users" />
            Giảng Viên
          </NavLink>
          <NavLink to="contact" className="menu-item">
            <i className="fa fa-door-open" />
            Liên Hệ
          </NavLink>
        </div>
        <div className="topnav-right">
          <div className="avatar">
            <i className="fa fa-user"></i>
          </div>
          <button className="myBtn">Đăng Nhập/Đăng Ký</button>
        </div>
      </nav>
    );
  }
}
