import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <nav>
      {/* Home link */}
      <NavLink to="/colors" className="logo">
        React Router Color Factory
      </NavLink>
      <NavLink to="/colors/new">
        <button>Add New Color</button>
      </NavLink>
    </nav>
  );
}

export default Nav;
