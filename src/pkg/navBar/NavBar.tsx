import { NavLink } from "react-router-dom";
import RouteNames from "../../routes";
import "./NavBar.css";


// An implementation for maknig active links appear highilghted
// from: https://codesandbox.io/p/sandbox/react-rourt-dom-navlink-q8ci8?file=%2Fsrc%2Fnavbar.css%3A5%2C1

function NavBar() : JSX.Element
{

  const classNameFunc = ({ isActive } : { isActive: boolean }): string => (isActive ? "active_link" : "");

  return (
    <>
    <nav>
      <ul>

        {/* Left-aligned link */}
        <li className="left_align"><NavLink to={RouteNames.HOME}>Paper Volleyball</NavLink></li>

        {/* Right-aligned links */}
        <li className="right_align"><NavLink to={RouteNames.DONATE} className={classNameFunc}>Donate</NavLink></li>
        <li className="right_align"><NavLink to={RouteNames.ABOUT} className={classNameFunc}>About</NavLink></li>
        <li className="right_align"><NavLink to={RouteNames.HOME} className={classNameFunc}>Home</NavLink></li>
      </ul>
    </nav>
    </>);
}

export default NavBar;