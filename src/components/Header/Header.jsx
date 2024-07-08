import Images from "../../constant/Images";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../store/slice/DarkModeStateSlice";
import { useDispatch } from "react-redux";
import style from "./style.module.css";

import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
function Header() {
    const[menuOpen,setMenuOpen]=useState(false)
  const dispatch = useDispatch();
  const toggleHandle = (e) => {
    // [true] dark mode enable

    if (e.target.checked) {
      dispatch(toggleDarkMode(true));
    }
    // [false] light mode enable
    else {
      dispatch(toggleDarkMode(false));
    }
  };
  return (
    <header className="flex items-center lg:block lg:pl-2 relative">
      <div className="logo">
        <Link to="/">
          <img src={Images.logo} alt="logo" className="w-[100px] h-[90px]" />
        </Link>
      </div>

      <div className="menuBtn">
        <MdClose className="w-8 h-8 absolute top-5 right-2 4xl:hidden lg:block" />
      </div>

      <div className="flex list-none p-2 text-xl justify-evenly flex-1 lg:block lg:px-4">
        <li className={style.hover}>
          <Link to="">Skills</Link>
        </li>
        <li>
          <Link to="">Project</Link>
        </li>
        <li>
          <Link to="">Work Experience</Link>
        </li>
        <li>
          <Link to="">Achievement</Link>
        </li>
        <li>
          <Link to="">Blog</Link>
        </li>
        <li>
          <Link to="">Talk</Link>
        </li>
        <li>
          <Link to="">Contact Me</Link>
        </li>
      </div>
      <div className="w-[150px] lg:w-[100%] lg:flex lg:justify-start">
        <div className="toggle">
          <input type="checkbox" id="darkMode" onClick={toggleHandle} />
          <label htmlFor="darkMode">
            <div className="sun">
              <img src={Images.sun} alt="sun" />
            </div>
            <div className="moon">
              <img src={Images.moon} alt="sun" />
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
