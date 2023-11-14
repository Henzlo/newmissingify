import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/create-list"
            className="list-group-item list-group-item-action"
          >
            Create List
          </NavLink>
          <NavLink
            to="/dashboard/user/products"
            className="list-group-item list-group-item-action"
          >
            All List
          </NavLink>
          <NavLink
            to="/dashboard/user/user-list"
            className="list-group-item list-group-item-action"
          >
            user List
          </NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
