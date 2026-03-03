import "../Layouts/components/how.css";
import { Helmet } from "react-helmet-async";

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>
          How IT Staff Augmentation Works | AdlerTech Connect
        </title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="how-hero">
        <video
          className="how-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/how-it-works.mp4" type="video/mp4" />
        </video>

        <div className="how-hero-overlay"></div>

        <div className="how-hero-content">
          <h1>How Our Staff Augmentation Process Works</h1>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
<section className="how-section">
  <div className="how-container">

    <div className="how-intro">
      <h1>Simple. Fast. Transparent.</h1>
      <p>
        Our IT staff augmentation process is designed to deliver the right talent 
        quickly while ensuring flexibility, quality and seamless collaboration.
      </p>
    </div>

    {/* STEP 1 */}
    <div className="how-big-card">
      <div className="how-step-number">01</div>
      <div className="how-card-content">
        <h3>Requirement Discussion</h3>
        <p>
          Share your project requirements including role, technical skills, 
          experience level, timeline and budget expectations.
        </p>
        <ul>
          <li>Define project scope</li>
          <li>Clarify technical stack</li>
          <li>Align on timelines & cost</li>
        </ul>
      </div>
    </div>

    {/* STEP 2 */}
    <div className="how-big-card">
      <div className="how-step-number">02</div>
      <div className="how-card-content">
        <h3>Talent Screening</h3>
        <p>
          We shortlist highly skilled and pre-vetted professionals 
          that precisely match your requirements.
        </p>
        <ul>
          <li>Technical evaluation</li>
          <li>Experience validation</li>
          <li>Soft-skill assessment</li>
        </ul>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="how-big-card">
      <div className="how-step-number">03</div>
      <div className="how-card-content">
        <h3>Interview & Selection</h3>
        <p>
          You directly interview candidates and select the 
          resource that best fits your team and culture.
        </p>
        <ul>
          <li>Client-led interviews</li>
          <li>Technical deep-dive</li>
          <li>Final approval</li>
        </ul>
      </div>
    </div>

    {/* STEP 4 */}
    <div className="how-big-card">
      <div className="how-step-number">04</div>
      <div className="how-card-content">
        <h3>Onboarding & Deployment</h3>
        <p>
          Selected professionals onboard within days — not months — 
          ensuring rapid project execution.
        </p>
        <ul>
          <li>Quick documentation</li>
          <li>Seamless integration</li>
          <li>Immediate productivity</li>
        </ul>
      </div>
    </div>

    {/* STEP 5 */}
    <div className="how-big-card">
      <div className="how-step-number">05</div>
      <div className="how-card-content">
        <h3>Ongoing Support</h3>
        <p>
          A dedicated account manager ensures smooth collaboration, 
          performance tracking and continuous delivery success.
        </p>
        <ul>
          <li>Regular performance review</li>
          <li>Issue resolution</li>
          <li>Long-term partnership support</li>
        </ul>
      </div>
    </div>

  </div>
</section>
    </>
  );
}