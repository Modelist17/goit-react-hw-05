// Navigation.jsx

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const addActiveClass = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });

  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={addActiveClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={addActiveClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
