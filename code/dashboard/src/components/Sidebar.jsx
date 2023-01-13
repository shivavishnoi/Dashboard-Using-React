import { BrowserRouter, Link, NavLink } from 'react-router-dom';

function Sidebar(props) {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/" exact>
              <i className="fa fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/articles">
              <i class="fa fa-bars"></i> Articles
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/people">
              <i className="fa fa-user"></i> People
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/books">
              <i className="fa fa-book"></i> Books
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/help">
              <i className="fa fa-gears"></i> Help and Support
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
// <i class="fa fa-house"></i>
// <i class="fa fa-a"></i>
// <i class="fa fa-people-group"></i>
// <i class="fa fa-book-open-reader"></i>
// <i class="fa fa-circle-question"></i>
