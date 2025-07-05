import { Link } from "react-router-dom";

function Header() {
    return(<>
    <ul className="nav-ui">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
    </ul>
    </>)
}

export default Header;