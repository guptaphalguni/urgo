import logo from "../assets/logo/urgo-logo.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
    

    const navigate = useNavigate();
const [location, setLocation] = useState(null);
    const [locationError, setLocationError] = useState("");
    const handleShareLocation = () => {
  setLocationError("");

  if (!navigator.geolocation) {
    setLocationError("Geolocation not supported by this browser");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    },
    () => {
      setLocationError("Permission denied or location unavailable");
    }
  );
};

  return (
    <nav style={styles.nav}>
      <div style={styles.brand} onClick={() => navigate("/")}>
  <img src={logo} alt="URGO Logo" style={styles.logoImg} />
  <span style={styles.logoText}>URGO</span>
</div>


      <div style={styles.actions}>
        <button
  style={{ ...styles.btn, background: "var(--accent-orange)" }}
  onClick={() => navigate("/auth")}
>
  Login / Sign Up as Volunteer
         
              </button>
              
        <button
  className="nav-btn helpline-btn"
  onClick={handleShareLocation}
>
  Share My Location
</button> 
{location && (
  <div style={{ color: "#f7f2f2ff", fontSize: "14px", marginTop: "8px" }}>
    📍 Latitude: {location.latitude.toFixed(5)} <br />
    📍 Longitude: {location.longitude.toFixed(5)} <br />
    <a
      href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#4da3ff" }}
    >
      View on Google Maps
    </a>
  </div>
)}

{locationError && (
  <p style={{ color: "red", fontSize: "14px" }}>
    {locationError}
  </p>
)}
<button
  className="nav-btn how-it-works-btn"
  onClick={() => navigate("/how-it-works")}
>
  How It Works
</button>


      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid var(--border-soft)",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "700",
  },
  actions: {
    display: "flex",
    gap: "12px",
  },
  btn: {
    border: "none",
    padding: "10px 16px",
    borderRadius: "20px",
    color: "#ffffffff",
    cursor: "pointer",
    fontSize: "14px",
    },
  brand: {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
},

logoImg: {
  width: "36px",
  height: "36px",
  objectFit: "contain",
  borderRadius: "6px",
  background: "#ffffff",
},

logoText: {
  fontSize: "22px",
  fontWeight: "700",
  letterSpacing: "0.5px",
},

};
