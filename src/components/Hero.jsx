export default function Hero() {
  return (
    <div style={styles.hero}>
      <h1 style={styles.heading}>
        COORDINATION IN CRISIS:
        <br />
        UNIFYING HELPING HANDS.
        <br />
        SAVING LIVES
      </h1>
      <p style={styles.tagline}>Connect. Respond. Rebuild.</p>
    </div>
  );
}

const styles = {
  hero: {
    maxWidth: "520px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "800",
    lineHeight: "1.3",
  },
  tagline: {
    marginTop: "16px",
    color: "var(--text-secondary)",
  },
};
