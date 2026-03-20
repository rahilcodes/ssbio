"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useSearch } from "@/context/SearchContext";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useSearch();
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');

  // Sych local search with context
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  // Close menu on route change
  useEffect(() => {
    setIsMobMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const nextState = !isMobMenuOpen;
    setIsMobMenuOpen(nextState);
    if (nextState) setIsSearchOpen(false); // Close search if menu opens
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setSearchQuery(localSearch);
    if (pathname !== '/products') {
      router.push('/products');
    }
    setIsSearchOpen(false);
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
          {/* Desktop Search */}
          <div className={`header-search-wrap ${isSearchOpen ? 'active' : ''}`}>
            <form onSubmit={handleSearchSubmit}>
              <input 
                type="text" 
                placeholder="Search equipment..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                onBlur={() => !localSearch && setIsSearchOpen(false)}
              />
              <button 
                type="button" 
                className="search-toggle-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle Search"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </form>
          </div>

          <Link href="/products" className="btn-gold d-hide-mob">Request Quote</Link>
          
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

      {/* Mobile Search Overlay */}
      <div className={`mob-search-overlay ${isSearchOpen ? 'active' : ''}`}>
        <div className="container">
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="What are you looking for?"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              autoFocus
            />
            <button type="submit" className="mob-search-submit">Search</button>
            <button type="button" className="mob-search-close" onClick={() => setIsSearchOpen(false)}>✕</button>
          </form>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobMenuOpen && <div className="mob-menu-overlay" onClick={toggleMenu} />}
    </header>
  );
}

