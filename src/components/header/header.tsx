import React from "react";
import "./header.css";

const SiteHeader = () => {
  return (
    <header className="site-header ">
      <h2 className="site-header-appname">Absence Management</h2>
      <ul className="site-header-menu">
        <li className="site-header-menu-item">
          <a className="site-header-menu-item-link" href="#">
            Home
          </a>
        </li>
        <li className="site-header-menu-item">
          <a className="site-header-menu-item-link" href="#">
            Absence Report
          </a>
        </li>
        <li className="site-header-menu-item">
          <a className="site-header-menu-item-link" href="#">
            Members
          </a>
        </li>
        <li className="site-header-menu-item">
          <a className="site-header-menu-item-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <ul className="site-header-actionmenu">
        <li className="site-header-menu-item site-header-search">
          <a href="#" className="site-header-menu-item-link">
            Search
          </a>
        </li>
        <li className="site-header-menu-item ">
          <button className="site-button site-button-secondary">Log In</button>
        </li>
      </ul>
    </header>
  );
};

export default SiteHeader;
