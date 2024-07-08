import Images from "../../constant/Images";
import { Link } from "react-router-dom";
import { toggleDarkMode } from "../../store/slice/DarkModeStateSlice";
import { useDispatch } from "react-redux";
function Header() {
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
    <header className="flex items-center">
      <div className="logo">
        <Link to="/">
          <img src={Images.logo} alt="logo" className="w-[100px] h-[90px]" />
        </Link>
      </div>

      <div className="flex list-none p-2 text-xl justify-evenly flex-1">
        <li>
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
      <div className="w-[150px]">
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
