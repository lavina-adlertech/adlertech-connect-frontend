import "../Layouts/components/remote.css";
import { Helmet } from "react-helmet-async";

export default function Remote() {
  return (
    <>
    <Helmet>
        <title>
          Hire Remote Developers in India | AdlerTech Connect
        </title>
        <meta
          name="description"
          content="Hire pre-vetted remote developers for web, mobile, data, and AI projects. Flexible contracts. Fast onboarding."
        />
      </Helmet>

      <section className="remote-hero">
        <video
          className="remote-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/remote.mp4" type="video/mp4" />
        </video>

        <div className="remote-hero-overlay"></div>

        <div className="remote-hero-content">
          {/* Main H1 for SEO */}
           <h1>Hire Remote Developers for Your Projects</h1>

            {/* H2 for hero headline (user-facing) */}
            <h2>Pre-Vetted Remote IT Talent Across Technologies</h2>

            <p>Looking to <strong>hire remote developers</strong> without compromising quality? AdlerTech Connect provides
            experienced offshore developers who work as an extension of your in-house team.</p>

        </div>
      </section>

      {/* Remote & Hybrid Working Section */}
    <section className="remote-info-section">
    <div className="remote-info-container">

        {/* Left Content */}
        <div className="remote-info-content">
        <h2>What is Remote & Hybrid Working?</h2>

        <p>
            <strong>Remote working</strong> allows professionals to work from any location outside a traditional office environment. 
            Using digital collaboration tools, remote teams stay connected, productive, and aligned with business goals.
        </p>

        <p>
            <strong>Hybrid working</strong> combines both in-office and remote work. Employees split their time between working 
            from home and collaborating in a physical office space, offering flexibility while maintaining team engagement.
        </p>

        <p>
            At AdlerTech Connect, we provide skilled remote and hybrid IT professionals who seamlessly integrate into your team, 
            ensuring productivity, scalability, and cost efficiency.
        </p>
        </div>

        {/* Right Image */}
        <div className="remote-info-image">
        <img src="/src/assets/remote-first.webp" alt="Remote and Hybrid Working" />
        </div>

    </div>
    </section>

    {/* Benefits Section */}
    <section className="remote-benefits-section">
    <div className="remote-benefits-container">

        {/* LEFT CONTENT */}
        <div className="remote-benefits-content">
        <h2>Benefits of Remote & Hybrid Working</h2>

        <ul className="remote-benefits-list">
            <li>
            <strong>Increased Productivity:</strong> Flexible environments reduce commute stress and improve focus.
            </li>
            <li>
            <strong>Cost Savings:</strong> Lower infrastructure and operational expenses while accessing top talent.
            </li>
            <li>
            <strong>Access to Global Talent:</strong> Hire skilled professionals without geographical limitations.
            </li>
            <li>
            <strong>Better Work-Life Balance:</strong> Hybrid flexibility supports employee satisfaction and retention.
            </li>
            <li>
            <strong>Scalability & Flexibility:</strong> Easily scale teams based on project requirements.
            </li>
            <li>
            <strong>Business Continuity:</strong> Distributed teams ensure uninterrupted operations.
            </li>
        </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="remote-benefits-image">
        <img src="/src/assets/benefits-remote.webp" alt="Benefits of Remote and Hybrid Working" />
        </div>

    </div>
    </section>

    </>
  );
};