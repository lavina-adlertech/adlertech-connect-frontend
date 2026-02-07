// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header hero-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <div className="logo-wrapper">
          <img src="/logo.png" className="logo-img" alt="AdlerTech Connect" />
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
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
