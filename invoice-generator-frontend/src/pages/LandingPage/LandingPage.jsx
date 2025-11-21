import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero-section section-hover shadow-section">
        <div className="hero-content">
          <h1 className="title fade-up">
            Generate Professional <span>Invoices</span> Instantly 💼
          </h1>
          <p className="subtitle fade-up delay-1">
            Create business-ready invoices in seconds with our intuitive tool.
          </p>
          <div className="btn-group fade-up delay-2">
            <a href="/generate">
              <button className="btn primary btn-glow pop">Generate Invoice</button>
            </a>
            <a href="#how-it-works">
              <button className="btn secondary btn-glow pop learn-more-btn">Learn More</button>
            </a>
          </div>
          <p className="small-text fade-up delay-3">
            No signup • 100% Free • Business-Grade Accuracy
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-section section-hover shadow-section">
        <div className="container">
          <h2 className="section-title fade-up">How It Works?</h2>
          <p className="section-subtitle fade-up delay-1">
            Simple steps to create professional invoices instantly.
          </p>
          <div className="row-cards">
            {[
              { step: "1. Add Your Details", desc: "Enter company & client info easily." },
              { step: "2. Choose Template", desc: "Pick from beautiful invoice designs." },
              { step: "3. View Preview", desc: "Check invoice in real-time before download." },
              { step: "4. Download Invoice", desc: "Download PDF instantly or print it." },
            ].map((item, i) => (
              <a href="/generate" key={i} className="card hover-card fade-up delay-card">
                <h5>{item.step}</h5>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-hover shadow-section">
        <div className="container">
          <h2 className="section-title fade-up">Why Choose Our Tool?</h2>
          <p className="section-subtitle fade-up delay-1">
            Perfect for freelancers, startups & businesses.
          </p>
          <div className="row-cards">
            {[
              { title: "💰 Fully Free Forever", text: "No subscriptions. Unlimited invoices." },
              { title: "📎 Add Logo & Branding", text: "Showcase your brand professionally." },
              { title: "🌐 Multi-Currency", text: "Bill clients globally with ease." },
              { title: "🧾 Auto Tax Calculation", text: "Smart GST/VAT calculation automatically." },
              { title: "📥 One-Click Download", text: "Download or print instantly." },
              { title: "📊 Smart Price Breakdown", text: "Totals, taxes & discounts auto-calculated." },
            ].map((f, i) => (
              <a href="/generate" key={i} className="card hover-card fade-up delay-card">
                <h5>{f.title}</h5>
                <p>{f.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <footer className="cta-section section-hover shadow-section">
        <h4 className="footer-title fade-up">Start Creating Invoices Professionally</h4>
        <a href="/generate">
          <button className="btn primary btn-glow pop mb-3">Generate Invoice Now</button>
        </a>
        <div className="social-icons fade-up delay-1">
          <span>🌐</span>
          <span>🐦</span>
          <span>📘</span>
        </div>
        <small className="copyright fade-up delay-2">
          © {new Date().getFullYear()} QuickInvoice — All Rights Reserved
        </small>
      </footer>

    </div>
  );
};

export default LandingPage;
