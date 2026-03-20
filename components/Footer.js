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
              Authorised Middleby Celfrost partner for Telangana &amp; Andhra Pradesh. 
              Supplying world-class kitchen equipment since 2010.
            </p>
          </div>

          <div className="footer-nav">
            <h5>Quick Links</h5>
            <Link href="/">Home</Link>
            <Link href="/products">Product Catalogue</Link>
            <Link href="/products">Brands</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', color: 'var(--gold)' }}>
                 <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path>
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
          <p>Authorised Middleby Celfrost Dealer · Hyderabad · Telangana &amp; AP</p>
        </div>
      </div>
    </footer>
  );
}
