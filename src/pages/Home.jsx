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
        <h2 className="trust-heading">Trusted IT Staff Augmentation Partner</h2>

        <div className="marquee">
          <div className="marquee-track">

            {/* SET 1 */}
            <div className="trust-card soft-blue">
              <h3>Fast Onboarding</h3>
              <p>Deploy developers in 7–14 days.</p>
              <img src="/icons/fast.svg" alt="" />
            </div>

            <div className="trust-card soft-green">
              <h3>Flexible Models</h3>
              <p>Full-time, contract, or part-time.</p>
              <img src="/icons/flex.svg" alt="" />
            </div>

            <div className="trust-card soft-yellow">
              <h3>Global Talent</h3>
              <p>India & worldwide teams.</p>
              <img src="/icons/global.svg" alt="" />
            </div>

            <div className="trust-card soft-purple">
              <h3>Transparent Pricing</h3>
              <p>No hidden fees.</p>
              <img src="/icons/pricing.svg" alt="" />
            </div>

            <div className="trust-card soft-peach">
              <h3>Dedicated Account Support</h3>
              <p>Personalized support with a dedicated account manager.</p>
              <img src="/icons/support.svg" alt="" />
            </div>

            {/* SET 2 (duplicate – REQUIRED for seamless loop) */}
            <div className="trust-card soft-blue">
              <h3>Fast Onboarding</h3>
              <p>Deploy developers in 7–14 days.</p>
              <img src="/icons/fast.svg" alt="" />
            </div>

            <div className="trust-card soft-green">
              <h3>Flexible Models</h3>
              <p>Full-time, contract, or part-time.</p>
              <img src="/icons/flex.svg" alt="" />
            </div>

            <div className="trust-card soft-yellow">
              <h3>Global Talent</h3>
              <p>India & worldwide teams.</p>
              <img src="/icons/global.svg" alt="" />
            </div>

            <div className="trust-card soft-purple">
              <h3>Transparent Pricing</h3>
              <p>No hidden fees.</p>
              <img src="/icons/pricing.svg" alt="" />
            </div>

            <div className="trust-card soft-peach">
              <h3>Dedicated Account Support</h3>
              <p>Personalized support with a dedicated account manager.</p>
              <img src="/icons/support.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <h2>Why Choose AdlerTech Connect?</h2>
          <p>
            We connect businesses with skilled IT professionals who integrate seamlessly into your
            teams. Our model ensures faster onboarding, flexible contracts, and guaranteed quality.
          </p>

          <div className="why-choose-grid">
            <div className="why-item">
              <h4>Pre-Vetted Talent</h4>
              <p>Expert developers and IT professionals rigorously screened for quality.</p>
            </div>

            <div className="why-item">
              <h4>Flexible Engagement</h4>
              <p>Remote, hybrid, or onsite hiring with contract and full-time options.</p>
            </div>

            <div className="why-item">
              <h4>Faster Onboarding</h4>
              <p>Deploy skilled professionals in days, not months.</p>
            </div>

            <div className="why-item">
              <h4>Dedicated Support</h4>
              <p>Account managers ensure smooth communication and delivery.</p>
            </div>

            <div className="why-item">
              <h4>Scalable Teams</h4>
              <p>Easily scale your tech team up or down as project needs change.</p>
            </div>

            <div className="why-item">
              <h4>End-to-End Delivery</h4>
              <p>From hiring to execution, we support you at every stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION SECTION ================= */}
      {/* <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Scale Your Tech Team?</h2>
          <p>
            Get started with <strong>AdlerTech Connect</strong> today and access top IT talent
            without long hiring cycles.
          </p>
          <a href="/contact" className="btn-primary">Schedule a Call</a>
        </div>
        <div class="cta-image">
          <img src="/src/assets/staff-augmentation.webp" alt="IT Talent"/>
        </div>
      </section> */}
    </>
  );
}
