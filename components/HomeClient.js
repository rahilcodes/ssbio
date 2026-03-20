"use client";
import Link from "next/link";
import { solutions } from "@/data/solutions";

// ── CORRECT commercial kitchen equipment images for each category ──
const categoryImages = {
  'Supermarket Refrigeration': '/images/cat_supermarket_1774019357742.png',
  'Bar & Wine': '/images/cat_bar_wine_1774019378045.png',
  'Coffee Machines': '/images/cat_coffee_1774019398053.png',
  'Countertop Displays': '/images/cat_countertop_displays_1774019445051.png',
  'Dishwashers': '/images/cat_dishwashers_1774019465265.png',
  'Medical Freezers': '/images/cat_medical_freezers_1774019484882.png',
  'Lincat Ovens': '/images/cat_lincat_ovens_1774019519401.png',
  'Lincat Countertop': '/images/cat_lincat_countertop_1774019536265.png',
  'Fryers': '/images/cat_fryers_1774019554653.png',
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
            ✦ Authorised Middleby Celfrost Partner · Hyderabad
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
              <div className="trust-icon">🏆</div>
              <h4>ISO 9001:2000</h4>
              <p>Quality certified for industrial-grade kitchen equipment standards.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⚡</div>
              <h4>24hr Service Support</h4>
              <p>Round-the-clock technical support and emergency maintenance.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🤝</div>
              <h4>Authorised Partner</h4>
              <p>Official Middleby Celfrost partner for Telangana &amp; AP region.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">📦</div>
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
              <a href="tel:+919849461986" className="btn-gold">📞 Call +91 98494 61986</a>
              <a href="https://wa.me/919849461986" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">💬 WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
