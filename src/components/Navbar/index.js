import {Link} from 'react-router-dom'
import './index.css'
const Navbar = () => (
    <nav className="nav-header">
          <ul className="nav-menu">
            <li className="nav-menu-item">
            <Link to="/">
                Home
                </Link>
            </li>
            <li className="nav-menu-item">
            <Link to="/about">
                About
                </Link>
            </li>
            <li className="nav-menu-item">
            <Link to="/features">
                Features
                </Link>
            </li>
            <li className="nav-menu-item">
            <Link to="/contact">
                Contact
                </Link>
            </li>
          </ul>
    </nav>
)
export default Navbar