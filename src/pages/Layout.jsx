import { Outlet, Link } from "react-router-dom";
import { TbMoodKid } from "react-icons/tb";

const Layout = () => {
  return (
    <div className="container ">
      <nav
        className="navbar fixed "
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <TbMoodKid className="animation"></TbMoodKid>
        </div>
        <div className="navbar-menu">
          <ul className="navbar-start">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/childAlbum">Albums</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
