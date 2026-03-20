import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1>Contact Us</h1>
          <p>We're ready to help you find the right commercial kitchen equipment. Call, WhatsApp or visit our Hyderabad showroom.</p>
        </div>
      </section>

      <section style={{ background: '#f5f5f7', padding: '7rem 0' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Left: Info */}
            <div className="contact-info-col">
              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <h3>Call Us</h3>
                <p>Talk to our equipment specialists directly.</p>
                <a href="tel:+919849461986" className="contact-link">+91 98494 61986</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">💬</div>
                <h3>WhatsApp</h3>
                <p>Send us a message for quick responses and product enquiries.</p>
                <a
                  href="https://wa.me/919849461986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <h3>Email</h3>
                <p>Send us your requirements and we'll respond within 24 hours.</p>
                <a href="mailto:info@ssbiosolutions.com" className="contact-link">info@ssbiosolutions.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <h3>Visit Our Showroom</h3>
                <p>See our equipment range in person at our Hyderabad showroom.</p>
                <p className="contact-address">Hyderabad, Telangana, India<br />Serving Telangana &amp; Andhra Pradesh</p>
              </div>
            </div>

            {/* Right: Quick Enquiry */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <h2>Quick Enquiry</h2>
                <p className="contact-form-sub">Fill in your details and we'll get back to you within 2 business hours.</p>

                <div className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input type="text" placeholder="e.g. Rahul Sharma" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" placeholder="+91 98765 43210" className="form-input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Business / Restaurant Name</label>
                    <input type="text" placeholder="e.g. The Grand Bakery" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Equipment You're Interested In</label>
                    <input type="text" placeholder="e.g. Blast Chiller, Contact Grill..." className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your kitchen requirements, capacity, budget, etc."
                      className="form-input form-textarea"
                    />
                  </div>
                  <a
                    href="https://wa.me/919849461986?text=Hi%2C+I%27d+like+to+enquire+about+commercial+kitchen+equipment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ display: 'block', textAlign: 'center', width: '100%' }}
                  >
                    💬 Send via WhatsApp
                  </a>
                  <p style={{ textAlign: 'center', color: '#aaa', fontSize: '0.78rem', marginTop: '0.75rem' }}>
                    Or call us directly at <a href="tel:+919849461986" style={{ color: 'var(--gold)' }}>+91 98494 61986</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section style={{ background: 'var(--dark-bg)', padding: '5rem 0' }}>
        <div className="container">
          <div className="hours-grid">
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🕐</div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Monday – Saturday</h4>
              <p style={{ color: '#666' }}>9:00 AM – 7:00 PM</p>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>📞</div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Emergency Support</h4>
              <p style={{ color: '#666' }}>24 hours, 7 days a week</p>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚚</div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Service Coverage</h4>
              <p style={{ color: '#666' }}>Telangana &amp; Andhra Pradesh</p>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚡</div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Quote Response</h4>
              <p style={{ color: '#666' }}>Within 2 business hours</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
