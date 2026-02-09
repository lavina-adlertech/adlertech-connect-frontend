// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                <li><Link to="/">Dedicated Teams</Link></li>
                <li><Link to="/">Contract / Part-Time Resources</Link></li>
                <li><Link to="/">Remote / Hybrid / Onsite Models</Link></li>
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

      <div
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(true)}
      >
        ☰
      </div>

      {mobileMenuOpen && (
        <div className="mobile-overlay">
          <aside
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>

            <nav className="mobile-nav">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              
              <div className="mobile-services">
                <button
                  className="mobile-services-btn"
                  onClick={() => setShowServices(!showServices)}
                >
                  Services
                  <span className={`arrow ${showServices ? "open" : ""}`}>▾</span>
                </button>

                {showServices && (
                  <div className="mobile-services-dropdown">
                    <span><Link to="/StaffAugmentation" onClick={() => setMobileMenuOpen(false)}>
                      Staff Augmentation
                    </Link></span>
                    <span><Link to="/" onClick={() => setMobileMenuOpen(false)}>Dedicated Teams</Link></span>
                    <span><Link to="/" onClick={() => setMobileMenuOpen(false)}>Contract / Part-Time Resources</Link></span>
                    <span><Link to="/" onClick={() => setMobileMenuOpen(false)}>Remote / Hybrid / Onsite Models</Link></span>
                  </div>
                )}
              </div>
              <Link to="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
              <Link to="/technology" onClick={() => setMobileMenuOpen(false)}>Technology</Link>
              <Link to="/how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
              <Link to="/why-us" onClick={() => setMobileMenuOpen(false)}>Why AdlerTech</Link>
              <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

              <Link to="/hire-talent" className="btn-primary mobile-cta">
                Hire Talent
              </Link>
            </nav>
          </aside>
        </div>
      )}

    </header>
  );
}
