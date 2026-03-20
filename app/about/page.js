import Link from "next/link";

const milestones = [
  { year: "2010", title: "Founded in Hyderabad", desc: "Established SS Bio Solutions as a commercial kitchen equipment distributor serving the Telangana region." },
  { year: "2014", title: "Celfrost Partnership", desc: "Became an authorised dealer for Celfrost commercial refrigeration, expanding our cold chain offerings." },
  { year: "2017", title: "Toastmaster Authorisation", desc: "Added Toastmaster bakery and catering equipment to our portfolio, serving bakeries and QSRs." },
  { year: "2020", title: "ISO Certification", desc: "Achieved ISO 9001:2000 certification, formalising our commitment to quality service and operations." },
  { year: "2023", title: "Multi-Brand Portfolio", desc: "Expanded to 12+ premium brands including Lincat, La Cimbali, Vestfrost, Hamilton Beach and more." },
];

const values = [
  { icon: "🏆", title: "Quality First", desc: "We only stock and recommend equipment that meets international quality standards for professional kitchens." },
  { icon: "🤝", title: "Expert Guidance", desc: "Our team brings deep technical knowledge to help you choose the right equipment for your specific operation." },
  { icon: "⚡", title: "24hr Service", desc: "Round-the-clock technical support and emergency maintenance ensures minimal downtime for your kitchen." },
  { icon: "💡", title: "Complete Solutions", desc: "From consultation and equipment selection to installation and after-sales support — we're with you end to end." },
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
                <div className="cert-icon">🏅</div>
                <h3>ISO 9001:2000</h3>
                <p>Certified for quality management systems, ensuring consistent service and product standards.</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">✅</div>
                <h3>Authorised Partner</h3>
                <p>Official Middleby Celfrost authorised dealer for Telangana &amp; Andhra Pradesh region.</p>
              </div>
              <div className="cert-card">
                <div className="cert-icon">🔧</div>
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
