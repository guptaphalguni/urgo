export default function HelplineCard({ title, number }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <button style={styles.call}>CALL NOW</button>
      <p>{number}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "var(--bg-card)",
    padding: "22px",
    borderRadius: "14px",
    textAlign: "center",
    width: "220px",
  },
  call: {
    background: "var(--accent-blue)",
    border: "none",
    padding: "8px 18px",
    borderRadius: "20px",
    margin: "14px 0",
    cursor: "pointer",
    color: "#fff",
  },
};
