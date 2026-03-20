import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SS Bio Solutions — Commercial Kitchen Equipment Catalogue",
  description: "Professional equipment solutions for restaurants, hotels, and bakeries. Authorised Celfrost partner in Hyderabad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SearchProvider>
          {/* Announcement bar */}
          <div className="topbar">
            <div className="container topbar-inner">
              <span className="topbar-left">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', color: 'var(--gold)' }}>
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
                ISO 9001:2000 Certified · Authorised Celfrost Partner
              </span>
              <span className="topbar-right">
                <a href="tel:+919849461986">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 98494 61986
                </a>
                <span className="topbar-divider">|</span>
                <a href="https://wa.me/919849461986">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path>
                  </svg>
                  WhatsApp
                </a>
              </span>
            </div>
          </div>
          <Header />
          {children}
          <Footer />

          {/* ── STICKY MOBILE BOTTOM BAR (converts mobile visitors) ── */}
          <div className="mob-cta-bar">
            <a href="tel:+919849461986" className="mob-cta-bar-call">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Us
            </a>
            <a
              href="https://wa.me/919849461986?text=Hi%20SS%20Bio%20Solutions%2C%20I%20need%20a%20product%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="mob-cta-bar-wa"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path>
              </svg>
              WhatsApp Enquiry
            </a>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}

