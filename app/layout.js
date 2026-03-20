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
        </SearchProvider>
      </body>
    </html>
  );
}
