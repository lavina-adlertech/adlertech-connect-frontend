// src/components/Footer.jsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 – COMPANY */}
        <div className="footer-col">
          <img
            src="/logo.png"
            alt="AdlerTech Connect"
            className="footer-logo"
          />
          <p className="footer-desc">
            AdlerTech Innovations OPC Pvt. Ltd. helps companies scale faster
            with trusted IT talent across engineering, data, AI and digital.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* COLUMN 2 – POLICIES */}
        <div className="footer-col">
          <h4>Policies</h4>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/refund-policy">Refund Policy</Link>
            </li>
            <li>
              <Link to="/placement-disclaimer">Placement Disclaimer</Link>
            </li>
            <li>
              <Link to="/company-details">Company Details</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 – QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/StaffAugmentation">Staff Augmentation</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/about">How It Works</Link>
            </li>
            <li>
              <Link to="/about">Hire Talent</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} AdlerTech Innovations OPC Pvt. Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
