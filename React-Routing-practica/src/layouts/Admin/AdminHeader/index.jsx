import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
const AdminHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/admin"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/addproduct"}>Addproduct</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;
