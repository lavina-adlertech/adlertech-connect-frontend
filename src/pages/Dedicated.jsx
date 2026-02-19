import "../Layouts/components/dedicated.css";
import { Helmet } from "react-helmet-async";
import heroImage from "../assets/dedicated.jpg";
import bottomBannerImage from "../assets/dedicated.jpg";

const Dedicated = () => {
    return (
        <>
            <Helmet>
                <title>
                    Dedicated Development Teams | IT Staffing Solutions
                </title>
                <meta
                    name="description"
                    content="Build dedicated development teams with AdlerTech Connect for long-term projects and product development."
                />
            </Helmet>

            {/* Hero Section */}
            <section className="dedicated-hero">
                <img src={heroImage} alt="Hero" />
                <div className="dedicated-hero-content">
                    <h1>Dedicated Development Teams for Long-Term Success</h1>
                    <p className="dedicated-hero-meta"><strong>
                        Our dedicated development team model is ideal for companies seeking consistent, scalable delivery
                        without managing recruitment and HR operations.
                    </strong></p>
                </div>
            </section>

            {/* What is a Dedicated Team */}
            <section className="dedicated-hero-section">
                <h2>What is a Dedicated Development Team?</h2>
                <p>
                    A dedicated development team is a group of professionals who work exclusively on your project for an extended period.
                    Unlike freelancers or temporary contractors, dedicated teams are fully integrated with your company's goals,
                    processes, and culture. They act as a seamless extension of your in-house team, offering consistency,
                    expertise, and commitment.
                </p>
            </section>

            {/* Benefits of Dedicated Teams */}
            <section className="dedicated-hero-section">
                <h2>Benefits of Hiring a Dedicated Team</h2>
                <ul className="dedicated-benefits-list">
                    <li><strong>Cost Efficiency:</strong> Save on recruitment, HR, and infrastructure costs while hiring experienced developers.</li>
                    <li><strong>Scalability:</strong> Easily scale your team up or down based on project needs without long-term commitments.</li>
                    <li><strong>Expertise & Focus:</strong> Access specialized skills and domain knowledge focused solely on your project.</li>
                    <li><strong>Seamless Collaboration:</strong> Teams integrate with your existing processes and tools for smooth project delivery.</li>
                    <li><strong>Long-Term Consistency:</strong> Retain team knowledge and experience for continuous development and maintenance.</li>
                    <li><strong>Full Control:</strong> Manage priorities, workflows, and deadlines as if they are your in-house team.</li>
                </ul>
            </section>

            {/* How It Works */}
            <section className="dedicated-hero-section">
  <h2>How Our Dedicated Teams Work</h2>
  <p className="section-subtitle">
    Our approach ensures a smooth collaboration from day one:
  </p>

  <div className="process-timeline">

    <div className="process-step">
      <div className="step-icon">1</div>
      <div className="step-content">
        <span className="step-label">STEP 1</span>
        <h3>Requirement Analysis</h3>
        <p>
          We understand your project goals, technology stack, success criteria,
          timeline, and team requirements.
        </p>
      </div>
    </div>

    <div className="process-step">
      <div className="step-icon">2</div>
      <div className="step-content">
        <span className="step-label">STEP 2</span>
        <h3>Team Selection</h3>
        <p>
          We assemble the perfect team based on your needs and help you
          onboard and integrate them smoothly.
        </p>
      </div>
    </div>

    <div className="process-step">
      <div className="step-icon">3</div>
      <div className="step-content">
        <span className="step-label">STEP 3</span>
        <h3>Onboarding & Collaboration</h3>
        <p>
          Your team gets started immediately. Track performance, manage
          workflows, and scale resources as your project evolves.
        </p>
      </div>
    </div>

  </div>
</section>


            {/* Why Choose Us */}
            {/* <section className="dedicated-hero-section">
                <h2>Why Choose AdlerTech Connect?</h2>
                <p>
                    We specialize in providing dedicated teams that help startups, SMEs, and enterprises achieve their project goals efficiently. 
                    Our teams are experienced in multiple technologies, follow agile practices, and are committed to delivering 
                    high-quality solutions tailored to your business needs.
                </p>
            </section> */}

            {/* Call to Action */}
            <section className="dedicated-hero-section hero-bg">
                    <h2>Start Your Dedicated Team Today</h2>
                    <p>
                        Partner with us to build a team that drives your product forward. Flexible engagement models, transparent communication,
                        and a skilled workforce make us the ideal choice for your long-term development needs.
                    </p>
                    <div className="dedicated-hero-cta">
                        <button className="btn-primary">Hire a Dedicated Team</button>
                        <button className="btn-primary">Talk to an Expert</button>
                    </div>
            </section>

        </>
    );
};

export default Dedicated;
