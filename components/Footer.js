"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top bar */}
      <div className="footer-top">
        <div className="container footer-top-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-box">S</div>
              <div className="logo-name">
                <strong>SS Bio Solutions</strong>
                <span>Commercial Kitchen Equipment</span>
              </div>
            </div>
            <p className="footer-tagline">
              Authorised Celfrost partner for Telangana &amp; Andhra Pradesh. 
              Supplying world-class kitchen equipment since 2010.
            </p>
          </div>

          <div className="footer-nav">
            <h5>Quick Links</h5>
            <Link href="/">Home</Link>
            <Link href="/products">Product Catalogue</Link>
            <Link href="/products">Brands</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-nav">
            <h5>Equipment Categories</h5>
            <Link href="/products?cat=Bake-Off%20Ovens">Bake-Off Ovens</Link>
            <Link href="/products?cat=Blast%20Chillers">Blast Chillers</Link>
            <Link href="/products?cat=Coffee%20Machines">Coffee Machines</Link>
            <Link href="/products?cat=Cold%20Rooms">Cold Rooms</Link>
            <Link href="/products?cat=Chest%20Freezers">Chest Freezers</Link>
          </div>

          <div className="footer-contact">
            <h5>Contact Us</h5>
            <p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', color: 'var(--gold)' }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Hyderabad, Telangana, India
            </p>
            <a href="tel:+919849461986">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', color: 'var(--gold)' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 98494 61986
            </a>
            <a href="https://wa.me/919849461986" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px', color: 'var(--gold)' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path>
              </svg>
              WhatsApp
            </a>
            <a href="mailto:info@ssbiosolutions.com">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', color: 'var(--gold)' }}>
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              info@ssbiosolutions.com
            </a>
            <div className="footer-cert">
              <span className="cert-badge">ISO 9001:2000</span>
              <span className="cert-badge">Authorised Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} SS Bio Solutions. All rights reserved.</p>
          <p>Authorised Celfrost Dealer · Hyderabad · Telangana &amp; AP</p>
        </div>
      </div>
    </footer>
  );
}
