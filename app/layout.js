import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SS Bio Solutions — Commercial Kitchen Equipment Catalogue",
  description: "Professional equipment solutions for restaurants, hotels, and bakeries. Authorised Middleby Celfrost partner in Hyderabad.",
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
              <span>🏆 ISO 9001:2000 Certified · Authorised Middleby Celfrost Partner</span>
              <span className="topbar-right">
                <a href="tel:+919849461986">📞 +91 98494 61986</a>
                <span className="topbar-divider">|</span>
                <a href="https://wa.me/919849461986">💬 WhatsApp</a>
              </span>
            </div>
          </div>
          <Header />
          {children}
          <Footer />

          {/* ── STICKY MOBILE BOTTOM BAR (converts mobile visitors) ── */}
          <div className="mob-cta-bar">
            <a href="tel:+919849461986" className="mob-cta-bar-call">
              📞 Call Us
            </a>
            <a
              href="https://wa.me/919849461986?text=Hi%20SS%20Bio%20Solutions%2C%20I%20need%20a%20product%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="mob-cta-bar-wa"
            >
              💬 WhatsApp Enquiry
            </a>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}

