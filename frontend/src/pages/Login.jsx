import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Logging in with", email, password);
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Acadex Nexus</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-link">
          Dont have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Import the Navbar
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Logging in with", email, password);
//     navigate("/dashboard");
//   };

//   return (
//     <>
//       <Navbar /> {/* ✅ Include Navbar here */}
//       <div className="login-container">
//         <div className="login-box">
//           <h2>Login to Acadex Nexus</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="login-btn">Login</button>
//           </form>
//           <p className="register-link">
//             Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
