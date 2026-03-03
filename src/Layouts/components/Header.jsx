// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false); // desktop
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [mobileMenuOpen]);
  // ✅ FIXED scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header hero-header ${scrolled ? "scrolled" : ""}`}>
      
      <div className="header-left">
        <img src="/logo.png" className="logo-img" alt="AdlerTech Connect" />
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="nav-links">
        <Link to="/">Home</Link>

        <div
          className="services-menu"
          ref={servicesRef}
          onMouseEnter={() => setShowServices(true)}
          onMouseLeave={() => setShowServices(false)}
        >
          <Link className="services-btn">Services</Link>

          {showServices && (
            <div className="services-dropdown">
              <ul>
                <li><Link to="/StaffAugmentation">Staff Augmentation</Link></li>
                <li><Link to="/dedicated">Dedicated Teams</Link></li>
                <li><Link to="/contract">Contract / Part-Time Resources</Link></li>
                <li><Link to="/remote">Remote / Hybrid / Onsite Models</Link></li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/industries">Industries</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/why">Why AdlerTech Connect</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      <div className="header-right">
        <Link to="/hire-talents" className="btn">
          Hire Talent
        </Link>
      </div>

      {/* ================= MOBILE MENU BUTTON ================= */}
      <div
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(true)}
      >
        ☰
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}   // ✅ closes on outside click
        >
          <aside
            className="mobile-sidebar"
            onClick={(e) => e.stopPropagation()}     // prevents close when clicking inside
          >
            <button
              className="close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>

            <nav className="mobile-nav">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

              {/* MOBILE SERVICES DROPDOWN */}
              <div className="mobile-services" onMouseEnter={() => setMobileServicesOpen(true)}
                  onMouseLeave={() => setMobileServicesOpen(false)}>
                <Link
                  className="mobile-services-btn"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                </Link>

                {mobileServicesOpen && (
                  <div className="mobile-services-dropdown">
                    <Link to="/StaffAugmentation" onClick={() => setMobileMenuOpen(false)}>
                      Staff Augmentation
                    </Link>
                    <Link to="/dedicated" onClick={() => setMobileMenuOpen(false)}>
                      Dedicated Teams
                    </Link>
                    <Link to="/contract" onClick={() => setMobileMenuOpen(false)}>
                      Contract / Part-Time Resources
                    </Link>
                    <Link to="/remote" onClick={() => setMobileMenuOpen(false)}>
                      Remote / Hybrid / Onsite Models
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/industries" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
              <Link to="/technology" onClick={() => setMobileMenuOpen(false)}>Technology</Link>
              <Link to="/how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
              <Link to="/why" onClick={() => setMobileMenuOpen(false)}>Why AdlerTech</Link>
              <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
              <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

              <Link
                to="/hire-talent"
                className="btn-primary mobile-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Talent
              </Link>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}