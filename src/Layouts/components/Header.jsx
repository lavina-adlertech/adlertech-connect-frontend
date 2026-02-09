// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`header hero-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <img src="/logo.png" className="logo-img" alt="AdlerTech Connect" />
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        {/* SERVICES MEGA MENU */}
        <div className="services-menu" ref={servicesRef}>
          <button
            className="services-btn"
            onClick={() => setShowServices(!showServices)}
          >
            Services
          </button>

          {showServices && (
            <div className="services-dropdown">
              <ul>
                <li><Link to="/StaffAugmentation">Staff Augmentation</Link></li>
                <li>Dedicated Teams</li>
                <li>Contract / Part-Time Resources</li>
                <li>Remote / Hybrid / Onsite Models</li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/industries">Industries</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/why-us">Why AdlerTech Connect</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="header-right">
        <Link to="/hire-talent" className="btn-primary">
          Hire Talent
        </Link>
      </div>
    </header>
  );
}
