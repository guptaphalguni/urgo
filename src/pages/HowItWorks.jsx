export default function HowItWorks() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>How URGO Works</h1>

      <p style={styles.subtext}>
        URGO is designed to coordinate emergency response quickly and efficiently
        by connecting people in crisis with the right help at the right time.
      </p>

      <div style={styles.steps}>
        <div style={styles.card}>
          <h3>1. Share Your Location</h3>
          <p>
            With one tap, users can share their live location so responders
            know exactly where help is needed.
          </p>
        </div>

        <div style={styles.card}>
          <h3>2. Access Emergency Services</h3>
          <p>
            Instantly call hospitals, police, fire services, or disaster relief
            directly from the platform.
          </p>
        </div>

        <div style={styles.card}>
          <h3>3. Volunteer Coordination</h3>
          <p>
            Verified volunteers can log in and assist nearby emergencies,
            improving response time.
          </p>
        </div>

        <div style={styles.card}>
          <h3>4. Respond & Rebuild</h3>
          <p>
            URGO helps communities respond faster and rebuild stronger after
            crises.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "80px",
    color: "#ffffff",
    background: "transparent",
  },
  heading: {
    fontSize: "42px",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "18px",
    maxWidth: "700px",
    marginBottom: "50px",
    opacity: 0.9,
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(20, 25, 32, 0.9)",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
};
