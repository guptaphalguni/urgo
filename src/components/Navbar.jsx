import logo from "../assets/logo/urgo-logo.jpg";
export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>URGO</div>


      <div style={styles.actions}>
        <button style={{ ...styles.btn, background: "var(--accent-orange)" }}>
          Login / Sign Up as Volunteer
        </button>
        <button style={{ ...styles.btn, background: "var(--accent-blue)" }}>
          Emergency Helplines
        </button>
        <button style={{ ...styles.btn, background: "var(--accent-gray)" }}>
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
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
};
