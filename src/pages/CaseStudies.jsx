import "../Layouts/components/casestudies.css";
import CaseStudiesImage from "../assets/case-studies.jpg";
import { Helmet } from "react-helmet-async";

export default function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>
          Case Studies
        </title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="case-hero">
        <img src={CaseStudiesImage} alt="Hero" />

        <div className="case-hero-content">
          <h1>Case Studies</h1>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="case-section">
        <div className="case-container">

          {/* Intro */}
          <div className="case-intro">
            <h1>Real Results. Real Impact.</h1>
            <p>
              Discover how AdlerTech Connect helped businesses accelerate delivery,
              optimize costs and scale engineering teams efficiently.
            </p>
          </div>

          {/* CASE 1 */}
          <div className="case-card">
            <h3>FinTech Product Scaling</h3>

            <div className="case-grid">
              <div>
                <h4>Client Problem</h4>
                <p>
                  A growing FinTech startup needed to rapidly scale its backend team
                  to meet aggressive product launch deadlines.
                </p>
              </div>

              <div>
                <h4>Resources Deployed</h4>
                <p>
                  3 Backend Developers (Node.js), 1 DevOps Engineer, 1 QA Engineer.
                </p>
              </div>

              <div>
                <h4>Duration</h4>
                <p>6 Months Engagement</p>
              </div>

              <div>
                <h4>Outcome</h4>
                <p>
                  Successfully launched product 40% faster while reducing hiring
                  costs by 30%.
                </p>
              </div>
            </div>
          </div>

          {/* CASE 2 */}
          <div className="case-card">
            <h3>Enterprise Cloud Migration</h3>

            <div className="case-grid">
              <div>
                <h4>Client Problem</h4>
                <p>
                  Legacy infrastructure causing downtime and scalability challenges.
                </p>
              </div>

              <div>
                <h4>Resources Deployed</h4>
                <p>
                  2 Cloud Architects (AWS), 2 DevOps Engineers, 1 Security Specialist.
                </p>
              </div>

              <div>
                <h4>Duration</h4>
                <p>8 Months Transformation Project</p>
              </div>

              <div>
                <h4>Outcome</h4>
                <p>
                  99.9% uptime achieved with 45% infrastructure cost optimization.
                </p>
              </div>
            </div>
          </div>

          {/* CASE 3 */}
          <div className="case-card">
            <h3>AI-Powered Analytics Platform</h3>

            <div className="case-grid">
              <div>
                <h4>Client Problem</h4>
                <p>
                  Needed real-time data insights to improve business decision-making.
                </p>
              </div>

              <div>
                <h4>Resources Deployed</h4>
                <p>
                  2 Data Scientists, 1 ML Engineer, 1 Frontend Developer.
                </p>
              </div>

              <div>
                <h4>Duration</h4>
                <p>5 Months Implementation</p>
              </div>

              <div>
                <h4>Outcome</h4>
                <p>
                  Improved forecasting accuracy by 35% and reduced reporting time by 60%.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      
    </>
  );
}