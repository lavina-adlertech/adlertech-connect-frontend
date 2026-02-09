import '../Layouts/components/staffAugmentation.css';

const StaffAugmentation = () => {
  return (
    <main className="staff-augmentation-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <h1>IT Staff Augmentation Services</h1>

        <p className="hero-subtitle">
          Scale faster with pre-vetted engineers across software, data, AI,
          cloud, and mobile—without long hiring cycles.
        </p>

        <p className="hero-meta">
          Remote • Hybrid • Onsite | Full-Time • Part-Time • Contract
        </p>

        <div className="hero-cta">
          <button className="btn-primary">Request Talent Profiles</button>
          <button className="btn-outline">Talk to Our Experts</button>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="trust-strip">
        <div>⚡ Fast Onboarding (7–14 Days)</div>
        <div>✅ Pre-Vetted Engineers</div>
        <div>🌍 Global Delivery</div>
        <div>🔁 Flexible Scaling</div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="snapshot-section">
        <h2>Flexible IT Staff Augmentation Solutions</h2>
        <p className="section-intro">
          Choose the engagement model that fits your delivery goals, timeline,
          and budget.
        </p>

        <div className="snapshot-cards">
          <div className="card">
            <h3>Remote Engineers</h3>
            <p>Work seamlessly with global talent aligned to your time zone.</p>
          </div>

          <div className="card">
            <h3>Hybrid Teams</h3>
            <p>Blend onsite collaboration with remote efficiency.</p>
          </div>

          <div className="card">
            <h3>Onsite Resources</h3>
            <p>Engineers deployed at your location for critical projects.</p>
          </div>

          <div className="card">
            <h3>Contract & Part-Time</h3>
            <p>Cost-effective experts for short-term or flexible needs.</p>
          </div>

          <div className="card">
            <h3>Dedicated Teams</h3>
            <p>Fully managed teams focused exclusively on your product.</p>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="tech-stack-section">
        <h2>Technology Expertise</h2>

        <div className="tech-grid">
          <div>
            <h3>Frontend</h3>
            <p>React, Angular, Vue</p>
          </div>

          <div>
            <h3>Backend</h3>
            <p>Node.js, Java, Python, .NET</p>
          </div>

          <div>
            <h3>Data & AI</h3>
            <p>Analytics, AI/ML, Generative AI</p>
          </div>

          <div>
            <h3>Cloud & DevOps</h3>
            <p>AWS, Azure, GCP, Kubernetes, CI/CD</p>
          </div>

          <div>
            <h3>Mobile</h3>
            <p>iOS, Android, Flutter, React Native</p>
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="why-us-section">
        <h2>Why AdlerTech Connect?</h2>

        <ul className="why-us-list">
          <li>🚀 Engineers onboarded in as little as 7 days</li>
          <li>🧠 Senior, pre-vetted IT professionals</li>
          <li>📈 Scale teams up or down anytime</li>
          <li>💰 Reduced hiring & operational costs</li>
          <li>🌏 India-based talent, global standards</li>
        </ul>
      </section>

      {/* ================= METRICS ================= */}
      <section className="social-proof-section">
        <h2>Trusted Staff Augmentation Partner</h2>

        <div className="metrics">
          <div><strong>50+</strong><span>Engineers</span></div>
          <div><strong>20+</strong><span>Clients</span></div>
          <div><strong>95%</strong><span>Retention</span></div>
        </div>
      </section>

      {/* ================= WHAT IS STAFF AUG ================= */}
      <section className="what-is-section">
        <h2>What Is Staff Augmentation?</h2>

        <p>
          Staff augmentation allows organizations to extend their internal teams
          with skilled professionals—without long-term hiring commitments.
        </p>

        <ul>
          <li>Access niche skills instantly</li>
          <li>No recruitment overhead</li>
          <li>Complete control over delivery</li>
          <li>Scale teams based on demand</li>
        </ul>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="use-cases-section">
        <h2>Common Use Cases</h2>

        <div className="use-case-grid">
          <div>Product Development</div>
          <div>MVP & POC Builds</div>
          <div>Scaling Delivery Teams</div>
          <div>Short-Term Skill Gaps</div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">
        <h2>Need Skilled Engineers—Fast?</h2>
        <p>Build high-performing teams without long hiring cycles.</p>
        <button className="btn-primary">Schedule a Consultation</button>
      </section>

    </main>
  );
};

export default StaffAugmentation;
