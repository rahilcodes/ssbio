import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Direct Support</span>
          <h1>Contact SS Bio Solutions</h1>
          <p>We're ready to help you find the right commercial kitchen equipment. Visit our Hyderabad showroom or reach out via phone, WhatsApp, or email.</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section style={{ background: '#f5f5f7', padding: '6rem 0' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Left: Info Cards */}
            <div className="contact-info-col">
              <div className="contact-card premium-shadow">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <h3>Call Our Experts</h3>
                <p>Talk to our equipment specialists directly for technical advice and pricing.</p>
                <a href="tel:+919849461986" className="contact-link">+91 98494 61986</a>
              </div>

              <div className="contact-card premium-shadow">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
                </div>
                <h3>WhatsApp Direct</h3>
                <p>Send your requirements for instant quotes and product catalogs.</p>
                <a
                  href="https://wa.me/919849461986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-card premium-shadow">
                <div className="contact-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </div>
                <h3>Email Us</h3>
                <p>Send detailed project requirements to our core team.</p>
                <a href="mailto:info@ssbiosolutions.com" className="contact-link">info@ssbiosolutions.com</a>
              </div>
            </div>

            {/* Right: Quick Enquiry */}
            <div className="contact-form-col">
              <div className="contact-form-card premium-shadow">
                <div className="form-header-badge">Response in 2h</div>
                <h2>Quick Enquiry Form</h2>
                <p className="contact-form-sub">Looking for a specific model? Fill in your details and our team will get back to you with the best price.</p>

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
                    <label>Business / Institution Name</label>
                    <input type="text" placeholder="e.g. The Grand Hotel" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Interested Products</label>
                    <input type="text" placeholder="e.g. Blast Chiller, Deck Oven..." className="form-input" />
                  </div>
                  <div className="form-group">
                    <label>Your Message / Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project capacity or specific equipment needs."
                      className="form-input form-textarea"
                    />
                  </div>
                  <a
                    href="https://wa.me/919849461986?text=Hi%2C+I%27d+like+to+enquire+about+commercial+kitchen+equipment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '1.1rem' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
                    </svg>
                    Send Enquiry via WhatsApp
                  </a>
                  <p style={{ textAlign: 'center', color: '#666', fontSize: '0.82rem', marginTop: '1rem' }}>
                    Preferred: Direct mobile enquiry for faster response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-card premium-shadow">
            <div className="map-header">
              <div className="map-header-content">
                <span className="section-tag">Find Us</span>
                <h2>Visit Our Hyderabad Showroom</h2>
                <p>Located centrally in Hyderabad, our showroom features the latest equipment from Celfrost and other global brands.</p>
                <div className="map-address-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Hyderabad, Telangana — Serving the entire AP & Telangana region.</span>
                </div>
              </div>
              <a 
                href="https://maps.app.goo.gl/Ff7EExoY7p6h8qY17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ height: 'fit-content' }}
              >
                Get Directions
              </a>
            </div>
            <div className="map-iframe-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6037453927115!2d78.5396098!3d17.430794000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99ed644c1447%3A0x2fe51ba5c384ff0d!2sSS%20BIO%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1774033243410!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section style={{ background: '#fff', padding: '6rem 0' }}>
        <div className="container">
          <div className="hours-grid">
            <div className="hours-item">
              <div className="hours-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h4>Operating Hours</h4>
              <p className="hours-days">Monday – Saturday</p>
              <p className="hours-time">9:00 AM – 7:00 PM</p>
            </div>
            <div className="hours-item">
              <div className="hours-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <h4>Technical Support</h4>
              <p className="hours-days">Emergency Assistance</p>
              <p className="hours-time">24/7 Priority Support</p>
            </div>
            <div className="hours-item">
              <div className="hours-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              </div>
              <h4>Expert Consultation</h4>
              <p className="hours-days">Site Surveys & Planning</p>
              <p className="hours-time">Free Technical Consultation</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
