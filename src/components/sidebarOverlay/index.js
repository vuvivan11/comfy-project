import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import activeSlice from "../../store/activeSlice";

const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "products",
    path: "/products",
  },
  {
    name: "about",
    path: "/about",
  },
];

export default function SidebarOverlay() {
  const { showNav } = useSelector((state) => state.active);
  const dispatch = useDispatch();

  const renderNavLinks = () => {
    return navLinks.map((nav, index) => {
      return (
        <li key={index}>
          <Link to={nav.path} className="sidebar-link" onClick={() => {dispatch(activeSlice.actions.hiddenNav())}}>
            <i className="fas fa-home fa-fw" />
            {nav.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={`sidebar-overlay ${showNav ? "show" : ""}`}>
      <aside className="sidebar">
        {/* close */}
        <button
          className="sidebar-close"
          onClick={() => {
            dispatch(activeSlice.actions.hiddenNav());
          }}
        >
          <i className="fas fa-times" />
        </button>
        {/* links */}
        <ul className="sidebar-links">
          {renderNavLinks()}
        </ul>
      </aside>
    </div>
  );
}
