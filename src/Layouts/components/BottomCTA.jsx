// src/components/BottomCTA.jsx
import { Link } from "react-router-dom";

export default function BottomCTA() {
  return (
    <section className="bottom-cta">
      <h2>Need engineers this month?</h2>
      <p>Get pre-vetted IT talent deployed in as little as 48 hours.</p>

      <Link to="/hire-talent" className="btn-primary">
        Talk to Our Experts
      </Link>
    </section>
  );
}
