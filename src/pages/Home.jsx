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
            <h2>Scale Your Tech Team Faster with Trusted IT Talent</h2>

            {/* H3 for subheadline */}
            <h3>Remote • Hybrid • Onsite | Full-Time • Part-Time • Contract</h3>

            {/* Hero body copy */}
            <p>
              AdlerTech Connect provides end-to-end IT staff augmentation services that help
              businesses scale engineering teams quickly without long hiring cycles. From
              remote developers to onsite IT professionals, we deliver flexible talent solutions
              aligned with your project and budget.
            </p>

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
          <p>
            <strong>AdlerTech Connect</strong> helps growing companies and IT organizations
            quickly deploy pre-vetted technology professionals across engineering,
            data, AI, and digital roles—without long hiring cycles or operational
            overhead.
          </p>
        </div>
      </section>

      {/* ================= TRUST & FEATURES SECTION ================= */}
      <section className="trust-section">
        <div className="trust-container">
          {/* H2 for subsection */}
          <h2>Trusted IT Staff Augmentation Partner</h2>

          <p>
            Hiring full-time talent takes time. Projects can’t wait.
            <br />
            <strong>AdlerTech Connect</strong> provides end-to-end IT staff augmentation
            services that allow businesses to scale engineering teams quickly
            without long hiring cycles—whether you need a single expert or an
            entire dedicated team.
          </p>

          {/* Feature List */}
          <ul className="trust-features">
            <li>✔ Fast onboarding (7–14 days)</li>
            <li>✔ Flexible engagement models</li>
            <li>✔ India-based & global delivery</li>
            <li>✔ Transparent pricing</li>
            <li>✔ Dedicated account support</li>
          </ul>
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
