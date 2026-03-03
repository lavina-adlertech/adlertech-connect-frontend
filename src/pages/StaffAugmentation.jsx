import "../Layouts/components/staffAugmentation.css";
import { Helmet } from "react-helmet-async";
import heroImage from "../assets/hero_image.jpg";
import { useState, useEffect, useRef } from "react";

const StaffAugmentation = () => {
   const [current, setCurrent] = useState(0);
   const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const offers = [
    {
      title: "Software Developers",
      img: "/src/assets/software-developere.jpg",
    },
    {
      title: "Data Engineers & Analysts",
      img: "/src/assets/data-eng.png",
    },
    {
      title: "AI / ML Engineers & Generative AI Engineers",
      img: "/src/assets/ai.jpg",
    },
    {
      title: "Cloud & DevOps Engineers",
      img: "/src/assets/cloud.avif",
    },
    {
      title: "QA & Automation Specialists",
      img: "/src/assets/automation.jpeg",
    },
    {
      title: "UI/UX Designers",
      img: "/src/assets/designer.avif",
    },
    {
      title: "Technical Project Managers",
      img: "/src/assets/managers.png",
    },
  ];

  // Auto scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? offers.length - 1 : prev - 1
    );
  };
  return (
    
    <main className="staff-augmentation-page">

      <Helmet>
              <title>
                IT Staff Augmentation Company in India | AdlerTech Connect
              </title>
              <meta
                name="description"
                content="Trusted IT staff augmentation company offering remote, hybrid and onsite developers for startups and enterprises."
              />
      </Helmet>
      {/* ================= HERO ================= */}
      <section className="hero">
        <img src={heroImage} alt="Hero" />
       
         <div className="hero-content">
        
            <h1>IT Staff Augmentation Services</h1>

            <h2>
              Flexible IT Staffing Solutions for Growing Businesses
            </h2>

            <p className="hero-meta"><strong>
              Our IT staff augmentation model allows you to hire skilled professionals on demand—without longterm commitments. We support short-term, long-term and project-based staffing across multiple
              technologies.
              </strong>
            </p>

            {/* <div className="hero-cta">
              <button className="btn-primary">👉 Request Resource Profiles</button>
            </div> */}

            <div className="hero-cta">
              <a href="/hire-developers" className="btn">Hire Remote Developers</a>
              <a href="/hire-developers" className="btn">Dedicated Development Teams</a>
            </div>
          </div>
        </section>
     
     {/* ================= WHAT IS STAFF AUGMENTATION ================= */}
      <section className="what-is-section">
        <h2 className="trust-heading">What is Staff Augmentation?</h2>
        <p>
          Staff augmentation enables businesses to extend their internal teams
          with highly skilled professionals without the long-term commitment
          of full-time hiring.
        </p>
      </section>

      {/* ================= BENEFITS SECTION (ENHANCED) ================= */}
      {/* ================= BENEFITS SECTION ================= */}
<section className="benefits-section">
  <div className="benefits-container">

    {/* LEFT CONTENT */}
    <div className="benefits-left">
      <span className="benefits-tag">
        BENEFITS OF STAFF AUGMENTATION
      </span>

      <div className="benefits-accordion">

        {[
          {
            title: "No lengthy recruitment cycles",
            content:
              "Skip job postings, resume screening, interviews and onboarding delays. Get pre-vetted developers deployed quickly so your projects start faster.",
          },
          {
            title: "Reduced hiring & operational costs",
            content:
              "Save on recruitment expenses, infrastructure, employee benefits and long-term payroll commitments while maintaining high productivity.",
          },
          {
            title: "Access to specialized skills instantly",
            content:
              "Tap into experienced professionals across AI, Cloud, DevOps, Data Engineering, Full-Stack and more — exactly when you need them.",
          },
          {
            title: "Scale up or down based on demand",
            content:
              "Quickly expand your team during peak workloads and scale down when project needs reduce — without long-term commitments.",
          },
          {
            title: "Full Project Control",
            content:
              "Maintain complete ownership of your workflows, tools and processes while augmented team members work as an extension of your in-house team.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`benefit-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="benefit-header"
              onClick={() =>
                setActiveIndex(
                  activeIndex === index ? null : index
                )
              }
            >
              ✔ {item.title}
              <span className="arrow-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>

            <div className="benefit-content">
              {item.content}
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* RIGHT SIDE IMAGES */}
    <div className="benefits-right">

      <div className="profile-card card1">
        <img src="/src/assets/dev1.jpg" alt="Developer 1" />
        <h4>Rahul M.</h4>
        <p>Sr. Data Scientist</p>
      </div>

      <div className="profile-card card2">
        <img src="/src/assets/dev2.jpg" alt="Developer 2" />
        <h4>Maria P.</h4>
        <p>Sr. Frontend Developer</p>
      </div>

      <div className="profile-card card3">
        <img src="/src/assets/dev4.webp" alt="Developer 3" />
        <h4>Anita L.</h4>
        <p>Sr. Cloud Engineer</p>
      </div>

    </div>

  </div>
</section>

      {/* ================= SERVICES SNAPSHOT ================= */}
      <section className="snapshot-section">
  <h1 className="trust-heading">Services Snapshot</h1>

  <p className="section-intro">
    Flexible, scalable IT staffing tailored to your business needs.
  </p>

  <div className="snapshot-grid">

    <div className="snapshot-card">
      <div className="snapshot-icon">📡</div>
      <h3>Remote Developers</h3>
      <p>
        Hire experienced remote engineers working in your time zone,
        aligned with your processes and delivery goals.
      </p>
    </div>

    <div className="snapshot-card">
      <div className="snapshot-icon">👥</div>
      <h3>Hybrid Teams</h3>
      <p>
        Combine onsite collaboration with remote flexibility
        for optimized productivity and scalability.
      </p>
    </div>

    <div className="snapshot-card">
      <div className="snapshot-icon">🏢</div>
      <h3>Onsite Deployment</h3>
      <p>
        Deploy skilled professionals directly at your location
        for mission-critical or regulated projects.
      </p>
    </div>

    <div className="snapshot-card">
      <div className="snapshot-icon">🔄</div>
      <h3>Dedicated Teams</h3>
      <p>
        Fully managed development teams focused exclusively
        on your product roadmap and business objectives.
      </p>
    </div>

  </div>
</section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="offer-section">
      <h2 className="section-title">What We Offer</h2>

      <div className="slider-wrapper">

        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div
          className="offer-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {offers.map((item, index) => (
            <div className="offer-card" key={index}>
              
              {/* Image ABOVE Heading */}
              <div className="offer-image">
                <img src={item.img} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button> */}
      </div>

      {/* Dots */}
      <div className="dots">
        {offers.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="engagement-section">
  <h2 className="section-title">Engagement Models</h2>

  {/* Contract */}
  <div className="engagement-row">
    <div className="engagement-content">
      <h3>Contract</h3>
      <p>
        Short-term experts hired for specific project requirements, ensuring fast
        execution and flexible scaling. Ideal for urgent deliverables, technology
        migrations or specialized tasks that require immediate expertise without
        long-term commitment. This model helps businesses accelerate timelines while
        maintaining full operational control and cost efficiency.
      </p>
    </div>
    <div className="engagement-image">
      <img src="/src/assets/contract.jpg" alt="Contract Model" />
    </div>
  </div>

  {/* Part-Time (Reverse) */}
  <div className="engagement-row reverse">
    <div className="engagement-content">
      <h3>Part-Time</h3>
      <p>
        Flexible specialists aligned with your budget and project scope, delivering
        consistent progress without the cost of a full-time hire. This model is
        perfect for startups and growing businesses that require expert support on a
        limited schedule while maintaining productivity, quality and agility.
      </p>
    </div>
    <div className="engagement-image">
      <img src="/src/assets/part-time.jpg" alt="Part Time Model" />
    </div>
  </div>

  {/* Full-Time */}
  <div className="engagement-row">
    <div className="engagement-content">
      <h3>Full-Time</h3>
      <p>
        Dedicated professionals working exclusively for your organization, fully
        integrated with your internal teams and workflows. This model ensures
        long-term collaboration, deeper product understanding and consistent
        performance while reducing recruitment complexity and operational overhead.r your organization,
        fully integrated with your internal teams.
      </p>
    </div>
    <div className="engagement-image">
      <img src="/src/assets/full-time.webp" alt="Full Time Model" />
    </div>
  </div>

  {/* Dedicated Teams (Reverse) */}
  <div className="engagement-row reverse">
    <div className="engagement-content">
      <h3>Dedicated Teams</h3>
      <p>
        Fully managed development teams focused on your product roadmap and business
        objectives. From planning and design to development and deployment, the team
        operates as an extension of your company—ensuring scalability, faster
        innovation cycles and seamless collaboration with complete transparency.
      </p>
    </div>
    <div className="engagement-image">
      <img src="/src/assets/team.webp" alt="Dedicated Team Model" />
    </div>
  </div>

</section>


      {/* ================= DEPLOYMENT MODELS (VERY IMPORTANT) ================= */}
      <section className="deployment-section">
        <h2 className="section-title">Engagement & Deployment Models</h2>

        <p className="section-intro">
          Choose the hiring model that fits your team structure and business goals.
        </p>

        <div className="deployment-grid">

          <div className="card">
            <h3> Remote Resources</h3>
            <p>
              Fully remote professionals working in your time zone and processes.
            </p>
          </div>

          <div className="card">
            <h3>Hybrid Teams</h3>
            <p>
              Blended on-site and remote delivery for collaboration-heavy projects.
            </p>
          </div>

          <div className="card">
            <h3> Onsite Deployment</h3>
            <p>
              Resources deployed at your location for critical or regulated projects.
            </p>
          </div>

          <div className="card">
            <h3>Full-Time Resources</h3>
            <p>
              Dedicated professionals working exclusively with your organization.
            </p>
          </div>

          <div className="card">
            <h3>Part-Time & Contract</h3>
            <p>
              Cost-effective specialists for short-term or flexible needs.
            </p>
          </div>

        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="use-case-section">
        <h2 className="section-title">Use Cases</h2>
        <div className="use-case-grid">
          <div className="use-card">
            <img src="/src/assets/product.avif" alt="Product Development" />
            <div className="use-card-content">
              <h3>Product Development Acceleration</h3>
              <p>Build and launch scalable products faster with dedicated engineering support.</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="use-card">
            <img src="/src/assets/mvp.webp" alt="MVP Building" />
            <div className="use-card-content">
              <h3>MVP Development for Startups</h3>
              <p>Rapid MVP development to validate ideas and attract early investors.</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="use-card">
            <img src="/src/assets/scaling.png" alt="Scaling Delivery" />
            <div className="use-card-content">
              <h3>Scaling Engineering Teams</h3>
              <p>Expand delivery capacity with skilled professionals aligned to your roadmap.</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="use-card">
            <img src="/src/assets/skill-gap.webp" alt="Skill Gap Filling" />
            <div className="use-card-content">
              <h3>Skill Gap Filling</h3>
              <p>Bridge critical skill gaps with specialized experts in emerging technologies.</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section class="final-cta">
  <div class="cta-content">
    <h2 className="trust-heading">Need Ready-to-Deploy IT Talent?</h2>
    <p>Whether you need to fill a short-term gap or scale long-term delivery, we’ve got you covered.</p>
    <a href="/schedule-call" className="staff-schedule-btn">👉 Request Resource Profiles</a>
  </div>
  <div class="cta-image">
    <img src="/src/assets/it-staff-augmentation-hero.png" alt="IT Talent"/>
  </div>
</section>


    </main>
    
  );
};

export default StaffAugmentation;
