import React from "react";
import propTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    // <div>
    //   <h1 /* style={headerStyle} */>{props.branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm-navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My app"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

// const headerStyle = { color: "red", fontSize: "50px" };

export default Header;
