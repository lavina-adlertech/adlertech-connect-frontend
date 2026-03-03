import "../Layouts/components/aboutus.css";
import aboutImage from "../assets/about-us.jpg";
import { Helmet } from "react-helmet-async";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>
          About AdlerTech Connect | IT Staffing Company
        </title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={aboutImage} alt="Hero" />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>About AdlerTech Connect</h1>
        </div>
      </section>

      {/* ABOUT SECTION */}
<section className="about-section">
  <div className="about-container">

    {/* Positioning Statement */}
    <div className="about-intro">
      <h1>Your Trusted Technology Staffing Partner</h1>
      <p>
        AdlerTech Connect is a technology staffing and augmentation partner 
        helping companies scale engineering teams efficiently with reliable, 
        pre-vetted talent. We bridge the gap between business needs and 
        world-class technical expertise.
      </p>
    </div>

    {/* Vision & Mission */}
    <div className="about-grid">

      <div className="about-card">
        <h3>Our Vision</h3>
        <p>
          To become a globally trusted technology talent partner enabling 
          organizations to innovate, scale and lead in the digital economy.
        </p>
      </div>

      <div className="about-card">
        <h3>Our Mission</h3>
        <p>
          To provide businesses with highly skilled, project-ready professionals 
          through a fast, transparent and flexible staffing model that drives 
          long-term success.
        </p>
      </div>

    </div>

    {/* Leadership */}
    <div className="about-big-card">
      <h3>Leadership</h3>
      <p>
        Our leadership team combines deep technical expertise and industry 
        experience to build strong client relationships and deliver measurable impact.
        We believe in strategic thinking, ethical practices and long-term partnerships.
      </p>
    </div>

    {/* Compliance & Ethics */}
    <div className="about-big-card">
      <h3>Compliance & Ethics</h3>
      <p>
        We operate with transparency, integrity and strict compliance standards.
        From data security to contractual governance, we ensure every engagement
        follows best practices in confidentiality, regulatory compliance and
        ethical conduct.
      </p>

      <ul>
        <li>Strong NDA & Data Protection Policies</li>
        <li>Regulatory & Labor Law Compliance</li>
        <li>Transparent Contracts & Billing</li>
        <li>Commitment to Fair & Ethical Practices</li>
      </ul>
    </div>

  </div>
</section>
    </>
  );
}