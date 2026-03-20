"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useSearch } from "@/context/SearchContext";

export default function Header() {
  const pathname = usePathname();
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const nextState = !isMobMenuOpen;
    setIsMobMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <header>
      <div className="container header-inner">
        <Link className="logo" href="/">
          <div className="logo-box">S</div>
          <div className="logo-name">
            <strong>SS Bio Solutions</strong>
            <span>Commercial Kitchen Equipment</span>
          </div>
        </Link>
        
        <nav className={`nav-menu ${isMobMenuOpen ? 'mob-active' : ''}`}>
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/products" className={`nav-link ${pathname === '/products' ? 'active' : ''}`}>Catalogue</Link>
          <Link href="/brands" className={`nav-link ${pathname === '/brands' ? 'active' : ''}`}>Brands</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          
          {/* Mobile-only contact info inside menu */}
          <div className="mob-menu-contact">
            <p>Ready to talk to an expert?</p>
            <a href="tel:+919849461986" className="btn-gold">+91 98494 61986</a>
          </div>
        </nav>

        <div className="header-right">
          <Link href="/products" className="btn-gold">Request Quote</Link>
          
          <button 
            className={`mob-menu-btn ${isMobMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobMenuOpen && <div className="mob-menu-overlay" onClick={toggleMenu} />}
    </header>
  );
}

