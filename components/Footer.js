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
            <p>📍 Hyderabad, Telangana, India</p>
            <a href="tel:+919849461986">📞 +91 98494 61986</a>
            <a href="https://wa.me/919849461986" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href="mailto:info@ssbiosolutions.com">✉️ info@ssbiosolutions.com</a>
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
