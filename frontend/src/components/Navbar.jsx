import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      {/* Home Icon Button */}
      <FaHome className="home-icon" onClick={() => navigate("/")} />
      {/* <div className="logo">Acadex Nexus</div> */}
      <div className="nav-links">
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/signup" className="nav-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
