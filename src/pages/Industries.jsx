import "../Layouts/components/Industries.css";
import { Helmet } from "react-helmet-async";

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>
          Industries We Serve | IT Staff Augmentation Services
        </title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="industries-hero">
        <video
          className="industries-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/industries.mp4" type="video/mp4" />
        </video>

        <div className="industries-hero-overlay"></div>

        <div className="industries-hero-content">
          <h1>Industries We Serve with IT Staff Augmentation</h1>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="industries-section">
                
                    <h1 style={{ textAlign: "center" }}>Augmentation Industries We Empower</h1>

                    <p className="industries-intro">
                    Our IT staff augmentation services support organizations across
                    diverse industries by delivering skilled technology professionals
                    who seamlessly integrate with your teams and accelerate business growth.
                    </p>
                  <div className="industry-block">
                        <h3 style={{ textAlign: "center" }}>1. SaaS & Product Companies</h3>
                        <p>
                            We help SaaS and product-based companies build scalable, secure,
                            and high-performance applications. From MVP development to enterprise
                            product scaling, our experts support cloud-native architectures,
                            DevOps and modern full-stack technologies.
                        </p>
                        </div>

                        <div className="industry-block">
                        <h3 style={{ textAlign: "center" }}>2. IT Services & Consulting</h3>
                        <p>
                            Expand your delivery capabilities with skilled developers and
                            consultants. We support IT service providers with dedicated teams
                            to meet project deadlines and scale technical expertise efficiently.
                        </p>
                        </div>

                        <div className="industry-block">
                        <h3 style={{ textAlign: "center" }}>3. E-commerce Platforms</h3>
                        <p>
                            Our IT professionals help e-commerce businesses build robust,
                            scalable and conversion-focused platforms with secure payment
                            integrations and optimized performance.
                        </p>
                        </div>

                        <div className="industry-block">
                        <h3 style={{ textAlign: "center" }}>4. FinTech & BFSI</h3>
                        <p>
                            We provide secure and compliant technology solutions for financial
                            institutions including digital banking, payment systems,
                            and enterprise-grade security frameworks.
                        </p>
                        </div>

                        <div className="industry-block">
                        <h3 style={{ textAlign: "center" }}>5. EdTech</h3>
                        <p>
                            Transform digital learning experiences with scalable LMS platforms,
                            virtual classrooms and AI-powered educational systems.
                        </p>
                        </div>

                        <div className="industry-block">
                        <h3 style={{ textAlign: "center" }}>6. Healthcare & Enterprise</h3>
                        <p>
                            We support healthcare providers and enterprises with secure,
                            compliant and scalable digital solutions that enhance efficiency
                            and operational excellence.
                        </p>
                    </div>
      </section>
    </>
  );
}