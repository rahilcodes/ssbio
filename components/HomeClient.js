"use client";
import Link from "next/link";
import { solutions } from "@/data/solutions";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// ── CORRECT commercial kitchen equipment images for each category ──
const categoryImages = {
  'Supermarket Refrigeration': `${basePath}/images/cat_supermarket_1774019357742.png`,
  'Bar & Wine': `${basePath}/images/cat_bar_wine_1774019378045.png`,
  'Coffee Machines': `${basePath}/images/cat_coffee_1774019398053.png`,
  'Countertop Displays': `${basePath}/images/cat_countertop_displays_1774019445051.png`,
  'Dishwashers': `${basePath}/images/cat_dishwashers_1774019465265.png`,
  'Medical Freezers': `${basePath}/images/cat_medical_freezers_1774019484882.png`,
  'Lincat Ovens': `${basePath}/images/cat_lincat_ovens_1774019519401.png`,
  'Lincat Countertop': `${basePath}/images/cat_lincat_countertop_1774019536265.png`,
  'Fryers': `${basePath}/images/cat_fryers_1774019554653.png`,
  'Bake-Off Ovens': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
  'Bakery Tools': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
  'Blast Chillers': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
  'Blood Bank': 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
  'Chest Freezers': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
};

const fallbackImg = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800';

export default function HomeClient({ categories }) {
  const topCategories = categories.slice(0, 9);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px', color: 'var(--gold)' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            Authorised Celfrost Partner · Hyderabad
          </div>
          <h1>Professional Equipment for <em>World-Class Kitchens</em></h1>
          <p>Toastmaster Bakery &amp; Catering + Celfrost Kitchen Refrigeration — complete solutions for restaurants, hotels, QSRs and bakeries across Telangana &amp; AP.</p>
          <div className="hero-btns">
            <Link href="/products" className="btn-gold">Explore Collection</Link>
            <a href="tel:+919849461986" className="btn-outline">Talk to Experts</a>
          </div>
          <div className="hero-divider" />
          <div className="stats-grid">
            <div className="stat-item"><h3>12</h3><span>Premium Brands</span></div>
            <div className="stat-item"><h3>158+</h3><span>Products</span></div>
            <div className="stat-item"><h3>24hr</h3><span>Service Support</span></div>
            <div className="stat-item"><h3>ISO</h3><span>9001:2000 Certified</span></div>
          </div>
        </div>
      </section>

      {/* ── KITCHEN SOLUTIONS ── */}
      <section className="solutions-section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">What We Serve</span>
            <h2>Kitchen Solutions</h2>
            <p>Tailored equipment packages for every type of operation — from casual dining to institutional bulk cooking.</p>
          </div>
          <div className="sol-grid">
            {solutions.map((sol) => (
              <Link href="/products" key={sol.id} className="sol-card">
                <div className="sol-img-wrap">
                  <img
                    src={sol.img}
                    alt={sol.title}
                    onError={(e) => { e.target.src = fallbackImg; }}
                  />
                  <div className="sol-overlay" />
                </div>
                <div className="sol-body">
                  <h3>{sol.title}</h3>
                  <p>{sol.desc}</p>
                  <span className="read-more">Explore Equipment →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSE BY CATEGORY ── */}
      <section className="category-section">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Find Your Equipment</span>
            <h2>Browse by Category</h2>
            <p>Discover the right tools for your specific operational needs.</p>
          </div>
          <div className="cat-grid">
            {topCategories.map((cat) => (
              <Link href={`/products?cat=${encodeURIComponent(cat)}`} key={cat} className="cat-card">
                <img
                  src={categoryImages[cat] || fallbackImg}
                  alt={cat}
                  className="cat-card-img"
                  onError={(e) => { e.target.src = fallbackImg; }}
                />
                <div className="cat-card-overlay" />
                <div className="cat-card-content">
                  <div className="cat-name">{cat}</div>
                  <div className="cat-cta">View Products →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34"></path>
                  <path d="M4.68 14.68c-.28-.58-.45-1.22-.52-1.9a13.9 13.9 0 0 1 0-7.56"></path>
                  <path d="M19.32 14.68c.28-.58.45-1.22.52-1.9a13.9 13.9 0 0 0 0-7.56"></path>
                  <path d="M15 11c0 4.14-3 7-7 7s-7-2.86-7-7"></path>
                  <path d="M8 21v-2h8v2"></path>
                  <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                </svg>
              </div>
              <h4>ISO 9001:2000</h4>
              <p>Quality certified for industrial-grade kitchen equipment standards.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h4>24hr Service Support</h4>
              <p>Round-the-clock technical support and emergency maintenance.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Authorised Partner</h4>
              <p>Official Celfrost partner for Telangana &amp; AP region.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  <path d="m3.3 7 8.7 5 8.7-5"></path>
                  <path d="M12 22V12"></path>
                </svg>
              </div>
              <h4>158+ Products</h4>
              <p>Complete range from refrigeration to cooking and food service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Ready to outfit your kitchen?</h2>
            <p>Our Hyderabad experts will create a personalized equipment plan and competitive quote within 24 hours.</p>
            <div className="cta-btns">
              <a href="tel:+919849461986" className="btn-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call +91 98494 61986
              </a>
              <a href="https://wa.me/919849461986" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
