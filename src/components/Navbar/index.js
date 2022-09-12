import React from "react";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <header className={style.wrap}>
      <div>
        <a href="/" className={style.logo}>
          <b>BR</b> Architects
        </a>
      </div>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#" className={style.link}>
              Project
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              Service
            </a>
          </li>
          <li>
            <a href="#" className={style.link}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
