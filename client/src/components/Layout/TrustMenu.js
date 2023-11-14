
import React from "react";
import { NavLink } from "react-router-dom";
const TrustMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/trust/list"
            className="list-group-item list-group-item-action"
          >
             List
          </NavLink>
          <NavLink
            to="/dashboard/trust/trust-profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default TrustMenu;
