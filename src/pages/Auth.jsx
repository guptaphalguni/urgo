import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import logo from "../assets/logo/urgo-logo.jpg";
import { auth } from "../firebase/firebase";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  


  const handleAuth = async () => {
    setError("");

    // ✅ Basic validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      let userCredential;

      if (mode === "login") {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Login successful");
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        alert("Signup successful");
      }
      navigate("/dashboard");


      // ✅ CONFIRMATION (very important)
      console.log("Firebase user created/logged in:", userCredential.user);

    } catch (err) {
      console.error("Firebase Auth Error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="auth-wrapper">
      {/* BACKGROUND IMAGE LAYER */}
      <div className="auth-bg" />

      {/* FOREGROUND CONTENT */}
      <div className="auth-content">
        {/* LEFT SECTION */}
        <div className="auth-left">
          <img src={logo} alt="URGO Logo" className="auth-logo" />
          <h1>
            JOIN URGO.<br />
            UNIFYING HELPERS.<br />
            SAVING LIVES.
          </h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="auth-right">
          <div className="auth-card">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {mode === "signup" && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

            <button onClick={handleAuth}>
              {mode === "signup" ? "Sign Up" : "Log In"}
            </button>

            <p className="auth-switch">
              {mode === "signup" ? (
                <>
                  Already have an account?{" "}
                  <span onClick={() => setMode("login")}>Log In</span>
                </>
              ) : (
                <>
                  New to URGO?{" "}
                  <span onClick={() => setMode("signup")}>Sign Up</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
