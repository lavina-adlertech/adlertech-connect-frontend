import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>
          IT Staff Augmentation Services | Hire Remote Developers – AdlerTech Connect
        </title>
        <meta
          name="description"
          content="Scale your tech team with flexible IT staff augmentation services. Hire remote, hybrid, or onsite developers on full-time or contract basis with fast onboarding."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.adlertechconnect.com/" />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/staff-video.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          {/* Main H1 for SEO */}
           <h1>IT Staff Augmentation Services for Scalable Tech Teams</h1>

            {/* H2 for hero headline (user-facing) */}
            <h2>Hire Remote, Hybrid, or Onsite IT Talent—Faster & Smarter</h2>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="/hire-talent" className="btn-primary">Hire Developers</a>
            <a href="/contact" className="btn-outline">Schedule a Call</a>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="intro-section">
        <div className="intro-container">
          {/* Hero body copy */}
            <p>
              AdlerTech Connect provides end-to-end <strong>IT staff augmentation services</strong> that help
              businesses scale engineering teams quickly without long hiring cycles. From <strong>remote developers</strong> to onsite <strong>IT professionals</strong>, we deliver flexible talent solutions
              aligned with your project and budget.
            </p>
        </div>
      </section>

      {/* ================= TRUST & FEATURES SECTION ================= */}
      <section className="trust-section">

        {/* Centered content */}
        <div className="trust-container">
          <h2>Trusted IT Staff Augmentation Partner</h2>

          <p>
            Hiring full-time talent takes time. Projects can’t wait.
            <br />
            <strong>AdlerTech Connect</strong> provides end-to-end IT staff augmentation
            services that allow businesses to scale engineering teams quickly
            without long hiring cycles—whether you need a single expert or an
            entire dedicated team.
          </p>
        </div>

        {/* FULL WIDTH – OUTSIDE CONTAINER */}
        <div className="trust-marquee">
          <div className="trust-track">
            <div className="trust-card">⚡ Fast onboarding (7–14 days)</div>
            <div className="trust-card">🔄 Flexible engagement models</div>
            <div className="trust-card">🌍 India-based & global delivery</div>
            <div className="trust-card">💰 Transparent pricing</div>
            <div className="trust-card">🤝 Dedicated account support</div>

            {/* duplicate */}
            <div className="trust-card">⚡ Fast onboarding (7–14 days)</div>
            <div className="trust-card">🔄 Flexible engagement models</div>
            <div className="trust-card">🌍 India-based & global delivery</div>
            <div className="trust-card">💰 Transparent pricing</div>
            <div className="trust-card">🤝 Dedicated account support</div>
          </div>
        </div>

      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2>Why Choose AdlerTech Connect?</h2>
          <p>
            We connect businesses with skilled IT professionals who integrate seamlessly into your
            teams. Our model ensures faster onboarding, flexible contracts, and guaranteed quality,
            so your projects stay on track without hiring headaches.
          </p>
          <ul>
            <li>Expert pre-vetted developers & IT professionals</li>
            <li>Remote, hybrid, and onsite options</li>
            <li>Flexible engagement & contract terms</li>
            <li>End-to-end project support</li>
          </ul>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Scale Your Tech Team?</h2>
          <p>
            Get started with <strong>AdlerTech Connect</strong> today and access top IT talent
            without long hiring cycles.
          </p>
          <a href="/contact" className="btn-primary">Schedule a Call</a>
        </div>
      </section>
    </>
  );
}
