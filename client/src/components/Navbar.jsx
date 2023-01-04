import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="flex">
      <NavLink className="td" to="/">Product List</NavLink>
      <NavLink className="td" to="/create">Create </NavLink>
      </nav>
    </>
  )
}
