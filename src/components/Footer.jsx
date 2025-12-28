export default function Footer() {
  return (
    <footer style={styles.footer}>
      <span>About Us</span>
      <span>Contact</span>
      <span>Privacy Policy</span>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "60px",
    padding: "20px",
    borderTop: "1px solid var(--border-soft)",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    color: "var(--text-secondary)",
  },
};
