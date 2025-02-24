import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LandingPage.css";
import backgroundImage from "../components/img1bg.jpg"; // Ensure correct path

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useState(false); // Change based on auth state

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div 
      className="landing-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Acadex Nexus</div>
        <div className="nav-buttons">
          <button onClick={() => navigate("/login")} className="login-btn">
            Login
          </button>
          <button onClick={() => navigate("/signup")} className="signup-btn">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Content Section */}
      <div className="landing-content">
        <h1>Welcome to Acadex Nexus</h1>
        <p>
          An AI-powered digital hub that enhances academic collaboration for students and teachers.
          Get personalized study plans, AI-generated tests, and seamless faculty-student interaction.
        </p>
        <button onClick={handleButtonClick} className="cta-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
