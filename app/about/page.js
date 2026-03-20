import Link from "next/link";

const milestones = [
  { year: "2010", title: "Founded in Hyderabad", desc: "Established SS Bio Solutions as a commercial kitchen equipment distributor serving the Telangana region." },
  { year: "2014", title: "Celfrost Partnership", desc: "Became an authorised dealer for Celfrost commercial refrigeration, expanding our cold chain offerings." },
  { year: "2017", title: "Toastmaster Authorisation", desc: "Added Toastmaster bakery and catering equipment to our portfolio, serving bakeries and QSRs." },
  { year: "2020", title: "ISO Certification", desc: "Achieved ISO 9001:2000 certification, formalising our commitment to quality service and operations." },
  { year: "2023", title: "Multi-Brand Portfolio", desc: "Expanded to 12+ premium brands including Lincat, La Cimbali, Vestfrost, Hamilton Beach and more." },
];

const values = [
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"></path><path d="M4.68 14.68c-.28-.58-.45-1.22-.52-1.9a13.9 13.9 0 0 1 0-7.56"></path><path d="M19.32 14.68c.28-.58.45-1.22.52-1.9a13.9 13.9 0 0 0 0-7.56"></path><path d="M15 11c0 4.14-3 7-7 7s-7-2.86-7-7"></path><path d="M8 21v-2h8v2"></path><path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg>, 
    title: "Quality First", 
    desc: "We only stock and recommend equipment that meets international quality standards for professional kitchens." 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, 
    title: "Expert Guidance", 
    desc: "Our team brings deep technical knowledge to help you choose the right equipment for your specific operation." 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>, 
    title: "24hr Service", 
    desc: "Round-the-clock technical support and emergency maintenance ensures minimal downtime for your kitchen." 
  },
  { 
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.674"></path><path d="M10 20h4"></path><path d="M12 2v1"></path><path d="M21 12h1"></path><path d="M2 12h1"></path><path d="M12 22v-2"></path><path d="M12 7v4"></path><path d="M4.93 4.93l.7.7"></path><path d="M18.37 18.37l.7.7"></path><path d="M18.37 4.93l-.7.7"></path><path d="M4.93 18.37l-.7.7"></path><path d="M12 17c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6Z"></path></svg>, 
    title: "Complete Solutions", 
    desc: "From consultation and equipment selection to installation and after-sales support — we're with you end to end." 
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Our Story</span>
          <h1>About SS Bio Solutions</h1>
          <p>Your trusted partner for world-class commercial kitchen equipment in Hyderabad, Telangana &amp; Andhra Pradesh.</p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: '#fff', padding: '7rem 0' }}>
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-text">
              <span className="section-tag">Who We Are</span>
              <h2>Powering Professional Kitchens Since 2010</h2>
              <p>SS Bio Solutions is the authorised Middleby Celfrost partner for Hyderabad, serving restaurants, hotels, QSRs, bakeries, and institutional kitchens across Telangana and Andhra Pradesh.</p>
              <p>We bring together the world's most respected commercial kitchen equipment brands under one roof, backed by a team of trained engineers and equipment specialists who understand the unique demands of Indian commercial food operations.</p>
              <div className="about-stats">
                <div className="about-stat">
                  <strong>12+</strong><span>Premium Brands</span>
                </div>
                <div className="about-stat">
                  <strong>158+</strong><span>Products</span>
                </div>
                <div className="about-stat">
                  <strong>500+</strong><span>Kitchens Equipped</span>
                </div>
                <div className="about-stat">
                  <strong>24hr</strong><span>Support</span>
                </div>
              </div>
            </div>
            <div className="about-cert">
              <div className="cert-card">
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </div>
                <h3>ISO 9001:2000</h3>
                <p>Certified for quality management systems, ensuring consistent service and product standards.</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3>Authorised Partner</h3>
                <p>Official Celfrost authorised dealer for Telangana &amp; Andhra Pradesh region.</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3>Trained Engineers</h3>
                <p>Factory-trained service engineers for all brands we carry, ensuring expert technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#f5f5f7', padding: '7rem 0' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-tag">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="trust-grid">
            {values.map((v) => (
              <div key={v.title} className="trust-item">
                <div className="trust-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#fff', padding: '7rem 0' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Our Journey</span>
            <h2>Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Ready to work with us?</h2>
          <p>Speak with our equipment specialists today and let us help you build your perfect kitchen.</p>
          <div className="cta-btns">
            <Link href="/contact" className="btn-gold">Get in Touch</Link>
            <Link href="/products" className="btn-outline">Browse Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
