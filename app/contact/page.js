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
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <h3>Call Us</h3>
                <p>Talk to our equipment specialists directly.</p>
                <a href="tel:+919849461986" className="contact-link">+91 98494 61986</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
                </div>
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
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <h3>Email</h3>
                <p>Send us your requirements and we'll respond within 24 hours.</p>
                <a href="mailto:info@ssbiosolutions.com" className="contact-link">info@ssbiosolutions.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
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
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                    </svg>
                    Send via WhatsApp
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
              <div style={{ color: 'var(--gold)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Monday – Saturday</h4>
              <p style={{ color: '#666' }}>9:00 AM – 7:00 PM</p>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ color: 'var(--gold)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Emergency Support</h4>
              <p style={{ color: '#666' }}>24 hours, 7 days a week</p>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ color: 'var(--gold)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Service Coverage</h4>
              <p style={{ color: '#666' }}>Telangana &amp; Andhra Pradesh</p>
            </div>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ color: 'var(--gold)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h4 style={{ color: 'white', fontFamily: 'Inter,sans-serif', marginBottom: '0.5rem' }}>Quote Response</h4>
              <p style={{ color: '#666' }}>Within 2 business hours</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
