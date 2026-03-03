import "../Layouts/components/why.css";
import WhyHeroImage from "../assets/why.png";
import { Helmet } from "react-helmet-async";

export default function Why() {
  return (
    <main className="why-page">
      <Helmet>
        <title>
          Why AdlerTech Connect
        </title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="why-hero">
        <img src={WhyHeroImage} alt="Hero" />

      </section>

      {/* WHY SECTION */}
      <section className="why-section">
        <div className="why-container">

          {/* Intro */}
          <div className="why-intro">
            <h1>Why Leading Businesses Choose AdlerTech Connect</h1>
            <p>
              We combine speed, quality and flexibility to deliver world-class
              IT talent that integrates seamlessly into your team.
            </p>
          </div>

          {/* Big Feature Card */}
          <div className="why-big-card">

            <div className="why-features">

              <div className="why-feature-box">
                <h4>Pre-Vetted Talent</h4>
                <p>
                  Every professional is technically evaluated and project-ready,
                  reducing hiring risk and ensuring immediate productivity.
                </p>
              </div>

              <div className="why-feature-box">
                <h4>Faster Hiring</h4>
                <p>
                  Access qualified candidates within days instead of months,
                  accelerating your project timelines.
                </p>
              </div>

              <div className="why-feature-box">
                <h4>Flexible Scaling</h4>
                <p>
                  Scale your team up or down based on project demands without
                  long-term commitments.
                </p>
              </div>

              <div className="why-feature-box">
                <h4>Reduced Overhead</h4>
                <p>
                  Minimize HR, compliance and operational costs while focusing
                  on core business growth.
                </p>
              </div>

              <div className="why-feature-box">
                <h4>Security & Compliance</h4>
                <p>
                  Strong governance, NDA protection and enterprise-grade
                  security practices ensure peace of mind.
                </p>
              </div>

              <div className="why-feature-box">
                <h4>Dedicated Support</h4>
                <p>
                  A committed account manager ensures smooth communication,
                  performance monitoring and delivery success.
                </p>
              </div>

            </div>

            {/* Highlight Statement */}
            <div className="why-highlight">
              <h3>More Than a Vendor — A Strategic Delivery Partner</h3>
              <p>
                We don’t just provide resources — we become your extended
                engineering arm, aligned with your long-term vision and success.
              </p>
            </div>

          </div>

          {/* Trust Stats Section */}
          <div className="why-stats">
            <div className="stat-box">
              <h2>48h</h2>
              <p>Average Talent Match Time</p>
            </div>

            <div className="stat-box">
              <h2>95%</h2>
              <p>Client Retention Rate</p>
            </div>

            <div className="stat-box">
              <h2>100+</h2>
              <p>Pre-Vetted Professionals</p>
            </div>

            <div className="stat-box">
              <h2>Global</h2>
              <p>Delivery Capability</p>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}