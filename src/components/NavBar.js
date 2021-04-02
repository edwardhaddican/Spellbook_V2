import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="nav_container">
          <div className="nav_container_left">
            {/* The navbar will show these links after you log in */}
            <Link className="nav_item" to="/home">
              Home
            </Link>
            <Link className="nav_item" to="/newcharacterform">
              Create Character
            </Link>
            <Link className="nav_item" to="/allspells">
              All Spells
            </Link>
          </div>
          <div className="nav_container_right">
            <a className="nav_item" href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        </div>
      ) : (
        <div className="nav_container">
          <div className="nav_container_right">
            {/* The navbar will show these links before you log in */}
            <Link className="nav_item" to="/login">Login</Link>
            <Link className="nav_item" to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
