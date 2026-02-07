// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AdlerTech Innovations OPC Pvt. Ltd.</p>

      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>
    </footer>
  );
}
