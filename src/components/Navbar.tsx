import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">React App</span>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/">
                Create Content
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories">
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;