import "../Layouts/components/contract.css";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import heroImage from "../assets/contract-hero.jpg";
import { useNavigate } from "react-router-dom";

const Contract = () => {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
  const track = document.querySelector(".contract-carousel-track");
  const slides = document.querySelectorAll(".contract-slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  const totalSlides = slides.length;

  function moveToSlide(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    moveToSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    moveToSlide(index);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  const autoSlide = setInterval(nextSlide, 4000);

  return () => clearInterval(autoSlide);

}, []);
    return (
        <>
            <Helmet>
                <title>
                    Contract & Part-Time IT Resources | AdlerTech Connect
                </title>
                <meta
                    name="description"
                    content="Hire contract or part-time IT professionals to meet short-term and flexible project needs."
                />
            </Helmet>

            {/* Hero Section */}
            <section className="contract-hero">
                <img src={heroImage} alt="Hero" />
                <div className="contract-hero-content">
                    <h1>Contract & Part-Time IT Resource Deployment</h1>
                </div>
            </section>

            {/* What is a Dedicated Team */}
            <section className="contract-section">
                <h2 className="section-title">What is a Contract & Part-Time IT Resources?</h2>

                <div className="contract-row">
                  <div className="contract-content">
                    <p>
                      In today’s fast-paced digital environment, businesses often require flexible and scalable IT support without the long-term commitment of full-time hiring. 
                      Our Contract & Part-Time IT Resource Services provide skilled professionals who seamlessly integrate into your team and deliver results when you need them most.
                    </p>
                  </div>
                  <div className="contract-image">
                    <img src="/src/assets/Employment-Contract.webp" alt="Contract Model" />
                  </div>
                </div>

            </section>

            {/* Benefits of Dedicated Teams */}
            <section className="contract-benefits-section">
              <div className="contract-benefits-container">
                <div className="contract-benefits-left">
                  <span className="contract-benefits-tag">
                    Why Choose Contract & Part-Time IT Resources?
                  </span>
                  <div className="contract-benefits-grid">

              <div className="contract-benefit-item active">
                <div className="contract-benefit-header">
                  ✔ Cost-Effective Solutions
                </div>
                <div className="contract-benefit-content">
                  Save on recruitment, HR, and infrastructure costs while hiring experienced developers.
                </div>
              </div>

              <div className="contract-benefit-item">
                <div className="contract-benefit-header">
                  ✔ Scalability
                </div>
                <div className="contract-benefit-content">
                  Easily scale your team up or down based on project needs without long-term commitments.
                </div>
              </div>

              <div className="contract-benefit-item">
                <div className="contract-benefit-header">
                  ✔ Expertise & Focus
                </div>
                <div className="contract-benefit-content">
                  Access specialized skills and domain knowledge focused solely on your project.
                </div>
              </div>

              <div className="contract-benefit-item">
                <div className="contract-benefit-header">
                  ✔ Seamless Collaboration
                </div>
                <div className="contract-benefit-content">
                  Teams integrate with your existing processes and tools for smooth project delivery.
                </div>
              </div>

              <div className="contract-benefit-item">
                <div className="contract-benefit-header">
                   ✔ Long-Term Consistency
                  </div>
                <div className="contract-benefit-content">
                  Retain team knowledge and experience for continuous development and maintenance.
                </div>
              </div>

              <div className="contract-benefit-item">
                <div className="contract-benefit-header">
                   ✔ Full Control
                  </div>
                <div className="contract-benefit-content">
                  Manage priorities, workflows, and deadlines as if they are your in-house team.
                </div>
              </div>

            </div>
                </div>
              </div>
            </section>

            {/* IT Resource Capabilities */}
            <section className="contract-capabilities-section">
              <div className="contract-capabilities-container">

                <h2 className="contract-capabilities-title">
                  Our IT Resource Capabilities
                </h2>

                <div className="contract-carousel">

                  <div className="contract-carousel-track">
                    
                    <div className="contract-slide" onClick={() => navigate("")}>
                      <img src="/src/assets/web.jpg" alt="Web Developers" />
                      <div className="contract-slide-overlay">
                        Web & Mobile Application Developers
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/full-stack.png" alt="Full Stack" />
                      <div className="contract-slide-overlay">
                        Full Stack Developers
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/ui.jpeg" alt="UI UX" />
                      <div className="contract-slide-overlay">
                        UI/UX Designers
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/devops.webp" alt="DevOps" />
                      <div className="contract-slide-overlay">
                        Cloud & DevOps Engineers
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/qa-testing.webp" alt="QA" />
                      <div className="contract-slide-overlay">
                        QA & Testing Professionals
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/db.avif" alt="DBA" />
                      <div className="contract-slide-overlay">
                        Database Administrators
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/IT-support.jpg" alt="Support" />
                      <div className="contract-slide-overlay">
                        IT Support & Maintenance Specialists
                      </div>
                    </div>

                    <div className="contract-slide">
                      <img src="/src/assets/project-managers.jpg" alt="PM" />
                      <div className="contract-slide-overlay">
                        Project Managers
                      </div>
                    </div>

                  </div>

                  {/* Arrows */}
                  <button className="carousel-btn prev">❮</button>
                  <button className="carousel-btn next">❯</button>

                </div>

              </div>
            </section>

            {/* Engagement Models */}
              <section className="contract-engagement-section">
                <div className="contract-engagement-container">

                  <h2 className="contract-engagement-title">
                    Engagement Models
                  </h2>

                  <div className="contract-engagement-grid">

                    <div className="contract-engagement-card">
                      <h3>Short-Term Contracts</h3>
                      <p>
                        Ideal for temporary workload increases, system upgrades, or urgent projects.
                      </p>
                    </div>

                    <div className="contract-engagement-card">
                      <h3>Long-Term Contracts</h3>
                      <p>
                        Dedicated professionals working as an extension of your in-house team.
                      </p>
                    </div>

                    <div className="contract-engagement-card">
                      <h3>Part-Time Resources</h3>
                      <p>
                        Perfect for startups and SMEs that need expert support without full-time hiring costs.
                      </p>
                    </div>

                    <div className="contract-engagement-card">
                      <h3>Project-Based Hiring</h3>
                      <p>
                        Hire experts for specific deliverables and defined timelines.
                      </p>
                    </div>

                  </div>
                </div>
              </section>

              {/* Who Can Benefit */}
              <section className="contract-beneficiaries-section">
                <div className="contract-beneficiaries-container">

                  <h2 className="contract-beneficiaries-title">
                    Who Can Benefit?
                  </h2>

                  <div className="contract-beneficiaries-grid">

                    <div className="contract-beneficiary-card">
                      🚀 Startups looking to optimize budgets
                    </div>

                    <div className="contract-beneficiary-card">
                      🏢 SMEs requiring flexible IT support
                    </div>

                    <div className="contract-beneficiary-card">
                      📈 Enterprises managing seasonal or project-based demands
                    </div>

                    <div className="contract-beneficiary-card">
                      💡 Companies undergoing digital transformation
                    </div>

                  </div>
                </div>
              </section>

        </>
    );
};

export default Contract;
