import "../Layouts/components/technology.css";
import { Helmet } from "react-helmet-async";

export default function Technology() {
  return (
    <>
      <Helmet>
        <title>
          Technology Stack | Hire IT Experts Across Domains
        </title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="tech-hero">
        <video
          className="tech-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/technology.mp4" type="video/mp4" />
        </video>

        <div className="tech-hero-overlay"></div>

        <div className="tech-hero-content">
          <h1>Our Technology Expertise</h1>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="tech-section">
        <div className="tech-container">

          <div className="tech-intro">
            <h1>Comprehensive Technology Capabilities</h1>
            <p>
              We specialize in delivering scalable, enterprise-grade and future-ready
              digital solutions across engineering, AI, cloud and mobile ecosystems.
            </p>
          </div>

          {/* ENGINEERING */}
          <div className="tech-big-card">
            <div className="tech-card-content">
              <h3>Engineering Excellence</h3>
              <p>
                Our engineering teams build secure, scalable and high-performance 
                applications using modern frameworks and enterprise architecture standards.
              </p>

              <div className="tech-columns">
                <ul>
                  <li>React, Angular, Vue</li>
                  <li>Node.js, Java, Python</li>
                  <li>.NET, PHP, Laravel</li>
                </ul>

                <ul>
                  <li>Spring Boot & Microservices</li>
                  <li>REST APIs & GraphQL</li>
                  <li>System Architecture Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DATA & AI */}
          <div className="tech-big-card">
            <div className="tech-card-content">
              <h3>Data & Artificial Intelligence</h3>
              <p>
                We transform complex data into meaningful business intelligence 
                through advanced analytics, automation and AI-driven innovation.
              </p>

              <div className="tech-columns">
                <ul>
                  <li>Data Analytics & BI</li>
                  <li>Data Science & Modeling</li>
                  <li>Machine Learning</li>
                </ul>

                <ul>
                  <li>Generative AI & LLMs</li>
                  <li>Prompt Engineering</li>
                  <li>ETL & Big Data Processing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CLOUD & DEVOPS */}
          <div className="tech-big-card">
            <div className="tech-card-content">
              <h3>Cloud & DevOps</h3>
              <p>
                Accelerate innovation with cloud-native solutions and automated 
                DevOps pipelines ensuring scalability, security and reliability.
              </p>

              <div className="tech-columns">
                <ul>
                  <li>AWS, Azure, GCP</li>
                  <li>Docker & Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                </ul>

                <ul>
                  <li>Infrastructure as Code</li>
                  <li>Monitoring & Logging</li>
                  <li>High Availability Architecture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="tech-big-card">
            <div className="tech-card-content">
              <h3>Mobile Development</h3>
              <p>
                Deliver seamless mobile experiences with robust native and cross-platform
                applications tailored for performance and user engagement.
              </p>

              <div className="tech-columns">
                <ul>
                  <li>Android & iOS</li>
                  <li>Flutter & React Native</li>
                  <li>App UI/UX Design</li>
                </ul>

                <ul>
                  <li>API Integration</li>
                  <li>App Store Deployment</li>
                  <li>Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tech-cta">
            <h1>Why Choose Our Technology Expertise?</h1>
            <p>
              ✔ Industry-experienced developers <br />
              ✔ Agile & scalable architecture <br />
              ✔ Security-first development approach <br />
              ✔ Enterprise-grade solutions <br />
              ✔ Dedicated technical support
            </p>
          </div>

        </div>
      </section>

    </>
  );
}